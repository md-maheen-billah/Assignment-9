import PropTypes from "prop-types";
// import { VscDebugBreakpointLog } from "react-icons/vsc";
const Land = ({ land }) => {
  return (
    <div className="bg-[#05386B] p-5 rounded-lg relative h-[600px] space-y-4 transition hover:scale-105 hover:border-[#EDF5E1] border-[#05386B] border-2">
      <img className="rounded-lg" src={land.image} alt="" />
      <h2 className="text-[#EDF5E1] font-semibold text-lg">
        {land.estate_title}
      </h2>
      <p className="text-[#5CDB95] font-semibold">
        Property Type:{" "}
        <span className="text-[#EDF5E1] font-normal">{land.segment_name}</span>
      </p>
      <p className="text-[#EDF5E1]">{land.description}</p>
      <div className="flex items-center gap-10">
        <p className="text-[#5CDB95] font-semibold">
          Price:{" "}
          <span className="text-[#EDF5E1] font-normal">${land.price}</span>
        </p>
        <p className="text-[#5CDB95] font-semibold">
          Status:{" "}
          <span className="text-[#EDF5E1] font-normal">For {land.status}</span>
        </p>
      </div>
      <p className="text-[#5CDB95] font-semibold">
        Area: <span className="text-[#EDF5E1] font-normal">{land.area}</span>
      </p>
      <p className="text-[#5CDB95] font-semibold">
        Location:{" "}
        <span className="text-[#EDF5E1] font-normal">{land.location}</span>
      </p>
      {/* <div>
        <p className="text-[#5CDB95] font-semibold">Facilities:</p>
        <ul>
          {land.facilities.map((facility, index) => (
            <li key={index}>
              <div className="flex items-center gap-2 text-[#EDF5E1] font-normal">
                <VscDebugBreakpointLog />
                {facility}
              </div>
            </li>
          ))}
        </ul>
      </div> */}
      <div className=" flex justify-center">
        <button className="absolute bottom-4 rounded-lg font-bold hover:duration-300 hover:cursor-pointer hover:text-[#EDF5E1] hover:bg-[#379683] bg-[#5CDB95] text-[#05386B] px-2  py-2">
          View Property
        </button>
      </div>
    </div>
  );
};

Land.propTypes = {
  land: PropTypes.object,
};

export default Land;
