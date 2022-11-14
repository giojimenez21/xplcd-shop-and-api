import { createContext, Dispatch } from "react";
import { ProductsAction } from "./product.reducer";

export interface Product {
    id: number;
    name: string;
    list_price: number;
    qty_available: number;
}

export interface ProductState {
    products: Product[]
}

interface ProductProps {
    productState: ProductState,
    dispatchProduct: Dispatch<ProductsAction>
}

export const ProductContext = createContext<ProductProps>({} as ProductProps);