import { RxCheck, RxCross2 } from "react-icons/rx";

const ApplyingDoctorItem = ({ doctor }) => {
  const { name, image, specialist, email, phone } = doctor || {};
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>{phone ? phone : "+084337456"}</td>
      <td>{email}</td>
      <td>{specialist}</td>
      <td className="flex gap-3  items-center mt-2">
        <button className="px-3 bg-green-200 text-green-500 rounded-xl flex gap-1 items-center">
          <RxCheck /> Approve
        </button>
        <button className="px-3 bg-red-300 text-red-500 rounded-xl flex gap-1 items-center">
          <RxCross2 /> Delete
        </button>
      </td>
    </tr>
  );
};

export default ApplyingDoctorItem;
