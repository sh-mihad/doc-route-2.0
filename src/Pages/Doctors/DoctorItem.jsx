import dentistLogo from "../../assets/services/dentist.png";
import cardiologistLogo from "../../assets/services/cardiologist.png";
import neurologyLogo from "../../assets/services/neurology.png";
import orthopedicLogo from "../../assets/services/orthopedic.png";
import urologyLogo from "../../assets/services/urology.png";
import { AiFillStar } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
const dentist = dentistLogo
const cardiologist = cardiologistLogo
const neurology = neurologyLogo
const orthopedic = orthopedicLogo
const urology = urologyLogo
const iconArr = [
    { img: dentist, name: "dentist" },
    { img: cardiologist, name: "cardiologist" },
    { img: neurology, name: "neurology" },
    { img: urology, name: "urology" },
    { img: orthopedic, name: "orthopedic" },

]



const DoctorItem = ({ doctor }) => {
    const { name, certificate, specialist, adress, image } = doctor || {}
    // console.log(specialist.toLowerCase());
    const categoryIcon = iconArr.find(icon => icon.name === specialist.toLowerCase())
    


    return (
        <div className=" flex gap-5 mb-5 p-6 border border-gray-400 w-full rounded-md justify-between">

            <div className="flex gap-5">
                <img src={image} className="w-[170px] h-[170px] rounded-md" alt="" />
                <div>
                    <h4 className="text-2xl font-semibold text-blue-500">{name}</h4>
                    <p className="text-gray-400 my-1">{certificate}</p>
                    <div className="my-3 flex gap-1 items-center">
                        <img src={categoryIcon?.img} className="w-4 h-4" alt="" />
                        <span className="text-gray-700 text-lg font-semibold">{specialist}</span>
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
            <div className="flex gap-3 flex-col">
                <button className="border hover:bg-blue-500 hover:text-white duration-200 border-blue-500 px-10 py-3">View Profile</button>
                <button className="border bg-blue-500 hover:bg-blue-400 duration-200 text-white  px-10 py-3">Book Appoienment</button>
            </div>
        </div>
    );
};

export default DoctorItem;