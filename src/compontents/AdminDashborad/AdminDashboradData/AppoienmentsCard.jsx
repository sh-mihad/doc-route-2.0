import { BsFillCalendarCheckFill } from "react-icons/bs";

const AppoienmentsCard = () => {
  return (
    <div className="my-6 border rounded-lg p-5 flex gap-4 items-center ">
      <div className="bg-yellow-300 p-5 text-white text-5xl rounded-lg">
        <BsFillCalendarCheckFill className="mx-auto" />
      </div>
      <div>
        <p className="text-lg text-gray-700 font-semibold">
          Totaol Appoienments
        </p>
        <h4 className="text-3xl text-gray-900 font-semibold">400</h4>
      </div>
    </div>
  );
};

export default AppoienmentsCard;
