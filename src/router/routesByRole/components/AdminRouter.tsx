import { Navigate, Route, Routes } from "react-router-dom";

import { routesAdmin } from "../constants";
import { Navbar } from "../../../components";

const AdminRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route index element={<Navigate to="usuarios" />} />
                {routesAdmin.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.component />}
                    />
                ))}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
};

export default AdminRouter;
