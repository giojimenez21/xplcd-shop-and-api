import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Navbar } from "../../../components";
import { AuthContext } from "../../../context";
import { routesAnyRole } from "../constants/routesAnyRole";

const AnyRoleRouter = () => {
    const { userState: { user } } = useContext(AuthContext);

    return (
        <Routes>
            <Route index element={<Navigate to="productos" />} />
            {routesAnyRole
                .filter(
                    (route) =>
                        route.role.includes(user.role) ||
                        route.role.includes("ALL")
                )
                .map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.component />}
                    />
                ))}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AnyRoleRouter;
