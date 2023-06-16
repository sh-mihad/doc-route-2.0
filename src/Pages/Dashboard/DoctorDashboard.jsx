import {
  MdDashboardCustomize,
  MdMoreTime,
  MdOutlineLogout,
  MdSettings,
} from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

const DashboardData = () => {
  const { user } = useSelector((state) => state.userData);

  const dashboardList = (
    <>
      <li className="border-t py-3 text-md font-semibold hover:text-blue-400">
        <Link to="/dashboard" className="px-5 gap-2 flex items-center">
          <MdDashboardCustomize />
          Dashboard
        </Link>
      </li>
      {/* <li className="border-t py-3 text-md font-semibold hover:text-blue-400">
        <Link
          to="/dashboard/all-appoienments"
          className="px-5 gap-2 flex items-center"
        >
          <MdEditCalendar />
          All Aopoienments
        </Link>
      </li> */}
      <li className="border-t py-3 text-md font-semibold hover:text-blue-400">
        <Link
          to="/dashboard/doc-profile-settings"
          className="px-5 gap-2 flex items-center"
        >
          <MdSettings />
          Profile Settings
        </Link>
      </li>
      <li className="border-t py-3 text-md font-semibold hover:text-blue-400">
        <Link
          to="/dashboard/schedule-timings"
          className="px-5 gap-2 flex items-center"
        >
          <MdMoreTime />
          Schedule Timings
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
            src={user?.image}
            className="w-40 h-40 my-2 rounded-full bg-gray-100 p-2"
            alt=""
          />
          <h5 className="text-lg text-gray-900 font-semibold">{user?.name}</h5>
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

export default DashboardData;
