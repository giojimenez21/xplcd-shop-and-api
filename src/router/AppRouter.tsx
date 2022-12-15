import { FC, useContext, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { AuthContext } from "../context";
import { checkSession } from "../helpers";
import { Login, Register } from "../pages";
import { SpinnerStyled } from "../styled-components";
import { PrivateRoute, PublicRoute } from "./components";
import { AdminRouter, AnyRoleRouter } from "./routesByRole";

const AppRouter: FC = () => {
    const [isloading, setIsloading] = useState<boolean>(true);
    const { userState, dispatchUser } = useContext(AuthContext);
    const { user } = userState;

    useEffect(() => {
        checkSession()
            .then((user) => {
                setIsloading(false);
                dispatchUser({ type: "login", payload: user });
            })
            .catch(() => setIsloading(false));
    }, []);

    if (isloading) {
        return <SpinnerStyled />;
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    index
                    path="/login"
                    element={
                        <PublicRoute user={user}>
                            <Login />
                        </PublicRoute>
                    }
                />

                <Route
                    index
                    path="/register"
                    element={
                        <PublicRoute user={user}>
                            <Register />
                        </PublicRoute>
                    }
                />

                <Route
                    path="/*"
                    element={
                        <PrivateRoute user={user}>
                            {user.role === "ADMIN" ? (
                                <AdminRouter />
                            ) : (
                                <AnyRoleRouter />
                            )}
                        </PrivateRoute>
                    }
                />

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
