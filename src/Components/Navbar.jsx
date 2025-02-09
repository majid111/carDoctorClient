import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.svg';

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/aboutUs">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg font-semibold"
          >
            {navLinks}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-xl"><img src={logo} alt="" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-semibold">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
        <IoBagOutline />
        </button>
        <button className="btn btn-ghost btn-circle">
        <CiSearch />
        </button>
        <Link>
          <button className="btn btn-outline text-[#FF3811] text-lg font-semibold">
            Appoinment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
