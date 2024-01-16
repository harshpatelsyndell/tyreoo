import totalVehicleGraph from "../assets/totalVehicleGraph.png";
import myfleet from "../assets/myfleet.png";

import { TableData } from "./TableData";

const vehicleTotalCountData = [
  {
    name: "Vehicles in Transit",
    num: "50",
  },
  {
    name: "New Users",
    num: "11",
  },
  {
    name: "Support Requests",
    num: "03",
  },
  {
    name: "Total Drivers",
    num: "53",
  },
];

const vehicleStatus = [
  {
    status: "Active",
    totNum: 3,
    bg: "statusActiveBg",
    text: "statusActive",
  },
  {
    status: "Inactive",
    totNum: 1,
    bg: "statusInactiveBg",
    text: "statusInactive",
  },
  {
    status: "Idle",
    totNum: 1,
    bg: "statusIdleBg",
    text: "statusIdle",
  },
  {
    status: "Out of Service",
    totNum: 1,
    bg: "statusOutOfServiceBg",
    text: "statusOutOfService",
  },
];

const maintenance = [
  {
    status: "In Service",
    totNum: 1,
    bg: "statusActiveBg",
    text: "statusActive",
  },
  {
    status: "Out of Service",
    totNum: 2,
    bg: "statusOutOfServiceBg",
    text: "statusOutOfService",
  },
  {
    status: "Disposed",
    totNum: 2,
    bg: "statusIdleBg",
    text: "statusIdle",
  },
  {
    status: "Missing",
    totNum: 1,
    bg: "statusIdleBg",
    text: "statusIdle",
  },
];

export default function Main() {
  return (
    <div className="py-10 px-10 font-gotham space-y-10">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* ------------------ */}
        <div className="grid grid-cols-2 gap-4 lg:w-[50%]">
          {vehicleTotalCountData.map((data, index) => (
            <div
              className="text-textred font-medium bg-pink p-5 text-center rounded-lg w-full "
              key={index}
            >
              <div className=" bg-white inline-flex items-center justify-center rounded-full">
                <p className="w-8 h-8 flex justify-center items-center text-sm">
                  {data.num}
                </p>
              </div>
              <p className=" mt-3 md:text-2xl">{data.name}</p>
            </div>
          ))}
        </div>
        {/* ------------------ */}
        <TableData data={vehicleStatus} name={"Vehicle Status"} />
        {/* ------------------ */}
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* ------------------ */}
        <div className="grid grid-cols-2 gap-4 lg:w-[50%]">
          <div>
            <h1 className="md:text-2xl text-red font-medium">Total Vehicles</h1>
          </div>
          <div className="w-full">
            <select className="text-red bg-grey float-end">
              <option value="week">week</option>
              <option value="day">day</option>
              <option value="year">year</option>
              <option value="month">month</option>
            </select>
          </div>
          <div className="col-span-2">
            <img
              className="w-full h-full"
              src={totalVehicleGraph}
              alt="graph"
            />
          </div>
        </div>
        {/* ------------------ */}
        <TableData data={maintenance} name={"Maintenance"} />
        {/* ------------------ */}
      </div>

      <div>
        <div className="md:w-[50%]">
          <h1 className="md:text-2xl text-red font-medium text-center">
            My Fleet
          </h1>
          <img className="w-auto mx-auto" src={myfleet} alt="chart" />
        </div>
      </div>
    </div>
  );
}
