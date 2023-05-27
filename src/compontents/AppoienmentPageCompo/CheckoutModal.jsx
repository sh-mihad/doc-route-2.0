import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import BookingSummary from "./BookingSummary";

const CheckoutModal = ({ doctor, selected, slot }) => {
  const { user } = useSelector((state) => state?.userData);
  console.log(user);
  const { name, email, _id, adress } = user || {};
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const submitForm = () => {
    console.log("handle submit");
  };

  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="checkoutModal" className="modal-toggle" />
      <div className="modal w-full">
        <div className="modal-box w-11/12 max-w-7xl relative p-10">
          <label
            htmlFor="checkoutModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="lg:flex gap-10">
            <div className="border rounded-lg p-5 lg:w-7/12">
              <form onSubmit={handleSubmit(submitForm)}>
                <div className="flex items-center gap-2">
                  <div className="w-full lg:w-6/12">
                    <label>Name</label>
                    <input
                      type="text"
                      className="w-full border mt-2 border-gray-600 p-2 rounded-md"
                      value={name}
                      disabled
                      {...register("name", {
                        required: "Invalid Name Fild",
                      })}
                    />
                    {errors.name && (
                      <p className="text-sm mt-2 text-red-700">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full lg:w-6/12">
                    <label>Email</label>
                    <input
                      type="text"
                      className="w-full border mt-2 border-gray-600 p-2 rounded-md"
                      value={email}
                      disabled
                      {...register("name", {
                        required: "Invalid Name Fild",
                      })}
                    />
                    {errors.name && (
                      <p className="text-sm mt-2 text-red-700">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                </div>
              </form>
            </div>
            <div className="border rounded-lg p-5 lg:w-5/12">
              <BookingSummary doctor={doctor} selected={selected} slot={slot} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
