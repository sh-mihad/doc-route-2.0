import { AiFillStar } from "react-icons/ai";
import doctorAvatar from "../../assets/doctor/doctor-thumb-01.jpg"
import serviceImg from "../../assets/services/dentist.png"
import { IoLocationSharp } from "react-icons/io5";
import EducationSection from "../../compontents/DoctorDashboard/EducationSection";
import WorkSection from "../../compontents/DoctorDashboard/WorkSection";
import { BsArrowRight } from "react-icons/bs";
// import { useGetDoctorDataQuery } from "../../fetures/doctorsApi/doctorsApi";
const DoctorProfile = () => {
    // const {data:doctor} = useGetDoctorDataQuery()
    // console.log(doctor);
    return (
        <div className="w-full m-5 lg:w-10/12 lg:mx-auto my-10">
            <div className="w-full  flex gap-5 mb-5 p-6 border border-gray-300  rounded-md justify-between">

                <div className="flex gap-5">
                    <img src={doctorAvatar} className="w-[170px] h-[170px] rounded-md" alt="" />
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
                <div className="flex gap-3 flex-col">
                    <button className="border bg-blue-500 hover:bg-blue-400 duration-200 text-white  px-10 py-3">Book Appoienment</button>
                </div>
            </div>

            <div className=" my-10 p-6 border border-gray-300  rounded-md">
                <div className="lg:w-9/12">
                    <h5 className="text-lg font-bold my-3 text-center lg:text-start  text-gray-700">About Me</h5>
                    <p className="text-gray-500 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    {/* Education Part */}
                    <h5 className="text-lg font-bold my-3 text-center lg:text-start  text-gray-700">Education</h5>
                    <div>
                        <div>
                            <div
                                className="grid grid-cols-1   text-blue-50  "
                            >
                                {/* <!-- right --> */}

                                <EducationSection />
                                <EducationSection />
                                <EducationSection />

                            </div>
                        </div>
                    </div>
                    {/* Wor & Expiriance Part */}
                    <h5 className="text-lg font-bold my-3 text-center lg:text-start  text-gray-700">Work & Experience</h5>
                    <div>
                        <div>
                            <div
                                className="grid grid-cols-1   text-blue-50  "
                            >
                                {/* <!-- right --> */}

                                <WorkSection />
                                <WorkSection />
                            </div>
                        </div>
                    </div>

                    {/* Services  */}
                    <h5 className="text-lg font-bold my-3 text-center lg:text-start  text-gray-700">Services</h5>
                    <ul className="flex flex-col gap-3 leading-tight text-justify">
                        <li className="flex gap-1"><BsArrowRight /> Tooth cleaning</li>
                        <li className="flex gap-1"><BsArrowRight />Root Canal Therapy</li>
                        <li className="flex gap-1"><BsArrowRight />Fissure Sealants</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DoctorProfile;