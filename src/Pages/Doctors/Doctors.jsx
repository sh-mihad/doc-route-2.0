import { useSelector } from "react-redux";
import Form from "../../compontents/specialist/Form";
import { useGetDoctorsQuery } from "../../fetures/doctorsApi/doctorsApi";
import Error from "../../ui/Error";
import NoData from "../../ui/NoData";
import Loading from "../../utils/Loading";
import DoctorItem from "./DoctorItem";

const Doctors = () => {
  const { data: doctors, isLoading, isError } = useGetDoctorsQuery();
  console.log(doctors);
  const { specialistOfDoctor } = useSelector((state) => state.doctors);
  // filters doctors by their specialty
  const filterBySpecialist = (doctor) => {
    const { specialist } = doctor || {};
    const index = specialistOfDoctor.findIndex(
      (specialty) => specialty === specialist
    );
    switch (index) {
      case -1:
        return false;
      case index >= 1:
        return true;
      default:
        return true;
    }
  };

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
    content = doctors
      ?.filter(filterBySpecialist)
      .map((doctor, index) => <DoctorItem doctor={doctor} key={index} />);
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
        <Form />
      </div>
      <div className="w-full ">{content}</div>
    </div>
  );
};

export default Doctors;
