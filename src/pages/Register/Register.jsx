import { useContext, useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, updateUser, user, setUser, setLoading } =
    useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { email, password, name, image } = data;

    if (password.length < 6) {
      toast.error("Password should be at least 6 characters of more");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Your password should have at least 1 Upper Case character");
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.error("Your password should have at least 1 Lower Case character");
      return;
    }

    createUser(email, password)
      .then(() => {
        updateUser(name, image)
          .then(() => {
            setUser({ ...user, name, image });
            setLoading(true);
            navigate("/");
            window.location.href = "/";
          })
          .catch();
        toast.success("Registered Successfully");
      })
      .catch((error) => {
        toast.error(error.message);
        console.error(error);
      });
  };

  return (
    <div className="flex justify-center items-center my-16 animate__animated animate__fadeInDownBig">
      <div>
        <div className="bg-[#05386B] py-5 px-8 rounded-xl">
          <h2 className="text-center text-2xl font-bold animate__animated animate__headShake  animate__slow animate__infinite text-[#EDF5E1]">
            Register An Account
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            <div className="mb-4 ">
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
            </div>
            <div className="mb-4">
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
            </div>
            <div className="mb-4">
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
            </div>
            <div className="mb-4">
              <label className="text-[#EDF5E1]" htmlFor="password">
                Password:
              </label>
              <div className="relative">
                <div>
                  <input
                    className="mt-2  p-2 rounded-md w-full bg-[#EDF5E1]"
                    type={showPass ? "text" : "password"}
                    id="password"
                    name="password"
                    required
                    placeholder="Enter A New Password"
                    {...register("password", { required: true })}
                  />
                </div>

                <span
                  className="absolute top-5 right-2 hover:cursor-pointer"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? (
                    <IoEyeOff className="text-[#5CDB95] transition hover:scale-110" />
                  ) : (
                    <IoEye className="text-[#05386B] transition hover:scale-110" />
                  )}
                </span>
              </div>
            </div>
            <div className="mt-6 animate__animated animate__pulse animate__infinite">
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
