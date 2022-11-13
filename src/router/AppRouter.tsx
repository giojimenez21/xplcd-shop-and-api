import { Spinner } from "@chakra-ui/react";
import { FC, useContext, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Login } from "../pages";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import { AuthContext } from "../context";
import ClientRouter from "./routesByRole/ClientRouter";
import { checkSession } from "../helpers/checkSession";

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
        return <Spinner size="xl"/>
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
