import { useContext, useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const Login = () => {
  const { signInUser, googleSignIn, gitSignIn } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully Logged In");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
        console.error(error);
      });
  };

  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully Logged In");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGit = () => {
    gitSignIn()
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully Logged In");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex justify-center items-center my-12">
      <div>
        <div className="bg-[#05386B] py-5 px-8 rounded-xl">
          <h2 className="text-center text-2xl font-bold text-[#EDF5E1]">
            Login Your Account
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
            <div>
              <label className="text-[#EDF5E1]" htmlFor="email">
                Email Address:
              </label>
              <input
                className="mt-2  p-2 rounded-md w-full bg-[#EDF5E1]"
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter Your Email Address"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-[#5CDB95]">Email is required</span>
              )}
            </div>
            <div>
              <label className="text-[#EDF5E1]" htmlFor="password">
                Password:
              </label>
              <div className="relative">
                <input
                  className="mt-2 mb-2 p-2 rounded-md w-full bg-[#EDF5E1]"
                  type={showPass ? "text" : "password"}
                  id="password"
                  name="password"
                  required
                  placeholder="Enter Your Password"
                  {...register("password", { required: true })}
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
                {errors.password && (
                  <span className="text-[#5CDB95]">Password is required</span>
                )}
              </div>
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
            <button
              onClick={handleGoogle}
              className="flex  items-center gap-2 justify-center rounded-lg font-bold hover:duration-300 hover:cursor-pointer hover:text-[#EDF5E1] hover:bg-[#379683] bg-[#8EE4AF] text-[#05386B] w-full py-2"
            >
              <FaGoogle /> Login using Google
            </button>
          </div>
          <div className="mt-5">
            <button
              onClick={handleGit}
              className="flex  items-center gap-2 justify-center rounded-lg font-bold hover:duration-300 hover:cursor-pointer hover:text-[#EDF5E1] hover:bg-[#379683] bg-[#8EE4AF] text-[#05386B] w-full py-2"
            >
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
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Login;
