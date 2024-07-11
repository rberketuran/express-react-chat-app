import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext';

const useLogin = () => {
    const [loading, setLoading] = useState(false);

    const { setAuthUser } = useAuthContext();

    const login = async (username, password) => {
        setLoading(true);
        try {
            const res = await fetch('/api/v1/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            const data = await res.json();


            if (!res.ok) {
                throw new Error(data.message || 'Login failed');
            }

            localStorage.setItem('chatUser', JSON.stringify(data));
            setAuthUser(data);


        } catch (error) {
            console.error('Login error:', error);
            toast.error(error.message || 'Login failed');
        } finally {
            setLoading(false)
        }

    }
    return { loading, login };
}

export default useLogin
