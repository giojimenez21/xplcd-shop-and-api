import { createContext, Dispatch } from "react";
import { AuthAction } from "./auth.reducer";

export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}

export interface AuthState {
    user: User
}

interface AuthProps {
    userState: AuthState,
    dispatchUser: Dispatch<AuthAction>
}

export const AuthContext = createContext<AuthProps>({} as AuthProps);