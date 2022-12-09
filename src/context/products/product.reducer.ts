import { ProductCart, Sale } from "./product.interface";
import { ProductState } from "./ProductContext";

export type ProductsAction = 
    | { type: 'addCar', payload: ProductCart }
    | { type: 'addSales', payload: { salesOpened:Sale[], salesClosed:Sale[] } }

export const productReducer = (state:ProductState, action:ProductsAction):ProductState => {
    switch (action.type) {
        case 'addCar': 
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case 'addSales': {
            return {
                ...state,
                salesOpened: action.payload.salesOpened,
                salesClosed: action.payload.salesClosed
            }
            
        }
        default:
            return state;
    
    }
}