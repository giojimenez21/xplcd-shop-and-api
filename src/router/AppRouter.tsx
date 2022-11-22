import { Spinner } from "@chakra-ui/react";
import { FC, useContext, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Login, Register } from "../pages";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import { AuthContext } from "../context";
import ClientRouter from "./routesByRole/ClientRouter";
import { checkSession } from "../helpers/checkSession";
import { SpinnerStyled } from "../styled-components";

const AppRouter: FC = () => {
    const [isloading, setIsloading] = useState<boolean>(true);
    const { userState, dispatchUser } = useContext(AuthContext);
    const { user } = userState;   
    
    useEffect(() => {
        checkSession()
        .then((user) => {
            setIsloading(false);
            dispatchUser({ type: 'login', payload: user });
        })
        .catch(() => setIsloading(false));
    }, [])
    

    if (isloading) {
        return <SpinnerStyled />
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
                            <ClientRouter />
                        </PrivateRoute>
                    }
                />

                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
