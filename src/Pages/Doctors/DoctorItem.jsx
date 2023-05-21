import { AiFillStar } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import cardiologistLogo from "../../assets/services/cardiologist.png";
import dentistLogo from "../../assets/services/dentist.png";
import neurologyLogo from "../../assets/services/neurology.png";
import orthopedicLogo from "../../assets/services/orthopedic.png";
import urologyLogo from "../../assets/services/urology.png";

const iconArr = [
  { img: dentistLogo, name: "dentist" },
  { img: cardiologistLogo, name: "cardiologist" },
  { img: neurologyLogo, name: "neurology" },
  { img: urologyLogo, name: "urology" },
  { img: orthopedicLogo, name: "orthopedic" },
];

const DoctorItem = ({ doctor }) => {
  const { _id, name, certificate, specialist, adress, image } =
    doctor || {};
  // console.log(specialist.toLowerCase());
  const categoryIcon = iconArr.find(
    (icon) => icon.name === specialist.toLowerCase()
  );

  return (
    <div className="flex flex-col lg:flex-row gap-5 mb-5 p-6 border border-gray-400 w-full rounded-md justify-between">
      <div className="flex flex-col lg:flex-row gap-5">
        <img
          src={image}
          className="w-full aspect-video object-top lg:w-[170px] lg:h-[170px] object-cover rounded-md"
          alt=""
        />
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-2xl font-semibold text-blue-500">{name}</h4>
          <p className="text-gray-400 my-1">{certificate}</p>
          <div className="my-3 flex gap-1 items-center">
            <img src={categoryIcon?.img} className="w-4 h-4" alt="" />
            <span className="text-gray-700 text-lg font-semibold">
              {specialist}
            </span>
          </div>
          <div className="text-yellow-400 items-center text-xl flex">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <p className="text-gray-700">(23)</p>
          </div>

          <div className="flex items-center text-gray-400">
            <IoLocationSharp />
            <p className="">{adress}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-3 flex-col text-center">
        <Link
          to={`/doctors/${_id}`}
          className="border hover:bg-blue-500 hover:text-white duration-200 border-blue-500 px-10 py-3"
        >
          View Profile
        </Link>
        <Link
          to={`/appointment/${_id}`}
          className="border bg-blue-500 hover:bg-blue-400 duration-200 text-white px-10 py-3"
        >
          Book Appointment
        </Link>
      </div>
    </div>
  );
};

export default DoctorItem;
