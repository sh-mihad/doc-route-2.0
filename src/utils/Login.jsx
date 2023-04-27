import loginBanner from "../assets/login-banner.png"

const Login = () => {
    return (
        <div className="flex items-center">
            <img src={loginBanner} alt="" className="w-2/4" />
            <div className="border border-gray-300 p-10">
                <p>Login Doc Route</p>
            </div>
        </div>
    );
};

export default Login;