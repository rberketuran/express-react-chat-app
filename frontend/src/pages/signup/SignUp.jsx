import { useState } from "react"
import { Link } from "react-router-dom"
import useSignup from "../../hooks/useSignup"
import GenderCheckbox from "./GenderCheckbox"

const SignUp = () => {

    const [inputs, setInputs] = useState({
        fullname: '',
        username: '',
        email: '',
        password: '',
        passwordconfirm: '',
        gender: ''
    })

    const { loading, signup } = useSignup()

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(inputs)
    }

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 shadow-md bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-300">
                <h1 className="text-3xl font-semibold text-center text-gray-100">Sign Up</h1>

                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">

                    <div className="flex flex-col space-y-1">
                        <label className="text-base label-text text-gray-200">
                            Full Name
                        </label>
                        <input type="text" placeholder="Enter Full Name" className="w-full input input-bordered h-10"
                            value={inputs.fullname} onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })} />
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label className="text-base label-text text-gray-200">
                            Username
                        </label>
                        <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10"
                            value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                        />
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label className="text-base label-text text-gray-200">
                            Email
                        </label>
                        <input type="text" placeholder="Enter Email" className="w-full input input-bordered h-10"
                            value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                        />
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label className="text-base label-text text-gray-200">
                            Password
                        </label>
                        <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10"
                            value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>

                    <div className="flex flex-col space-y-1">
                        <label className="text-base label-text text-gray-200">
                            Confirm Password
                        </label>
                        <input type="password" placeholder="Enter Confirm Password" className="w-full input input-bordered h-10"
                            value={inputs.passwordconfirm} onChange={(e) => setInputs({ ...inputs, passwordconfirm: e.target.value })}
                        />
                    </div>

                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                    <Link to="/login" className="text-sm text-gray-200 hover:underline hover:text-blue-500"> Already have an account? </Link>

                    <div>
                        <button className="w-full btn btn-primary" disabled={loading}>
                            {loading ? <span className="loading loading-spinner"></span> : 'Sign Up'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp

