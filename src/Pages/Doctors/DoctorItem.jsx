import docImage from "../../assets/doctor/doctor-thumb-01.jpg"
import dentist from "../../assets/services/dentist.png"
import { AiFillStar } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
const DoctorItem = () => {

    return (
        <div className=" flex gap-5 mb-5 p-6 border border-gray-400 w-full rounded-md justify-between">
           
            <div className="flex gap-5">
            <img src={docImage} className="w-[170px] h-[170px] rounded-md" alt="" />
            <div>
                <h4 className="text-2xl font-semibold text-blue-500">Dr. Ruby Perrin</h4>
                <p className="text-gray-400 my-1">MDS - Periodontology and Oral Implantology, BDS</p>
                <div className="my-3 flex gap-1 items-center">
                    <img src={dentist} className="w-4 h-4" alt="" />
                    <span className="text-gray-700 text-lg font-semibold">Dentist</span>
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
                    <p className="">Gulshan, Dhaka</p>
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