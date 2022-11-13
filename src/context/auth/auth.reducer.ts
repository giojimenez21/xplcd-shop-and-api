import { AuthState, User } from "./AuthContext";
import { initialState } from "./AuthProvider";

export type AuthAction = 
    |{ type: 'login', payload: User }
    |{ type: 'logout' }

export const authReducer = (state:AuthState, action:AuthAction):AuthState => {
    switch (action.type) {
        case 'login':
            return {
                user: action.payload
            }
        case  'logout':
            return initialState;

        default:
            return state;
    
    }
}