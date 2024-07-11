/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('chatUser')) || null);

    return <AuthContext.Provider value={{ authUser, setAuthUser }}>
        {children}

    </AuthContext.Provider>;
}