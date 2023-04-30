import { Link } from "react-router-dom";

const Navbar = () => {

  const menuList = <>
   <li ><Link to="/">Home</Link></li>
   <li ><Link to="/doctors">Doctors</Link></li>
   <li ><Link to="/add-doctor">Add Doctor</Link></li>
  </>

    return (
        <div className="navbar bg-base-100 border">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {
                menuList
              }
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Doc Route</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {
            menuList
           }
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login"><button className="px-8 py-2 border border-gray-500 hover:bg-black hover:text-white duration-300">Login / Register</button></Link>
        </div>
      </div>
    );
};

export default Navbar;