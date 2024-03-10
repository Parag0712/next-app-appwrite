import { createContext, useContext } from "react";

type context = {
    authStatus: boolean,
    setAuthStatus: (status: boolean) => void
}

export const AuthContext = createContext<context>(
    {
        authStatus: false,
        setAuthStatus: () => { },
    }
)

export const useAuth = () => {
    const data = useContext(AuthContext);
    return data
}

export const AuthProvider = AuthContext.Provider;
export default AuthContext;