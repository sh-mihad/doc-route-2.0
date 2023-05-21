import ApplyingDoctorItem from "./ApplyingDoctorItem";

const ApplyingDoctors = () => {
  return (
    <div>
      <p className="text-lg text-gray-700 font-semibold">Applying Doctors</p>
      <div className="my-3">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Doctor Name</th>
                <th>Phone Number</th>
                <th>Email </th>
                <th>Specialist</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <ApplyingDoctorItem />
            </tbody>
          </table>
        </div>
      </div>
      {/* <PateintModal/> */}
    </div>
  );
};

export default ApplyingDoctors;
