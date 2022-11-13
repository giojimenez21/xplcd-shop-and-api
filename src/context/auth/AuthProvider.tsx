import { FC, ReactNode, useReducer } from "react"
import { authReducer } from "./auth.reducer"
import { AuthContext, AuthState } from "./AuthContext";

interface IProps {
    children: ReactNode | ReactNode
}

export const initialState:AuthState = {
    user: {
        id: 0,
        name: "",
        email: "",
        role: ""
    }
}

const AuthProvider:FC<IProps> = ({children}) => {
    const [userState, dispatchUser] = useReducer(authReducer, initialState);

    return (
        <AuthContext.Provider value={{userState, dispatchUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;