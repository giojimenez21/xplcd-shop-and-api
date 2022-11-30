import { useContext } from "react";
import { useToast } from "@chakra-ui/react";

import { ShopList, Subtotal } from "./components";
import { ProductContext } from "../../../context";
import ShopCartContainer from "./styled-components/ShopCartContainer.styled";

const ShopCart = () => {
    const { productState } = useContext(ProductContext);
    const toast = useToast();

    return productState.cart.length > 0 ? (
        <ShopCartContainer>
            <ShopList shopProducts={productState.cart} />
            <Subtotal />
        </ShopCartContainer>
    ) : <h1>No hay productos</h1>;
};

export default ShopCart;
