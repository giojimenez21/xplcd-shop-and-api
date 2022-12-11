import { Navigate, Route, Routes } from "react-router-dom";

import { Navbar } from "../../components";
import { EditUserPage, SalesPage, UsersPage } from "../../pages";

const AdminRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route index element={<Navigate to="usuarios" />} />
                <Route path="usuarios" element={<UsersPage />} />
                <Route path="editarUsuario/:id" element={<EditUserPage />} />
                <Route path="pedidos" element={<SalesPage />} />
                <Route path="listas" element={<h1>Listas</h1>} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
};

export default AdminRouter;
