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

export default function Main() {
  return (
    <div className="py-10 px-10 font-gotham">
      <div className="flex gap-5">
        <div className="flex items-center flex-wrap gap-5 grow w-[60%]">
          {/* ------------------ */}
          {vehicleTotalCountData.map((data, index) => (
            <div
              className="text-textred font-medium bg-pink p-5 text-center rounded-lg max-w-[391px] min-w-[241px] grow-0 shrink-1"
              key={index}
            >
              <div className=" bg-white inline-flex items-center justify-center rounded-full">
                <p className="w-8 h-8 flex justify-center items-center text-sm">
                  {data.num}
                </p>
              </div>
              <p className=" mt-3 text-2xl">{data.name}</p>
            </div>
          ))}

          {/* ------------------ */}
        </div>
        <div className="grow-0 w-[50%] space-y-4">
          <h1>Vehicle Status</h1>
          <ul>
            <li className="flex justify-between items-center">
              Active <span>3</span>
            </li>
            <hr />
            <li className="flex justify-between items-center">
              Active <span>3</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
