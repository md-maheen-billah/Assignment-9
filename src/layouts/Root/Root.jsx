import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";
import "animate.css";

const Root = () => {
  return (
    <div className="bg-[#5CDB95] flex flex-col justify-between h-screen">
      <div>
        <Navbar></Navbar>
        <div className="max-w-[1280px] mx-auto px-3 md:px-8 lg:px-10">
          <Outlet></Outlet>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
