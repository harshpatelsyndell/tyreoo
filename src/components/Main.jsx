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
    <div className="py-10 px-8">
      <div>
        <div>
          {/* ------------------ */}
          {vehicleTotalCountData.map((data, index) => (
            <div key={index}>
              <div>
                <p>{data.num}</p>
              </div>
              <p>{data.name}</p>
            </div>
          ))}

          {/* ------------------ */}
        </div>
        <div></div>
      </div>
    </div>
  );
}
