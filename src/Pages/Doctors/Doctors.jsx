import { useSelector } from "react-redux";
import { useGetDoctorsQuery } from "../../fetures/doctorsApi/doctorsApi";
import Error from "../../ui/Error";
import NoData from "../../ui/NoData";
import Loading from "../../utils/Loading";
import DoctorItem from "./DoctorItem";

const Doctors = () => {
  const { data: doctors, isLoading, isError } = useGetDoctorsQuery();
  const { specialist } = useSelector((state) => state.doctors);
  // filters doctors by their specialty
  const filterBySpecialist = (doctor) => {
    switch (specialist) {
      case 'urologist':
        return doctor?.specialist === 'Urologist';
      case 'neurology':
        return doctor?.specialist === 'Neurology';
      case 'dentist':
        return doctor?.specialist === 'Dentist';
      case 'orthopedic':
        return doctor?.specialist === 'Orthopedic';
      case 'cardiologist':
        return doctor?.specialist === 'Cardiologist';
      default:
        return true;
    }
  };

  // // search handler form
  // const handleSearch = () => {
    
  // }

  let content = null;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <Error />;
  }
  if (!isLoading && !isError && !doctors?.length > 0) {
    content = <NoData />;
  }
  if (!isLoading && !isError && doctors?.length > 0) {
    content = doctors?.filter(filterBySpecialist).map((doctor, index) => (
      <DoctorItem doctor={doctor} key={index} />
    ));
  }

  return (
    <div className="flex flex-col lg:flex-row gap-5 my-10 px-3 ">
      <div className="border border-gray-400 p-5 w-full lg:w-3/12 lg:sticky top-0">
        <h4 className="text-lg font-semibold text-gray-600 my-3">
          Search Filter
        </h4>
        <hr />
        <h4 className="text-lg font-semibold text-gray-600 my-3">Gender</h4>
        <div>
          <div className="flex items-center gap-3 text-base text-gray-600">
            <input
              className="w-5 h-5 "
              type="checkbox"
              id="maleDoctor"
              name="maleDoctor"
              value="Bike"
            />
            <label htmlFor="maleDoctor"> Male Doctor</label>
          </div>
          <div className="flex items-center gap-3 text-base text-gray-600">
            <input
              className="w-5 h-5 "
              type="checkbox"
              id="femaleDoctor"
              name="femaleDoctor"
              value="Bike"
            />
            <label htmlFor="femaleDoctor"> Female Doctor</label>
          </div>
        </div>
        <h4 className="text-lg font-semibold text-gray-600 my-3">
          Select Specialist
        </h4>
        <form>
          <div className="flex items-center gap-3 text-base text-gray-600">
            <input
              className="w-5 h-5 "
              type="checkbox"
              id="Urology"
              name="Urology"
              value="Bike"
            />
            <label htmlFor="Urology">Urology</label>
          </div>
          <div className="flex items-center gap-3 text-base text-gray-600">
            <input
              className="w-5 h-5 "
              type="checkbox"
              id="neurology"
              name="neurology"
              value="Bike"
            />
            <label htmlFor="neurology">Neurology</label>
          </div>
          <div className="flex items-center gap-3 text-base text-gray-600">
            <input
              className="w-5 h-5 "
              type="checkbox"
              id="Dentist"
              name="Dentist"
              value="Bike"
            />
            <label htmlFor="Dentist">Dentist</label>
          </div>
          <div className="flex items-center gap-3 text-base text-gray-600">
            <input
              className="w-5 h-5 "
              type="checkbox"
              id="Orthopedic"
              name="Orthopedic"
              value="Bike"
            />
            <label htmlFor="Orthopedic">Orthopedic</label>
          </div>
          <div className="flex items-center gap-3 text-base text-gray-600">
            <input
              className="w-5 h-5 "
              type="checkbox"
              id="Cardiologist"
              name="Cardiologist"
              value="Bike"
            />
            <label htmlFor="Cardiologist">Cardiologist</label>
          </div>
          <button type="submit" className="bg-blue-500 text-white w-full py-2 rounded-md my-4 hover:bg-blue-300 duration-300">
            Search
          </button>
        </form>
      </div>
      <div className="w-full ">{content}</div>
    </div>
  );
};

export default Doctors;
