import { useParams } from "react-router-dom";
import { useGetDoctorByEmailQuery } from "../../fetures/doctorsApi/doctorsApi";
import Error from "../../ui/Error";
import NoData from "../../ui/NoData";
import Loading from "../../utils/Loading";
import Profile from "./Profile";

const DoctorProfile = () => {
  const { email } = useParams();
  const { data: doctor, isLoading, isError } = useGetDoctorByEmailQuery(email);
  console.log(doctor);

  let content = null;
  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <Error />;
  } else if (!isLoading && !isError && Object.keys(doctor).length === 0) {
    content = <NoData />;
  } else if (!isLoading && !isError && Object.keys(doctor).length > 0) {
    content = <Profile doctor={doctor} />;
  }

  return <section>{content}</section>;
};

export default DoctorProfile;
