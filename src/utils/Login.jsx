import { Link } from "react-router-dom";
import loginBanner from "../assets/login-banner.png"

const Login = () => {
    return (
        <div className="block lg:flex items-center mx-10 ">
            <img src={loginBanner} alt="" className="w-2/4 hidden lg:block" />
            <div className="border border-gray-300 p-10 block lg:w-2/4 lg:mx-10 mt-5 rounded-md">
                <p>Login Doc Route</p>
                <form >
                    <input type="email" name="email" className="w-full border my-5 border-gray-600 p-2 rounded-md" placeholder="Enter Email" id="" />
                    <input type="password" name="password" className="w-full border border-gray-600 p-2 rounded-md" placeholder="Enter Email" id="" />
                    <button className="w-full my-5 py-2 text-white rounded-md bg-green-400">Login</button>

                </form>
                <div className="divider">OR</div>
                <div className="flex justify-center text-white gap-5">
                    <button className="bg-blue-500 py-2 w-1/2 rounded-md">facebook </button>
                    <button className="bg-red-500 py-2 w-1/2 rounded-md ">Google </button>
                   
                </div>
                <p className="mt-10 text-center">Don’t have an account?<Link to="/register"><span className="text-blue-600 cursor-pointer">Register</span></Link></p>
            </div>
        </div>
    );
};

export default Login;