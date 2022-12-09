import { createContext, Dispatch } from "react";
import { ProductCart, Sale } from "./product.interface";
import { ProductsAction } from "./product.reducer";


export interface ProductState {
    cart: ProductCart[];
    salesOpened: Sale[];
    salesClosed: Sale[];
}

interface ProductProps {
    productState: ProductState,
    dispatchProduct: Dispatch<ProductsAction>
}

export const ProductContext = createContext<ProductProps>({} as ProductProps);