import { Navigate, Route, Routes } from "react-router-dom";

import { UsersPage } from "../../pages";
import { Navbar } from "../../components";

const AdminRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route index element={<Navigate to="usuarios" />} />
                <Route path="usuarios" element={<UsersPage />} />
                <Route path="Listas" element={<h1>Listas</h1>} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
};

export default AdminRouter;
