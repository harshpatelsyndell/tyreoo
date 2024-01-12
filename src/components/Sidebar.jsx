import Logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
// import mycard from "../assets/mycard.png";
import dashboard from "../assets/dashboard.svg";
import { useState } from "react";
import OpenSubList from "./OpenSubList";
// import analytics from "../assets/analytics.png";
// import user from "../assets/user.png";
// import academy from "../assets/academy.png";
// import cellphone from "../assets/cellphone.png";
// import shop from "../assets/shop.png";
// import tutorial from "../assets/tutorial.png";
// import company from "../assets/company.png";
// import template from "../assets/template.png";
// import settings from "../assets/settings.png";
// import acountbilling from "../assets/acount-billing.png";

Sidebar.propTypes = {
  showSidebar: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

// const icons = {
//   // dashboard,
//   // analytics,
//   // user,
//   // academy,
//   // cellphone,
//   // shop,
//   // tutorial,
//   // company,
//   // template,
//   // settings,
//   // acountbilling,
// };

const sidebar = [
  {
    name: "Dashboard",
    path: "main",
  },
  {
    name: "Vehicle Management",
    lists: [
      {
        name: "Vehicle List",
        icon: "vehicleList",
        path: "vehiclelist",
      },
      {
        name: "Vehicle Assignment",
        icon: "vehicleAssignment",
        path: "vehicleassignment",
      },
      {
        name: "Vehicle Tracking",
        icon: "vehicleTracking",
        path: "vehicletracking",
      },
    ],
  },
  {
    name: "Driver Management",
  },
  {
    name: "User Management",
  },
  {
    name: "Maintenance",
    lists: [
      {
        name: "Duty Of Care",
        icon: "dutyOfCare",
      },
      {
        name: "Services/MOT",
        icon: "servicesMOT",
      },
      {
        name: "Tyres",
        icon: "tyres",
      },
    ],
  },
  {
    name: "Support/Help",
  },
  {
    name: "Reports",
  },
  {
    name: "ReporAlerts/Notificationts",
  },
  {
    name: "Other services",
    lists: [
      {
        name: "Insurance",
        icon: "insurance",
      },
      {
        name: "Offers",
        icon: "offers",
      },
      {
        name: "Tyres",
        icon: "tyres",
      },
    ],
  },
  {
    name: "Logout",
  },
];

console.log(sidebar);

export default function Sidebar({ showSidebar, toggleSidebar }) {
  const [openStates, setOpenStates] = useState({});

  const handleSublistToggle = (index) => {
    setOpenStates((prevOpenStates) => ({
      [index]: !prevOpenStates[index],
    }));
    console.log(openStates[index]);
  };

  return (
    <div
      className={`fixed top-0 md:sticky md:block w-[20rem] md:w-1/5 h-screen bg-red ${
        showSidebar ? "translate-x-0" : "-translate-x-full"
      } transition-transform ease-in-out duration-300 z-50 overflow-y-auto font-gotham`}
    >
      <div
        onClick={toggleSidebar}
        className="md:hidden bg-orange rounded-full relative w-10 h-10 flex justify-center items-center cursor-pointer ms-auto m-4 z-50"
      >
        <p className="text-white">X</p>
      </div>
      <Link to="/" onClick={toggleSidebar}>
        <img className="m-3 my-6 lg:m-6 w-4/5 lg:w-3/5" src={Logo} alt="logo" />
      </Link>
      <ul className="text-white m-5 py-5 lg:m-6">
        {sidebar.map((item, index) =>
          item.path ? (
            <NavLink to={item.path} className="relative" key={index}>
              <li
                onClick={() => handleSublistToggle(index)}
                className={`flex items-center font-medium text-xl py-3 px-2 cursor-pointer rounded `}
              >
                <div
                  className={`absolute -left-10 bg-white w-10 h-10 rounded-e-[40%] ${
                    openStates[index] ? "translate-x-0" : "-translate-x-full"
                  } transition-transform ease-in-out duration-300`}
                ></div>
                <img src={dashboard} alt="card" className="me-3 w-4" />
                {item.name}
              </li>
            </NavLink>
          ) : (
            <div className="relative" key={index}>
              <li
                onClick={() => handleSublistToggle(index)}
                className={`flex items-center font-medium text-xl py-3 px-2 cursor-pointer rounded `}
              >
                <div
                  className={`absolute -left-10 bg-white w-10 h-10 rounded-e-[40%] ${
                    openStates[index] ? "translate-x-0" : "-translate-x-full"
                  } transition-transform ease-in-out duration-300`}
                ></div>
                <img src={dashboard} alt="card" className="me-3 w-4" />
                {item.name}
              </li>
              {openStates[index] && <OpenSubList item={item.lists} />}
            </div>
          )
        )}
      </ul>
    </div>
  );
}
