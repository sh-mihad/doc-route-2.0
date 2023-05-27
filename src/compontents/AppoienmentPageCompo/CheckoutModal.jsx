import BookingSummary from "./BookingSummary";

const CheckoutModal = ({ doctor, selected, slot }) => {
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
              this is for summary
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
