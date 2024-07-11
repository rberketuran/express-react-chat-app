const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 shadow-md bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100">
                <h1 className="text-3xl font-semibold text-center text-gray-200">Login</h1>

                <form className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-2">
                        <label className="text-base label-text text-gray-200">
                            Username
                        </label>
                        <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="text-base label-text text-gray-200">
                            Password
                        </label>
                        <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />
                    </div>

                    <a href="#" className="text-sm text-gray-200 hover:underline hover:text-blue-500"> {"Don't"} have an account? </a>

                    <div>
                        <button className="w-full btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;



/* const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 shadow-md bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100">
                <h1 className="text-3xl font-semibold text-center text-gray-200">Login</h1>

                <form className="flex flex-col space-y-4">
                    <div className="flex flex-col space-y-2">
                        <label className="text-base label-text text-gray-200">
                            Username
                        </label>
                        <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="text-base label-text text-gray-200">
                            Password
                        </label>
                        <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />
                    </div>

                    <a href="#" className="text-sm text-gray-200 hover:underline hover:text-blue-500"> {"Don't"} have an account? </a>

                    <div>
                        <button className="w-full btn btn-secondary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;
 */
