import { MdDashboardCustomize, MdOutlineLogout } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
// import DoctorAvatar from "../../assets/doctor/doctor-thumb-01";

const AdminDashboard = () => {
  // dashboard list
  const dashboardList = (
    <>
      <li className="border-t py-3 text-md font-semibold hover:text-blue-400">
        <Link to="/" className="px-5 gap-2 flex items-center">
          <MdDashboardCustomize />
          Dashboard
        </Link>
      </li>
      <li className="border-y py-3 text-md font-semibold hover:text-blue-400">
        <button className="px-5 gap-2 flex items-center">
          <MdOutlineLogout />
          Logout
        </button>
      </li>
    </>
  );

  return (
    <section className=" block w-full lg:flex p-5 gap-4">
      <div className="w-full lg:w-1/4 border rounded py-5">
        <div className="flex flex-col items-center justify-center">
          <img
            src="https://doccure.dreamguystech.com/html/template/assets/img/doctors/doctor-thumb-02.jpg"
            className="w-40 h-40 my-2 rounded-full bg-gray-100 p-2"
            alt=""
          />
          <h5 className="text-lg text-gray-900 font-semibold">
            Dr. Darren Elder
          </h5>
          <p className="text-[15px] text-center text-gray-500">
            BDS, MDS - Oral & Maxillofacial Surgery
          </p>
        </div>
        <ul className="my-5">{dashboardList}</ul>
      </div>
      <div className="w-full lg:w-3/4 border rounded p-5">
        <Outlet />
      </div>
    </section>
  );
};

export default AdminDashboard;
