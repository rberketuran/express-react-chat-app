/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from "react";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const checkToken = () => {
            const token = Cookies.get('token');
            if (token) {
                try {
                    const decodedToken = jwtDecode(token);
                    const currentTime = Date.now() / 1000;
                    if (decodedToken.exp < currentTime) {
                        // Token expired
                        Cookies.remove('token');
                        setAuthUser(null);
                        if (location.pathname !== '/signup') {
                            navigate('/login');
                        }
                    } else {
                        // Token is valid
                        setAuthUser(decodedToken);
                    }
                } catch (error) {
                    console.error('Error decoding token:', error);
                    Cookies.remove('token');
                    setAuthUser(null);
                    if (location.pathname !== '/signup') {
                        navigate('/login');
                    }
                }
            } else {
                if (location.pathname !== '/signup') {
                    navigate('/login');
                }
            }
        };
        checkToken();
    }, [navigate]);

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
}
