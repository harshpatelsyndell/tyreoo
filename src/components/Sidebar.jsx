import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import mycard from "../assets/mycard.png";
// import dashboard from "../assets/dashboard.png";
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
//   dashboard,
//   analytics,
//   user,
//   academy,
//   cellphone,
//   shop,
//   tutorial,
//   company,
//   template,
//   settings,
//   acountbilling,
// };

const sidebar = [
  {
    name: "[Company Name]",
    lists: [
      {
        name: "Dashboard",
        icon: "dashboard",
      },
      {
        name: "Analytics",
        icon: "analytics",
      },
      {
        name: "Users",
        icon: "user",
      },
      {
        name: "Academy",
        icon: "academy",
      },
      {
        name: "Smart Accessories",
        icon: "cellphone",
      },
      {
        name: "Shop Smart Accessories",
        icon: "shop",
      },
      {
        name: "Tutorials",
        icon: "tutorial",
      },
    ],
  },
  {
    name: "Settings",
    lists: [
      {
        name: "Company Information",
        icon: "company",
      },
      {
        name: "Templates",
        icon: "template",
      },
      {
        name: "Settings",
        icon: "settings",
      },
    ],
  },
  {
    name: "Account & Billing",
    lists: [
      {
        name: "Account & Billing",
        icon: "acountbilling",
      },
    ],
  },
];

console.log(sidebar);

export default function Sidebar({ showSidebar, toggleSidebar }) {
  return (
    <div
      className={`fixed top-0  md:sticky md:block w-[20rem] md:w-1/5 h-screen bg-red ${
        showSidebar ? "translate-x-0" : "-translate-x-full"
      } transition-transform ease-in-out duration-300 z-50 overflow-y-auto`}
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
        <li className="flex items-center hover:bg-orange py-3 px-2 cursor-pointer rounded">
          {/* <img src={mycard} alt="card" className="me-3" /> */}
          My Card
        </li>
        <li>
          {sidebar.map((list, index) => (
            <>
              <p key={index} className="-ms-2 mt-3 text-sm font-extralight">
                {list.name}
              </p>
              <ul>
                {list.lists.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-center hover:bg-orange py-3 px-2 cursor-pointer rounded"
                  >
                    {/* <img
                      src={icons[item.icon]}
                      alt={item.name}
                      className="me-3"
                    /> */}
                    {item.name}
                  </li>
                ))}
              </ul>
            </>
          ))}
        </li>
      </ul>
    </div>
  );
}
