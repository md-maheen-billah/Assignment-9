import { useLoaderData, useParams } from "react-router-dom";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { saveWishLand } from "../../utility";
import { Helmet } from "react-helmet-async";
const Details = () => {
  const lands = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const land = lands.find((land) => land.id === idInt);

  const handleWishList = (land) => {
    saveWishLand(land);
  };
  return (
    <div>
      <Helmet>
        <title>{land.estate_title}</title>
      </Helmet>
      <div className="flex my-12 flex-col lg:flex-row">
        <div className="lg:w-8/12 relative">
          <img
            className="lg:rounded-l-lg h-[350px] lg:h-full w-full"
            src={land.image}
            alt=""
          />
          <div className="animate__animated text-xl py-2 px-4 rounded-3xl animate__slower animate__swing animate__infinite font-medium bg-[#05386B] border-[#05386B] text-[#5CDB95] absolute top-4 left-4 ">
            {land.status}
          </div>
        </div>
        <div className="bg-[#05386B] lg:w-4/12 p-5 lg:rounded-r-lg">
          <div className="px-4 space-y-4">
            <h2 className="text-[#5CDB95] font-semibold 2xl:text-3xl lg:text-xl xl:text-2xl animate__animated animate__headShake  animate__slow animate__infinite">
              {land.estate_title}
            </h2>
            <p className="text-[#EDF5E1] 2xl:text-base lg:text-xs xl:text-base">
              {land.description}
            </p>
            <p className="text-[#5CDB95] font-semibold 2xl:text-base lg:text-xs xl:text-base ">
              Property Type:{" "}
              <span className="text-[#EDF5E1] font-normal">
                {land.segment_name}
              </span>
            </p>
            <p className="text-[#5CDB95] font-semibold 2xl:text-base lg:text-xs xl:text-base">
              Location:{" "}
              <span className="text-[#EDF5E1] font-normal">
                {land.location}
              </span>
            </p>
            <p className="text-[#5CDB95] font-semibold 2xl:text-base lg:text-xs xl:text-base">
              Area:{" "}
              <span className="text-[#EDF5E1] font-normal">
                {land.area} acres
              </span>
            </p>
            <div>
              <p className="text-[#5CDB95] font-semibold 2xl:text-base lg:text-xs xl:text-base">
                Facilities:
              </p>
              <ul className="2xl:text-base lg:text-xs xl:text-base">
                {land.facilities.map((facility, index) => (
                  <li key={index}>
                    <div className="flex items-center gap-2 text-[#EDF5E1] font-normal">
                      <VscDebugBreakpointLog />
                      {facility}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#5CDB95]  2xl:text-4xl lg:text-xl xl:text-3xl font-semibold">
                ${land.price}
              </p>
              <button
                onClick={() => handleWishList(land)}
                className="animate__animated animate__pulse animate__infinite bottom-6 rounded-lg font-bold hover:duration-300 hover:cursor-pointer hover:text-[#EDF5E1] hover:bg-[#379683] bg-[#5CDB95] text-[#05386B] px-2  py-2"
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
