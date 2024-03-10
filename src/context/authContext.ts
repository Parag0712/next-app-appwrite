import { createContext } from "react";

type context = {
    authStatus: boolean,
    setAuthStatus: (status: boolean) => void
}

export const AuthContext = createContext<context>(
    {
        authStatus: false,
        setAuthStatus: () => { }
    }
)

export const AuthService = AuthContext.Provider;
export default AuthContext;