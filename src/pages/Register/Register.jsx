import { useContext, useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex justify-center items-center my-10">
      <div>
        <div className="bg-[#05386B] py-5 px-8 rounded-xl">
          <h2 className="text-center text-2xl font-bold text-[#EDF5E1]">
            Register An Account
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
            <div>
              <label className="text-[#EDF5E1]" htmlFor="name">
                Name:
              </label>

              <input
                className="mt-2 p-2 rounded-md w-full bg-[#EDF5E1]"
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name"
                required
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-[#5CDB95]">Name is required</span>
              )}
            </div>
            <div>
              <label className="text-[#EDF5E1]" htmlFor="image">
                Image URL:
              </label>
              <input
                className="mt-2 p-2 rounded-md w-full bg-[#EDF5E1]"
                type="text"
                id="image"
                name="image"
                required
                placeholder="Enter An Image URL"
                {...register("image", { required: true })}
              />
              {errors.image && (
                <span className="text-[#5CDB95]">Image URL is required</span>
              )}
            </div>
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
                placeholder="Enter An Email Address"
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
                  className="mt-2  p-2 rounded-md w-full bg-[#EDF5E1]"
                  type="password"
                  id="password"
                  name="password"
                  required
                  placeholder="Enter A New Password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-[#5CDB95]">Password is required</span>
                )}
              </div>
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
