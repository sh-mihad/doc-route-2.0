import { useState } from "react";
import { useForm } from "react-hook-form";
import DiseaseItem from "./DiseaseItem";

const DiseaseDitaction = () => {
  const [loading, setLoading] = useState(false);
  const [diseaseData, setDiseaseData] = useState([]);
  const [userProvide, setUserProvide] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("image", data.photo[0]);
    fetch(
      "https://api.imgbb.com/1/upload?key=2fbe1796a4bf3cd52ba5028ba7992a29",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((result) => {
        const image = result.data.display_url;
        setUserProvide(image);
        if (image.length > 0) {
          fetch(`https://doc-route-server.vercel.app/detaction?url=${image}`)
            .then((response) => response.json())
            .then((result) => {
              setDiseaseData(result);
              setLoading(false);
            });
        }
      });
  };

  // console.log(diseaseData);
  return (
    <div className="">
      <h1>Find your Desiase</h1>
      <div className="w-2/4 mx-auto mb-10">
        {userProvide?.length > 0 && (
          <img src={`${userProvide}`} width={200} height={200} alt="" />
        )}
        <form onSubmit={handleSubmit(submitForm)}>
          <label className="label">
            <span className="label-text">Upload Photo</span>
          </label>
          <input
            type="file"
            className="file-input w-full border-gray-400"
            placeholder="email"
            {...register("photo", {
              required: "Invalid this fild",
            })}
          />
          {errors.photo && (
            <p className="text-sm mt-2 text-red-700">{errors.photo.message}</p>
          )}
          <button
            disabled={loading}
            type="submit"
            className="w-full my-5 py-2 text-white rounded-md bg-blue-500 hover:bg-blue-400 duration-300"
          >
            {loading ? "Loading.." : "Find Your Disease"}
          </button>
        </form>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {diseaseData?.map((data) => (
          <DiseaseItem key={data.position} data={data} />
        ))}
      </div>
    </div>
  );
};

export default DiseaseDitaction;
