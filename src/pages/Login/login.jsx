import React, { useState } from "react";
import { Link } from "react-router";
import { FaFacebook } from "react-icons/fa6";

const Login = () => {
    const [formData, setFormData] = useState({
        login: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login Data:", formData);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="p-8 text-center bg-[#1c1c1c00] text-white shadow-md w-96 border border-[grey]">
                <h2 className="mb-6 text-3xl font-bold">Instagram</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="login"
                        value={formData.login}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-[#333] text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Phone number, username, or email"
                        required
                    />

                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-3 py-2 bg-[#333] text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Password"
                            required
                        />
                        <button
                            type="button"
                            className="absolute text-blue-400 right-3 top-2"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 font-semibold text-white transition bg-blue-500 rounded-md hover:bg-blue-600"
                    >
                        Log In
                    </button>
                </form>

                <div className="flex items-center justify-center my-4">
                    <span className="w-1/3 border-t border-gray-600"></span>
                    <span className="mx-2 text-gray-400">OR</span>
                    <span className="w-1/3 border-t border-gray-600"></span>
                </div>

                <button className="w-full py-2 font-semibold text-white transition bg-[#4267B2] rounded-md hover:bg-[#365899] flex items-center justify-center gap-2">
                    <span > 
                        <FaFacebook />
                    </span>{" "}
                    Log in with Facebook
                </button>

                <p className="mt-4 text-sm text-blue-500 cursor-pointer">
                    Forgot password?
                </p>

                <div className="pt-4 mt-4 border-t border-gray-600">
                    <p className="text-gray-400">
                        Don’t have an account?{" "}
                        <Link
                            to="/registration"
                            className="text-blue-500 cursor-pointer"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
