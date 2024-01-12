import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";

OpenSubList.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default function OpenSubList({ item }) {
  const location = useLocation();
  console.log(location);

  return (
    <ul className="relative left-10">
      {item?.map((subItem, subItemIndex) => (
        <NavLink
          key={subItemIndex}
          to={subItem.path}
          activeClassName="bg-black"
          isActive={() => subItem.path === location.pathname}
        >
          <li className="flex items-center hover:bg-black py-3 px-2 cursor-pointer rounded-s-2xl">
            {subItem.name}
          </li>
        </NavLink>
      ))}
    </ul>
  );
}
