import React, { useContext, useState } from 'react';
import AuthContext from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const Register = () => {
    const { createNewUser, setUser } = useContext(AuthContext);
    const [error, setError] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setError({ name: "", email: "", password: "" }); // Reset errors

        // Get form data
        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const photo = form.get("photo");
        const password = form.get("password");

        // Validation
        let hasError = false;
        const newErrors = { name: "", email: "", password: "" };

        if (name.length < 10) {
            newErrors.name = "Name must be at least 10 characters.";
            hasError = true;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Invalid email format.";
            hasError = true;
        }

        if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
            hasError = true;
        }

        if (hasError) {
            setError(newErrors);
            return;
        }

        // Create new user
        createNewUser(email, password)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                console.log(error.code, error.message);
            });
    };

    return (
        <div className='flex min-h-screen justify-center items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className="text-2xl text-red-500 font-semibold text-center mt-8">Register Your Account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    {/* Name input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                        {error.name && <p className="text-red-500 text-sm mt-1">{error.name}</p>}
                    </div>
                    {/* Photo URL input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input name='photo' type="url" placeholder="photo url" className="input input-bordered" required />
                    </div>
                    {/* Email input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        {error.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
                    </div>
                    {/* Password input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                        {error.password && <p className="text-red-500 text-sm mt-1">{error.password}</p>}
                    </div>
                    <div className="form-control justify-center items-center flex mt-6">
                        <button className="btn w-full hover:text-3xl hover:p-8 btn-neutral">Register</button>
                    </div>
                </form>
                <p className="flex justify-center items-center mb-10">
                    Already have an Account?
                    <Link to="/auth/login" className="font-semibold text-red-500">
                        <span className="hover:text-2xl"> Login</span>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
