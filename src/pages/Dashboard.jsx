// import React from "react";

import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  const [showSidebar, setShowSidebar] = useState(window.innerWidth > 768);

  const toggleSidebar = () => {
    setShowSidebar((isOpen) => !isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setShowSidebar(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(showSidebar);

  return (
    <div className="flex justify-start">
      <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      {/* ---------------- */}
      <div className="w-full md:w-4/5">
        <Navigation
          toggleSidebar={toggleSidebar}
          searchBar={true}
          logo={false}
          menubtn={true}
        />
        <Outlet />
      </div>
    </div>
  );
}
