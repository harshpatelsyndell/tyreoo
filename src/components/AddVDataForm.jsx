import PropTypes from "prop-types";
AddVDataForm.propTypes = {
  isOpen: PropTypes.bool,
  handleAddForm: PropTypes.func,
};

export default function AddVDataForm({ isOpen, handleAddForm }) {
  return (
    isOpen && (
      <div className="absolute font-gotham top-0 w-full h-full backdrop-blur-md flex justify-center items-center">
        <div className="bg-white w-2/3 my-10 rounded border border-greytext">
          {/* --------------form top sec--------------- */}
          <div className="bg-red p-3 flex justify-between items-center rounded-t w-full">
            <div className="flex items-center h-full space-x-2 text-white">
              <p className="bg-white w-8 text-center text-red rounded-full h-8 flex items-center justify-center">
                +
              </p>
              <p>Add Vehicle</p>
            </div>
            <button
              className="w-10 bg-white py-2 rounded text-red"
              onClick={() => handleAddForm()}
            >
              X
            </button>
          </div>
          {/* --------------end form top sec--------------- */}
          {/* ----------------form sec-------------------- */}
          <div className="p-3 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="id">ID</label>
              <input
                className="w-full border border-greytext rounded px-2 py-1 mt-1"
                type="text"
                id="id"
                placeholder="id"
              />
            </div>
            <div>
              <label htmlFor="LicencePlate">Licence Plate</label>
              <input
                className="w-full border border-greytext rounded px-2 py-1 mt-1"
                type="text"
                id="LicencePlate"
                placeholder="Licence Plate"
              />
            </div>
            <div>
              <label htmlFor="year">Year</label>
              <input
                className="w-full border border-greytext rounded px-2 py-1 mt-1"
                type="text"
                id="year"
                placeholder="Year"
              />
            </div>
            <div>
              <label htmlFor="make">Make</label>
              <input
                className="w-full border border-greytext rounded px-2 py-1 mt-1"
                type="text"
                id="make"
                placeholder="make"
              />
            </div>
            <div>
              <label htmlFor="model">Model</label>
              <input
                className="w-full border border-greytext rounded px-2 py-1 mt-1"
                type="text"
                id="model"
                placeholder="model"
              />
            </div>
            <div>
              <label htmlFor="vin">VIN</label>
              <input
                className="w-full border border-greytext rounded px-2 py-1 mt-1"
                type="text"
                id="vin"
                placeholder="VIN"
              />
            </div>
            <div>
              <label htmlFor="status">Status</label>
              <select
                className="w-full border border-greytext rounded px-2 py-1 mt-1"
                name="status"
                id="status"
              >
                <option value="">Select</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div>
              <label htmlFor="type">Type</label>
              <select
                className="w-full border border-greytext rounded px-2 py-1 mt-1"
                name="type"
                id="type"
              >
                <option value="">Select</option>
                <option value="Car">Car</option>
                <option value="Truck">Truck</option>
              </select>
            </div>
            <div>
              <label htmlFor="group">Group</label>
              <select
                className="w-full border border-greytext rounded px-2 py-1 mt-1"
                name="group"
                id="group"
              >
                <option value="">Select</option>
                <option value="Management">Management</option>
                <option value="Staff">Staff</option>
              </select>
            </div>
            <div>
              <label htmlFor="vin">Current Meter</label>
              <input
                className="w-full border border-greytext rounded px-2 py-1 mt-1"
                type="text"
                id="currentMeter"
                placeholder="Current Meter"
              />
            </div>
            <div></div>
            <div>
              <button className="float-end text-white bg-red p-2 px-4 text-sm rounded">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

//
