import { FC } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { useRenew } from "../hooks";
import { Layout } from "../components";
import { Login, Main, Register } from "../pages";
import { SpinnerStyled } from "../styled-components";
import { PrivateRoute, PublicRoute } from "./components";
import { AdminRouter, AnyRoleRouter } from "./routesByRole";

const AppRouter: FC = () => {
    const { isLoading, user } = useRenew();

    if (isLoading) {
        return <SpinnerStyled />;
    }

    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route 
                        index
                        element={
                            <PublicRoute user={user}>
                                <Main />
                            </PublicRoute>
                        }
                    />
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
            </Layout>
        </BrowserRouter>
    );
};

export default AppRouter;
