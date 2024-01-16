import PropTypes from "prop-types";

const Pagination = ({
  totalPages,
  setCurrentPage,
  startIndex,
  endIndex,
  totalItems,
}) => {
  return (
    <div className="font-gotham">
      <div className="flex gap-2 m-5 justify-end">
        <p className="text-medium text-greyPagination text-lg">
          {startIndex + 1}-{Math.min(endIndex, totalItems)} of {totalItems}
        </p>
        <button
          className="border-[1px] w-8 border-greyPagination text-greyPagination rounded"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          &lt;
        </button>
        <button
          className="border-[1px] w-8 border-greyPagination text-greyPagination rounded"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  startIndex: PropTypes.number.isRequired,
  endIndex: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
};

export default Pagination;
