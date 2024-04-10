import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Marque = () => {
  return (
    <div className="flex gap-6 p-2 lg:p-4 bg-[#05386B] mt-4 lg:mt-10 animate__animated animate__fadeInDownBig">
      <button className=" font-bold hover:duration-300 hover:cursor-pointer hover:text-[#EDF5E1] hover:bg-[#379683] bg-[#5CDB95] text-[#05386B] px-3 lg:px-6 py-2 lg:py-3">
        Latest
      </button>
      <Marquee>
        <Link className="mr-10 text-[#EDF5E1]" to="/">
          Rising Interest in Land Investment: Why More People Are Buying Land
        </Link>
        <Link className="mr-10 text-[#EDF5E1]" to="/">
          Land Purchase Trends: What Buyers Need to Know in 2024
        </Link>
        <Link className="mr-10 text-[#EDF5E1]" to="/">
          Impact of Remote Work on Land Buying: How Work-From-Home Shifts
          Affect. Real Estate Market
        </Link>
      </Marquee>
    </div>
  );
};

export default Marque;
