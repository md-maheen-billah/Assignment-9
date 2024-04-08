import { Link, NavLink } from "react-router-dom";
import { FaTree } from "react-icons/fa6";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "  text-[#05386B] font-bold underline"
              : "text-[#05386B] font-semibold"
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
              ? "  text-[#05386B] font-bold underline"
              : "text-[#05386B] font-semibold"
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
        {/* {user ? (
          <>
            <span className="mr-2">{user.email}</span>
            <a onClick={handleLogOut} className="btn">
              Sign Out
            </a>
          </>
        ) : ( */}
        <NavLink to="/login">
          <button className="btn font-semibold bg-[#05386B] hover:bg-[#379683] text-[#5CDB95] border-none hover:text-[#EDF5E1]">
            Login
          </button>
        </NavLink>
        {/* )} */}
      </div>
    </div>
  );
};

export default Navbar;
