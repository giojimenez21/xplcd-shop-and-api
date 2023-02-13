import { FC } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { useRenew } from "../hooks";
import { Layout } from "../components";
import { SpinnerStyled } from "../styled-components";
import { PrivateRoute, PublicRoute } from "./components";
import { AdminRouter, AnyRoleRouter } from "./routesByRole";
import { AboutUs, Login, Main, Offices, Politics, Register, TermsAndConditions } from "../pages";

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

                    <Route path="politica-de-privacidad" element={<Politics />}/>
                    <Route path="quienes-somos" element={<AboutUs />}/>
                    <Route path="terminos-y-condiciones" element={<TermsAndConditions />}/>
                    <Route path="sucursales" element={<Offices />}/>

                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default AppRouter;
