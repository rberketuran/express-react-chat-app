const SignUp = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 shadow-md bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100">
                <h1 className="text-3xl font-semibold text-center text-gray-100">Sign Up</h1>

                <form className="flex flex-col space-y-4">

                    <div className="flex flex-col space-y-1">
                        <label className="text-base label-text text-gray-200">
                            Full Name
                        </label>
                        <input type="text" placeholder="Enter Full Name" className="w-full input input-bordered h-10" />
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label className="text-base label-text text-gray-200">
                            Username
                        </label>
                        <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" />
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label className="text-base label-text text-gray-200">
                            Email
                        </label>
                        <input type="text" placeholder="Enter Email" className="w-full input input-bordered h-10" />
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label className="text-base label-text text-gray-200">
                            Password
                        </label>
                        <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label className="text-base label-text text-gray-200">
                            Confirm Password
                        </label>
                        <input type="text" placeholder="Enter Confirm Password" className="w-full input input-bordered h-10" />
                    </div>

                    <a href="#" className="text-sm text-gray-200 hover:underline hover:text-blue-500"> Already have an account? </a>

                    <div>
                        <button className="w-full btn btn-primary">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp

/* const SignUp = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 shadow-md bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100">
                <h1 className="text-3xl font-semibold text-center text-gray-200">Sign Up</h1>

                <form className="flex flex-col space-y-4">

                    <div className="flex flex-col space-y-1">
                        <label className="text-base label-text text-gray-200">
                            Full Name
                        </label>
                        <input type="text" placeholder="Enter Full Name" className="w-full input input-bordered h-10" />
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label className="text-base label-text text-gray-200">
                            Username
                        </label>
                        <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" />
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label className="text-base label-text text-gray-200">
                            Email
                        </label>
                        <input type="text" placeholder="Enter Email" className="w-full input input-bordered h-10" />
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label className="text-base label-text text-gray-200">
                            Password
                        </label>
                        <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label className="text-base label-text text-gray-200">
                            Confirm Password
                        </label>
                        <input type="text" placeholder="Enter Confirm Password" className="w-full input input-bordered h-10" />
                    </div>

                    <a href="#" className="text-sm text-gray-200 hover:underline hover:text-blue-500"> Already have an account? </a>

                    <div>
                        <button className="w-full btn btn-secondary">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
 */