import { useEffect, useState } from "react";
import { MdRemoveRedEye } from "react-icons/md";
import { RxCheck, RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import avatar from "../../assets/doctor/doctor-thumb-01.jpg";
import { useGetPatientsByEmailQuery } from "../../fetures/consultaionApi/consultationApi";
import PateintModal from "./PateintModal";

const DashboardData = () => {
  const [docEmail, setDocEmail] = useState(null);
  const [skip, setSkip] = useState(true);
  const { user } = useSelector((state) => state.userData);
  const { data: patients } = useGetPatientsByEmailQuery(docEmail, { skip });
  //   if (user?.email) {
  //     setDocEmail(user?.email);
  //     setSkip(false);
  //   }

  //   console.log(patients);

  useEffect(() => {
    if (user?.email) {
      setDocEmail(user?.email);
      setSkip(false);
    }
  }, [user]);

  console.log(patients);

  return (
    <div>
      <p className="text-lg text-gray-700 font-semibold">
        {"Today's Patient Appoinment"}
      </p>
      <div className="my-3">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Pateint Name</th>
                <th>Appt Date</th>
                <th>Type</th>
                <th>Paid Amount </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={avatar} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Richard Wilson</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  11 Nov 2019
                  <br />
                  <span className="badge badge-ghost badge-sm">10.00 AM</span>
                </td>
                <td>New Patient</td>
                <td>$150</td>
                <td className="flex gap-3  items-center mt-2">
                  <label
                    htmlFor="my-modal-3"
                    className="px-3  bg-blue-200     text-blue-500 rounded-xl flex gap-1 items-center"
                  >
                    {" "}
                    <MdRemoveRedEye />
                    Show Details
                  </label>
                  {/* <label htmlFor="my-modal-3" className="btn">open modal</label> */}
                  <button className="px-3 bg-green-200 text-green-500 rounded-xl flex gap-1 items-center">
                    <RxCheck /> Done
                  </button>
                  <button className="px-3 bg-red-300 text-red-500 rounded-xl flex gap-1 items-center">
                    <RxCross2 /> Cancel
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <PateintModal />
    </div>
  );
};

export default DashboardData;
