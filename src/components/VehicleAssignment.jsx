import tableProfile from "../assets/tableProfile.png";
import cloud from "../assets/cloud.svg";
import { useState } from "react";
import vehicleAssignmentData from "./../VehicleData";
import Pagination from "./Pagination";
const search = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    fill="gray"
    width="21"
    height="21"
    viewBox="0 0 50 50"
  >
    <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
  </svg>
);

const itemsPerPage = 5;

export default function VehicleAssignment() {
  const [filterType, setFilterType] = useState("all");
  const [filterGroup, setFilterGroup] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredData = vehicleAssignmentData.filter((item) => {
    const typeCondition = filterType === "all" || item.type === filterType;
    const groupCondition = filterGroup === "all" || item.group === filterGroup;
    const statusCondition =
      filterStatus === "all" || item.status === filterStatus;

    return typeCondition && groupCondition && statusCondition;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = filteredData.slice(startIndex, endIndex);

  const handleFilterClick = (filter) => {
    setFilterType("all");
    setFilterGroup("all");
    setFilterStatus(filter);
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  return (
    // -------top sec-----
    <>
      <div className="py-5 px-3 sm:py-10 sm:px-10 font-gotham space-y-5">
        <h1 className="text-2xl text-red text-medium">Vehicle Assignment</h1>
        <div className="space-x-4 sm:space-x-8 sm:text-lg text-medium">
          <button
            className={activeFilter === "all" ? "text-red" : ""}
            onClick={() => handleFilterClick("all")}
          >
            All
          </button>
          <button
            className={activeFilter === "Active" ? "text-red" : ""}
            onClick={() => handleFilterClick("Active")}
          >
            Assigned
          </button>
          <button
            className={activeFilter === "Inactive" ? "text-red" : ""}
            onClick={() => handleFilterClick("Inactive")}
          >
            Unassigned
          </button>
          <button>Archived</button>
        </div>
        {/* ------- */}
        <div className="flex flex-col lg:flex-row justify-items-start items-center space-y-3 sm:space-x-3 lg:space-y-0">
          <div className="relative flex justify-start items-center w-full lg:w-1/3">
            <span className="absolute left-2">{search}</span>
            <input
              type="text"
              placeholder="Search"
              className="ps-10 p-2 border-[1px] border-grey rounded-lg w-full text-base"
            />
          </div>
          {/* ------- */}
          <div className="text-greytext w-full grid grid-cols-2 sm:grid-cols-3 gap-3 min-w-[10rem] lg:max-w-[40%] ">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="py-2 px-4 border-[1px] border-grey rounded-lg text-base"
            >
              <option value="all">Vehicle Type</option>
              <option value="Car">Car</option>
              <option value="Truck">Truck</option>
            </select>
            <select
              value={filterGroup}
              onChange={(e) => setFilterGroup(e.target.value)}
              className="py-2 px-4 border-[1px] border-grey rounded-lg text-base"
            >
              <option value="all">Vehicle Group</option>
              <option value="Management">Management</option>
              <option value="Staff">Staff</option>
            </select>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="py-2 px-4 border-[1px] border-grey rounded-lg text-base"
            >
              <option value="all">Vehicle status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>
        {/* ------- */}
      </div>
      {/* // -----table sec----- */}
      <div className="font-gotham overflow-auto">
        <table className="table-auto w-full overflow-x-scroll border-collapse">
          <thead>
            <tr className="text-left text-sm text-medium">
              <th className="border-b px-4 py-2">License Plate</th>
              <th className="border-b px-4 py-2">Year</th>
              <th className="border-b px-4 py-2">Make</th>
              <th className="border-b px-4 py-2">Model</th>
              <th className="border-b px-4 py-2">VIN</th>
              <th className="border-b px-4 py-2">Status</th>
              <th className="border-b px-4 py-2">Type</th>
              <th className="border-b px-4 py-2">Group</th>
              <th className="border-b px-4 py-2">Current Meter</th>
              <th className="border-b px-4 py-2">Operator</th>
              <th className="border-b px-4 py-2">Has Fuel Card</th>
            </tr>
          </thead>
          <tbody className="text-xs text-greytext">
            {currentPageData.length === 0 ? (
              <tr>
                <td colSpan="11" className="text-center py-4">
                  No filter data found
                </td>
              </tr>
            ) : (
              currentPageData.map((list, index) => (
                <tr key={index} className="border-t border-b">
                  <td className="px-4 py-2">{list.LicensePlate}</td>
                  <td className="px-4 py-2">{list.year}</td>
                  <td className="px-4 py-2">{list.make}</td>
                  <td className="px-4 py-2">{list.model}</td>
                  <td className="px-4 py-2">{list.vin}</td>
                  <td className="px-4 py-2">{list.status}</td>
                  <td className="px-4 py-2">{list.type}</td>
                  <td className="px-4 py-2">{list.group}</td>
                  <td className="px-4 py-2">{list.currentMeter}</td>
                  <td className="px-4 py-2 flex items-center gap-2">
                    <img src={tableProfile} alt="profile" />
                    {list.operator.name}
                  </td>
                  <td className="px-4 py-2 text-center">{list.hasFuelCard}</td>
                  <td className="px-4 py-2 flex items-center gap-2 text-center ">
                    <div className="bg-red min-w-[40px]  p-2 rounded cursor-pointer">
                      <img className="w-full h-full" src={cloud} alt="cloud" />
                    </div>
                    ...
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {/* // -----pagination sec----- */}
      <Pagination
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        startIndex={startIndex}
        endIndex={endIndex}
        totalItems={filteredData.length}
      />
    </>
  );
}
