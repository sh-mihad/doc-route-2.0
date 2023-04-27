import doctorLogo from "../../assets/docIcon.png"
import consultentLogo from "../../assets/consultente.png"

const Branding = () => {
    return (
        <div className="block  lg:flex items-center w-10/12 mx-auto gap-8 m-10">
            <div className="lg:flex shadow-2xl gap-3 shadow-gray-500 mx-3 my-3  bg-[#fbfbfb] p-4 rounded-lg ">
                <img src={doctorLogo} alt="" className="mx-auto lg:m-0" width={80} height={50} />
                <div>
                    <h3 className="text-xl font-semibold mt-2">We have Qualified Doctors</h3>
                    <p className="text-gray-800 my-2">Now were up in the big leagues getting’ our turn at bat. And when the odds are against him and their.</p>
                </div>
            </div>

            <div className="lg:flex shadow-2xl gap-3 shadow-gray-500 mx-3 my-3  bg-[#fbfbfb] p-4 rounded-lg ">
                <img src={consultentLogo} alt="" className="mx-auto lg:m-0" width={80} height={50} />
                <div>
                    <h3 className="text-xl font-semibold mt-2">Professional Medical Consultation</h3>
                    <p className="text-gray-800 my-2">Now were up in the big leagues getting’ our turn at bat. And when the odds are against him and their.</p>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Branding;