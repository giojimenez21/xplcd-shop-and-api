import { Button, useToast } from "@chakra-ui/react";
import { useContext } from "react";
import { ProductContext } from "../../context";
import ShopList from "./components/ShopList";
import Subtotal from "./components/Subtotal";
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
