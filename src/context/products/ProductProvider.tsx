import { FC, ReactNode, useReducer } from "react"

import { productReducer } from "./product.reducer";
import { ProductContext, ProductState } from "./ProductContext";

interface Iprops {
    children: ReactNode | ReactNode[];
}

export const initalStateProducts: ProductState = {
    cart: [],
    salesOpened: [],
    salesClosed: []
};

const ProductProvider:FC<Iprops> = ({children}) => {
    const [productState, dispatchProduct] = useReducer(productReducer, initalStateProducts);
    return (
        <ProductContext.Provider value={{productState, dispatchProduct}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;