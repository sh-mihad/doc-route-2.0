import { useState } from "react";
import { useParams } from "react-router-dom";
import ApoHeader from "../../compontents/AppoienmentPageCompo/ApoHeader";
import ApoSlots from "../../compontents/AppoienmentPageCompo/ApoSlots";
import { useGetDoctorQuery } from "../../fetures/doctorsApi/doctorsApi";
import Loading from "../../utils/Loading";

const AppoienmentPage = () => {
  const [selected, setSelected] = useState(new Date());
  const { email } = useParams();
  const { data: doctor, isLoading } = useGetDoctorQuery(email);

  let content = null;

  if (doctor?._id) {
    content = doctor;
    console.log(content);
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="w-full lg:w-11/12 lg:mx-auto mx-5 my-5 ">
      <ApoHeader
        selected={selected}
        setSelected={setSelected}
        doctor={doctor}
      />
      <ApoSlots selected={selected} />
    </div>
  );
};

export default AppoienmentPage;
