import { Navigate, Route, Routes } from "react-router-dom";

import { Navbar } from "../../components";
import { EditUserPage, ListPage, SalesPage, UsersPage } from "../../pages";

const AdminRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route index element={<Navigate to="usuarios" />} />
                <Route path="usuarios" element={<UsersPage />} />
                <Route path="editarUsuario/:id" element={<EditUserPage />} />
                <Route path="pedidos" element={<SalesPage />} />
                <Route path="listas" element={<ListPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
};

export default AdminRouter;
