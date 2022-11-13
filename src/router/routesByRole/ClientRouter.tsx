import { Route, Routes } from "react-router-dom";
import { Navbar } from "../../components";
import { Products } from "../../pages";

const ClientRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route index element={<Products />} />
                <Route path="products" element={<Products />} />
            </Routes>
        </>
    );
};

export default ClientRouter;
