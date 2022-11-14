import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../components";
import { DetailProduct, Products } from "../../pages";

const ClientRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route index element={<Navigate to="products" />} />
                <Route path="products" element={<Products />} />
                <Route path="products/:id" element={<DetailProduct />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
};

export default ClientRouter;
