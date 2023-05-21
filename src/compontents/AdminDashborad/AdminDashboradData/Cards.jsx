import { AiOutlineUsergroupAdd } from "react-icons/ai";

const Cards = () => {
  return (
    <div className="my-6 border rounded-lg p-5 flex gap-4 items-center ">
      <div className="bg-cyan-300 p-5 text-white text-5xl rounded-lg">
        <AiOutlineUsergroupAdd className="mx-auto" />
      </div>
      <div>
        <p className="text-lg text-gray-700 font-semibold">Total Doctors</p>
        <h4 className="text-3xl text-gray-900 font-semibold">30</h4>
      </div>
    </div>
  );
};

export default Cards;
