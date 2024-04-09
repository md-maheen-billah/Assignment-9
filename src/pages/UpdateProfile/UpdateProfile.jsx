import { useContext } from "react";
// import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";

import toast from "react-hot-toast";

const UpdateProfile = () => {
  const { user, updateUser, setUser } = useContext(AuthContext);

  // const { register } = useForm();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    console.log(name);
    const image = e.target.image.value;

    updateUser(name, image)
      .then(() => {
        setUser({ ...user, name, image });
        toast.success("Updated Successfully");
        window.location.href = "/update";
      })
      .catch();
  };

  // const onSubmit = (data) => {
  //   const { name, image } = data;
  //   updateUser(name, image)
  //     .then(() => {
  //       setUser({ ...user, name, image });
  //       toast.success("Updated Successfully");
  //       navigate("/update");
  //     })
  //     .catch();
  // };

  return (
    <div>
      <div className="flex justify-center items-center my-10">
        <div>
          <div className="bg-[#05386B] py-5 px-8 rounded-xl">
            <h2 className="text-center text-2xl font-bold text-[#EDF5E1]">
              User Profile
            </h2>
            <div className="flex justify-center">
              <img
                className="mt-4 rounded-full w-[120px] h-[120px] border-4 border-[#5CDB95]"
                src={user.photoURL}
                alt=""
              />
            </div>
            <form onSubmit={handleRegister} className="mt-4">
              <div className="mb-4">
                <label className="text-[#EDF5E1]" htmlFor="name">
                  Name:
                </label>

                <input
                  className="mt-2 p-2 rounded-md w-full bg-[#EDF5E1]"
                  type="text"
                  id="name"
                  name="name"
                  defaultValue={user.displayName}
                  placeholder="Enter Your Name"
                  // {...register("name", { required: true })}
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
                  defaultValue={user.photoURL}
                  required
                  placeholder="Enter An Image URL"
                  // {...register("image", { required: true })}
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
                  defaultValue={user.email}
                  readOnly
                  required
                  placeholder="Enter An Email Address"
                />
              </div>
              <div className="mt-6">
                <input
                  className="rounded-lg font-bold hover:duration-300 hover:cursor-pointer hover:text-[#EDF5E1] hover:bg-[#379683] bg-[#5CDB95] text-[#05386B] w-full py-2"
                  type="submit"
                  name="submit"
                  value="Update"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
