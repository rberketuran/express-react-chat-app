import { Link } from 'react-router-dom';
import { useState } from 'react';
import useLogin from '../../hooks/useLogin';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    };

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 shadow-md bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100">
                <h1 className="text-3xl font-semibold text-center text-gray-200">Login</h1>

                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-2">
                        <label className="text-base label-text text-gray-200">
                            Username
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Username"
                            className="w-full input input-bordered h-10"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="text-base label-text text-gray-200">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="w-full input input-bordered h-10"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <Link to="/signup" className="text-sm text-gray-200 hover:underline hover:text-blue-500">
                        {"Don't"} have an account?
                    </Link>

                    <div>
                        <button className="w-full btn btn-primary" disabled={loading}>
                            {loading ? <span className="loading loading-spinner"></span> : 'Login'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
