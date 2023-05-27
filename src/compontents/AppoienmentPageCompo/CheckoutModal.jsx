import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAddCounsultaionMutation } from "../../fetures/consultaionApi/consultationApi";
import BookingSummary from "./BookingSummary";

const CheckoutModal = ({ doctor, selected, slot }) => {
  const { user } = useSelector((state) => state?.userData);
  const [addCounsultaion, { data, isSuccess }] = useAddCounsultaionMutation();
  const { name, email, _id, address } = user || {};
  const { handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.acknowledged === true && isSuccess === true) {
      toast.success("Booking Done");
      navigate("/");
    }
  }, [navigate, data, isSuccess]);

  const submitForm = () => {
    const patientId = _id;
    const doctorEmail = doctor?.email;
    const consultationDate = selected;
    const consultationTime = slot;

    const consultaionData = {
      patientId,
      doctorEmail,
      consultationDate,
      consultationTime,
      consultationStatus: "pending",
    };
    addCounsultaion(consultaionData);
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
              <h1 className="text-xl font-sans font-bold">
                Personal Information
              </h1>
              <hr className="w-full mt-2" />
              <form onSubmit={handleSubmit(submitForm)}>
                <div className="grid grid-cols-1 mt-8 lg:grid-cols-2 items-center gap-2">
                  <div className="w-full ">
                    <label>Name</label>
                    <input
                      type="text"
                      className="w-full border mt-2 border-gray-600 p-2 rounded-md"
                      value={name}
                      disabled
                    />
                  </div>
                  <div className="w-full ">
                    <label>Email</label>
                    <input
                      type="text"
                      className="w-full border mt-2 border-gray-600 p-2 rounded-md"
                      value={email}
                      disabled
                    />
                  </div>
                </div>
                <div className="w-full mt-8 ">
                  <label>Adress</label>
                  <input
                    type="text"
                    className="w-full border mt-2 border-gray-600 p-2 rounded-md"
                    value={address}
                    disabled
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full mt-8 py-2 text-white rounded-md bg-blue-500 hover:bg-blue-400 duration-300"
                  >
                    Confirm Booking
                  </button>
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
