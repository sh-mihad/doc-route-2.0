import { RxCheck, RxCross2 } from "react-icons/rx";

const PatientsItem = ({ patient }) => {
  const { name, image, address, email, phone } = patient || {};
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt={`${name} image`} />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{address}</div>
          </div>
        </div>
      </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>12 May 2023</td>
      <td className="flex gap-3  items-center mt-2">
        <button className="px-3 bg-green-200 text-green-500 rounded-xl flex gap-1 items-center">
          <RxCheck /> Make an Admin
        </button>
        <button className="px-3 bg-red-300 text-red-500 rounded-xl flex gap-1 items-center">
          <RxCross2 /> Remove Patient
        </button>
      </td>
    </tr>
  );
};

export default PatientsItem;
