import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div className="bg-[#5CDB95]">
      <Navbar></Navbar>
      <div className="max-w-[1280px] mx-auto px-3 lg:px-10">
        <Outlet></Outlet>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
