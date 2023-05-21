import PatientsItem from "./PatientsItem";

const AllPatients = () => {
  return (
    <div>
      <p className="text-lg text-gray-700 font-semibold">All Patient</p>
      <div className="my-3">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Doctor Name</th>
                <th>Phone Number</th>
                <th>Email </th>
                <th>Member Since</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <PatientsItem />
            </tbody>
          </table>
        </div>
      </div>
      {/* <PateintModal/> */}
    </div>
  );
};

export default AllPatients;
