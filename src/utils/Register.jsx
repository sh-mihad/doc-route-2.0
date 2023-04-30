import { Link } from "react-router-dom";
import loginBanner from "../assets/login-banner.png"


const Register = () => {
    return (
        <div className="block lg:flex items-center mx-10 ">
            <img src={loginBanner} alt="" className="w-2/4 hidden lg:block" />
            <div className="border border-gray-300 p-10 block lg:w-2/4 lg:mx-10 mt-5 rounded-md">
                <p>Register Doc Route</p>
                <form >
                    <input type="text" name="name" className="w-full border mt-5 border-gray-600 p-2 rounded-md" placeholder="Enter Full Name" id="" />
                    <input type="email" name="email" className="w-full border my-5 border-gray-600 p-2 rounded-md" placeholder="Enter Email" id="" />
                    <input type="password" name="password" className="w-full border border-gray-600 p-2 rounded-md" placeholder="Enter Password" id="" />
                    <input type="text" name="number" className="w-full border mt-4 border-gray-600 p-2 rounded-md" placeholder="Enter Phone Number" id="" />
                    <input type="text" name="adress" className="w-full border mt-4 border-gray-600 p-2 rounded-md" placeholder="Enter Adress" id="" />
                    <input type="text" name="age" className="w-full border mt-4 border-gray-600 p-2 rounded-md" placeholder="Enter Age" id="" />
                    <select className="select input-bordered input w-full mt-4">
                        <option value="" hidden>Select Gender </option>
                        <option value="Male">Male </option>
                        <option value="Female">Female</option>
                        <option value="Others">Others</option>
                    </select>
                    <label className="label">
                        <span className="label-text">Upload Your Photo</span>
                    </label>
                    <input type="file" className="file-input w-full border-gray-400" placeholder="email"  />
                    <button className="w-full my-5 py-2 text-white rounded-md bg-green-400">Login</button>
                   

                </form>
                <div className="divider">OR</div>
                <div className="flex justify-center text-white gap-5">
                    <button className="bg-blue-500 py-2 w-1/2 rounded-md">facebook </button>
                    <button className="bg-red-500 py-2 w-1/2 rounded-md ">Google </button>

                </div>
                <p className="mt-10 text-center">Already have an account?<Link to="/login"><span className="text-blue-600 cursor-pointer">Login</span></Link></p>
            </div>
        </div>
    );
};

export default Register;