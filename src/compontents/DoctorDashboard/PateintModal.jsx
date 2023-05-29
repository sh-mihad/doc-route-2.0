const PateintModal = ({ patientData }) => {
  const { name, image, age, address, phone } = patientData || {};
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div>
            <div>
              <img src={image} alt="" className="w-6/12 mx-auto" />
              <h5>
                Name : <span>{name}</span>
              </h5>
              <h5>
                Adress : <span>{address}</span>
              </h5>
              <h5>
                Age : <span>{age}</span>
              </h5>
              <h5>
                Phone Number: <span>{phone}</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PateintModal;
