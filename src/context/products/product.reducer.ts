import { ProductCart, Sale } from "./product.interface";
import { ProductState } from "./ProductContext";

export type ProductsAction = 
    | { type: 'addCar', payload: ProductCart }
    | { type: 'addSales', payload: { salesOpened:Sale[], salesClosed:Sale[] } }
    | { type: 'closeOrder', payload: Sale  }
    | { type: 'openOrder', payload: Sale  }

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
        case 'closeOrder': {
            return {
                ...state,
                salesOpened: state.salesOpened.filter(sale => sale.id !== action.payload.id),
                salesClosed: [...state.salesClosed, {...action.payload, status: 'CLOSE'}]
            }
        }
        case 'openOrder': {
            return {
                ...state,
                salesClosed: state.salesClosed.filter(sale => sale.id !== action.payload.id),
                salesOpened: [...state.salesOpened, {...action.payload, status: 'OPEN'}]
            }
        }
        default:
            return state;
    
    }
}