import { RxCheck, RxCross2 } from "react-icons/rx";

const ApplyingDoctorItem = () => {
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src="https://doccure.dreamguystech.com/laravel/template/public/assets_admin/img/profiles/avatar-01.jpg"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">Richard Wilson</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>+084337456</td>
      <td>recherd@gmil.com</td>
      <td>Dentist</td>
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
