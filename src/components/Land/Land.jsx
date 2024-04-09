import PropTypes from "prop-types";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// import { VscDebugBreakpointLog } from "react-icons/vsc";
const Land = ({ land }) => {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  return (
    <div data-aos="fade-up">
      <div className="bg-[#05386B] relative h-[500px] space-y-3 transition hover:scale-105 hover:border-[#EDF5E1] border-[#05386B]">
        <div className="relative">
          <img className="" src={land.image} alt="" />
          <div className="badge bg-[#5CDB95] border-[#5CDB95] text-[#05386B] absolute top-4 left-2 ">
            {land.status}
          </div>
        </div>
        <div className="px-4 space-y-2">
          <h2 className="text-[#EDF5E1] font-semibold text-lg">
            {land.estate_title}
          </h2>
          <p className="text-[#5CDB95] font-semibold">
            Property Type:{" "}
            <span className="text-[#EDF5E1] font-normal">
              {land.segment_name}
            </span>
          </p>
          <div className="">
            <p className="text-[#EDF5E1] text-3xl font-semibold">
              ${land.price}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[#5CDB95] font-semibold">
              Location:{" "}
              <span className="text-[#EDF5E1] font-normal">
                {land.location}
              </span>
            </p>
            <p className="text-[#5CDB95] font-semibold">
              Area:{" "}
              <span className="text-[#EDF5E1] font-normal">{land.area}</span>
            </p>
          </div>
        </div>

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
          <button className="absolute bottom-6 transition hover:scale-105 rounded-lg font-bold hover:duration-300 hover:cursor-pointer hover:text-[#EDF5E1] hover:bg-[#379683] bg-[#5CDB95] text-[#05386B] px-2  py-2">
            View Property
          </button>
        </div>
      </div>
    </div>
  );
};

Land.propTypes = {
  land: PropTypes.object,
};

export default Land;
