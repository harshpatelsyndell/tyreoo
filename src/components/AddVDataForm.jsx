import PropTypes from "prop-types";
AddVDataForm.propTypes = {
  isOpen: PropTypes.bool,
};

export default function AddVDataForm({ isOpen }) {
  return (
    isOpen && (
      <div className="absolute ">
        <div className="bg-grey w-[70%]">
          <h1>hellooo</h1>
        </div>
      </div>
    )
  );
}
