import { FC } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { useRenew } from "../hooks";
import { Footer } from "../components";
import { Login, Register } from "../pages";
import { SpinnerStyled } from "../styled-components";
import { PrivateRoute, PublicRoute } from "./components";
import { AdminRouter, AnyRoleRouter } from "./routesByRole";
import { Layout } from "../components/layout";

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
            </Layout>
        </BrowserRouter>
    );
};

export default AppRouter;
