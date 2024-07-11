import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const signup = async ({ fullname, username, email, password, passwordconfirm }) => {
        const success = handleInputErrors({ fullname, username, email, password, passwordconfirm });

        if (!success) return;
        setLoading(true);

        try {
            const res = await fetch('/api/v1/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ fullname, username, email, password, passwordconfirm })
            });

            const data = await res.json();

            if (data.error) {
                throw new Error(data.error);
            }

            localStorage.setItem('chatUser', JSON.stringify(data.user));
            setAuthUser(data);

            if (res.ok) {
                console.log(data);
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }

        } catch (error) {
            toast.error('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return { loading, signup };
};

export default useSignup;

function handleInputErrors({ fullname, username, email, password, passwordconfirm }) {
    if (!fullname || !username || !email || !password || !passwordconfirm) {
        toast.error('Please fill all fields');
        return false;
    }

    if (password !== passwordconfirm) {
        toast.error('Passwords do not match');
        return false;
    }

    if (password.length < 6) {
        toast.error('Password must be at least 6 characters');
        return false;
    }

    return true;
}
