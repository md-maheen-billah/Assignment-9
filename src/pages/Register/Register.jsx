import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="flex justify-center items-center my-10">
      <div>
        <div className="bg-[#05386B] py-5 px-8 rounded-xl">
          <h2 className="text-center text-2xl font-bold text-[#EDF5E1]">
            Register An Account
          </h2>
          <form className="mt-4">
            <label className="text-[#EDF5E1]" htmlFor="name">
              Name:
            </label>
            <br />
            <input
              className="mt-2 mb-4 p-2 rounded-md w-full bg-[#EDF5E1]"
              type="name"
              id="name"
              name="name"
              required
              placeholder="Enter Your Name"
            />
            <br />
            <label className="text-[#EDF5E1]" htmlFor="image">
              Image URL:
            </label>
            <br />
            <input
              className="mt-2 mb-4 p-2 rounded-md w-full bg-[#EDF5E1]"
              type="text"
              id="image"
              name="image"
              required
              placeholder="Enter An Image URL"
            />
            <br />
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
              placeholder="Enter An Email Address"
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
                placeholder="Enter A New Password"
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
                value="Register"
              />
            </div>
          </form>
        </div>
        <div className="text-center">
          <p className="mt-6 font-semibold text-[#05386B]">
            Already Have An Account? {""}
            <Link to="/login" className="text-[#EDF5E1] underline">
              Login Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
