import PropTypes from "prop-types";

TableData.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      bg: PropTypes.string.isRequired,
    })
  ).isRequired,
  name: PropTypes.string,
};

export default function TableData({ data, name }) {
  return (
    <div className="grow-0 lg:w-[40%] space-y-4">
      <h1 className="md:text-2xl text-red font-medium">{name}</h1>
      <ul>
        {data.map((list, index) => (
          <>
            <li
              key={index}
              className="flex justify-between items-center font-medium md:text-xl"
            >
              {list.status}{" "}
              <span
                style={{ backgroundColor: list.bg }}
                className="flex justify-center items-center w-7 h-7 rounded-full"
              >
                <p
                  style={{ color: list.text }}
                  className="text-base font-medium"
                >
                  {list.totNum}
                </p>
              </span>
            </li>
            <hr className="my-2" />
          </>
        ))}
      </ul>
    </div>
  );
}
