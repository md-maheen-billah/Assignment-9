import { Link, NavLink } from "react-router-dom";
import { FaTree } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // sign out
  const handleSignOut = () => {
    logOut().then().catch();
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? " border-2 border-[#05386B] text-[#05386B] px-4  py-2 rounded-xl font-bold"
              : "text-[#05386B] font-semibold border-2 border-[#5CDB95] bg-[#5CDB95] px-4 py-2  rounded-xl hover:bg-[#379683] hover:text-[#EDF5E1] hover:duration-200"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/update"
          className={({ isActive }) =>
            isActive
              ? " border-2 border-[#05386B] text-[#05386B] px-4  py-2 rounded-xl font-bold"
              : "text-[#05386B] font-semibold border-2 border-[#5CDB95] bg-[#5CDB95] px-4 py-2  rounded-xl hover:bg-[#379683] hover:text-[#EDF5E1]  hover:duration-200"
          }
        >
          Update Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-2xl font-extrabold text-[#05386B]"
        >
          Terra Scope <FaTree />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="dropdown dropdown-hover mr-2">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full border-[#05386B] border-2">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#05386B] text-[#5CDB95] w-40 right-[-55px] rounded-box "
              >
                <li>
                  <a className="justify-between">{user.displayName}</a>
                </li>
              </ul>
            </div>
            <a
              onClick={handleSignOut}
              className="btn font-semibold bg-[#05386B] hover:bg-[#379683] text-[#5CDB95] border-none hover:text-[#EDF5E1]"
            >
              Sign Out
            </a>
          </>
        ) : (
          <Link to="/login">
            <button className="btn font-semibold bg-[#05386B] hover:bg-[#379683] text-[#5CDB95] border-none hover:text-[#EDF5E1]">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
