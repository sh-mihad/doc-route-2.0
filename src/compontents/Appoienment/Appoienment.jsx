import doctor from "../../assets/doctor.png"
import doctorBg from "../../assets/appointment.png"

const Appoienment = () => {
    return (
        <section className='mt-32'
            style={{
                background: `url(${doctorBg})`
            }}
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt="" className="-mt-32 hidden md:block lg:w-1/2 rounded-lg " />
                    <div>
                        <h4 className='text-lg text-white font-bold'>Appointment</h4>
                        <h1 className=" text-white text-4xl font-bold">Make an appointment Today</h1>
                        <p className="text-white py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using , making it look like readable English. Many desktop publishing packages and web page</p>
                        <button
                            href="/"
                            className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-rose-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                        >
                            Appointment
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appoienment;