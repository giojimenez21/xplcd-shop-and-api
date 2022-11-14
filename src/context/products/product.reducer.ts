import { Product, ProductState } from "./ProductContext";

export type ProductsAction = 
    |{ type: 'getAllProducts', payload: Product[] }

export const productReducer = (state:ProductState, action:ProductsAction):ProductState => {
    switch (action.type) {
        case 'getAllProducts':
            return {
                products: action.payload
            }
        default:
            return state;
    
    }
}