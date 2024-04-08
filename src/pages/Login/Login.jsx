import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="flex justify-center items-center my-12">
      <div>
        <div className="bg-[#05386B] py-5 px-8 rounded-xl">
          <h2 className="text-center text-2xl font-bold text-[#EDF5E1]">
            Login Your Account
          </h2>
          <form className="mt-4">
            <label className="text-[#EDF5E1]" htmlFor="email">
              Email Address:
            </label>
            <br />
            <input
              className="mt-2 mb-4 p-2 rounded-md w-full bg-[#EDF5E1]"
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter Your Email Address"
            />
            <br />
            <label className="text-[#EDF5E1]" htmlFor="password">
              Password:
            </label>
            <br />
            <div className="relative">
              <input
                className="mt-2 mb-2 p-2 rounded-md w-full bg-[#EDF5E1]"
                type="password"
                id="password"
                name="password"
                required
                placeholder="Enter Your Password"
              />
              <span
                className="absolute top-5 right-2 hover:cursor-pointer"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? (
                  <IoEyeOff className="text-[#5CDB95]" />
                ) : (
                  <IoEye className="text-[#05386B]" />
                )}
              </span>
            </div>
            <div className="mt-5">
              <input
                className="rounded-lg font-bold hover:duration-300 hover:cursor-pointer hover:text-[#EDF5E1] hover:bg-[#379683] bg-[#5CDB95] text-[#05386B] w-full py-2"
                type="submit"
                name="submit"
                value="Login"
              />
            </div>
          </form>
          <div className="flex items-center my-4">
            <div className="h-px bg-[#EDF5E1] w-full"></div>
            <div className="mx-4 text-[#EDF5E1]">or</div>
            <div className="h-px bg-[#EDF5E1] w-full"></div>
          </div>
          <div>
            <button className="flex  items-center gap-2 justify-center rounded-lg font-bold hover:duration-300 hover:cursor-pointer hover:text-[#EDF5E1] hover:bg-[#379683] bg-[#8EE4AF] text-[#05386B] w-full py-2">
              <FaGoogle /> Login using Google
            </button>
          </div>
          <div className="mt-5">
            <button className="flex  items-center gap-2 justify-center rounded-lg font-bold hover:duration-300 hover:cursor-pointer hover:text-[#EDF5E1] hover:bg-[#379683] bg-[#8EE4AF] text-[#05386B] w-full py-2">
              <FaGithub /> Login using Github
            </button>
          </div>
        </div>
        <div className="text-center">
          <p className="mt-6 font-semibold text-[#05386B]">
            Don&#39;t Have An Account? {""}
            <Link to="/register" className="text-[#EDF5E1] underline">
              Register Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
