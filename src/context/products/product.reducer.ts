import { ProductCart } from "./product.interface";
import { ProductState } from "./ProductContext";

export type ProductsAction = 
    | { type: 'addCar', payload: ProductCart }

export const productReducer = (state:ProductState, action:ProductsAction):ProductState => {
    switch (action.type) {
        case 'addCar': 
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        default:
            return state;
    
    }
}