import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext"; // Ensure AuthContext is imported

const Login = () => {
    const { userLogin, setUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(""); // Clear previous errors

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate(location?.state ? location.state : "/");
            })
            .catch((error) => {
                setError("Invalid email or password. Please try again.");
            });
    };

    return (
        <div className='flex min-h-screen justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className="text-2xl text-red-500 font-semibold text-center mt-8">Login Your Account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                        <label className="label hover:text-xl">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control justify-center items-center flex mt-6">
                        <button className="btn w-full hover:text-3xl hover:p-8 btn-neutral">Login</button>
                    </div>
                </form>
                <p className="flex justify-center items-center mb-10">
                    Don't have an Account?{" "}
                    <Link to="/auth/register" className="font-semibold text-red-500">
                        <span className="hover:text-2xl"> Register</span>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
