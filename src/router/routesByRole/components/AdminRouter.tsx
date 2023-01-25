import { Navigate, Route, Routes } from "react-router-dom";

import { routesAdmin } from "../constants";

const AdminRouter = () => {
    return (
        <Routes>
            <Route path="home" element={<h1>Holaaaa</h1>}/>
            {routesAdmin.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.component />}
                />
            ))}
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
    );
};

export default AdminRouter;
