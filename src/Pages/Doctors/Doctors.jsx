import DoctorItem from "./DoctorItem";



const Doctors = () => {
    return (
        <div className="flex gap-5 my-10 mx-10 ">

            <div className="border  border-gray-400 p-5 w-full lg:w-3/12 sticky top-0">
                <h4 className="text-lg font-semibold text-gray-600 my-3">Search Filter</h4>
                <hr />
                <h4 className="text-lg font-semibold text-gray-600 my-3">Gender</h4>
                <div>

                    <div className="flex items-center gap-3 text-base text-gray-600">
                        <input className="w-5 h-5 " type="checkbox" id="maleDoctor" name="maleDoctor" value="Bike" />
                        <label htmlFor="maleDoctor"> Male Doctor</label>
                    </div>
                    <div className="flex items-center gap-3 text-base text-gray-600">
                        <input className="w-5 h-5 " type="checkbox" id="femaleDoctor" name="femaleDoctor" value="Bike" />
                        <label htmlFor="femaleDoctor"> Female Doctor</label>
                    </div>

                </div>

                <h4 className="text-lg font-semibold text-gray-600 my-3">Select Specialist</h4>
                <div>

                    <div className="flex items-center gap-3 text-base text-gray-600">
                        <input className="w-5 h-5 " type="checkbox" id="Urology" name="Urology" value="Bike" />
                        <label htmlFor="Urology">Urology</label>
                    </div>
                    <div className="flex items-center gap-3 text-base text-gray-600">
                        <input className="w-5 h-5 " type="checkbox" id="Neorology" name="Neorology" value="Bike" />
                        <label htmlFor="Neorology">Neorology</label>
                    </div>
                    <div className="flex items-center gap-3 text-base text-gray-600">
                        <input className="w-5 h-5 " type="checkbox" id="Dentist" name="Dentist" value="Bike" />
                        <label htmlFor="Dentist">Dentist</label>
                    </div>
                    <div className="flex items-center gap-3 text-base text-gray-600">
                        <input className="w-5 h-5 " type="checkbox" id="Orthopedic" name="Orthopedic" value="Bike" />
                        <label htmlFor="Orthopedic">Orthopedic</label>
                    </div>
                    <div className="flex items-center gap-3 text-base text-gray-600">
                        <input className="w-5 h-5 " type="checkbox" id="Cardiologist" name="Cardiologist" value="Bike" />
                        <label htmlFor="Cardiologist">Cardiologist</label>
                    </div>
                    <button className="bg-blue-500 text-white w-full py-2 rounded-md my-4 hover:bg-blue-300 duration-300">Search</button>

                </div>
            </div>

            <div className="w-full ">
                <DoctorItem/>
            </div>
        </div>
    );
};

export default Doctors;