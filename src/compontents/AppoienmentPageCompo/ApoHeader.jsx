import { AiFillStar } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import doctorAvatar from "../../assets/doctor/doctor-thumb-01.jpg"
import serviceImg from "../../assets/services/dentist.png"
import { DayPicker } from "react-day-picker";


const ApoHeader = ({selected,setSelected}) => {





    return (
        <header className="mx-5 my-5">
            <div className="w-full block lg:flex flex-reow items-center gap-5 mb-5 p-6 border border-gray-300  rounded-md justify-between">

                <div className="block lg:flex  gap-5">
                    <img src={doctorAvatar} className="w-[270px] h-[270px] rounded-md" alt="" />
                    <div>
                        <h4 className="text-2xl font-semibold text-blue-500">{"Dr. Darren Elder"}</h4>
                        <p className="text-gray-400 my-1">{'BDS, MDS - Oral & Maxillofacial Surgery'}</p>
                        <div className="my-3 flex gap-1 items-center">
                            <img src={serviceImg} className="w-4 h-4" alt="" />
                            <span className="text-gray-700 text-lg font-semibold">{"Dentist"}</span>
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
                            <p className="">{" Newyork, USA"}</p>
                        </div>
                    </div>
                </div>
                <div className="shadow-lg p-8 rounded-md">
                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}  
                    />
                </div>

               
            </div>
        </header>
    );
};

export default ApoHeader;