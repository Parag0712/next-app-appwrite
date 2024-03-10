import { createContext, useContext } from "react";

type context = {
    authStatus: boolean,
    user: Object | null;
    setAuthStatus: (status: boolean) => void
    setUser: (user: Object | null) => void;
}

export const AuthContext = createContext<context>(
    {
        authStatus: false,
        user: null,
        setAuthStatus: () => { },
        setUser: () => {},
    }
)

export const useAuth = () => {
    const data = useContext(AuthContext);
    return data
}

export const AuthService = AuthContext.Provider;
export default AuthContext;