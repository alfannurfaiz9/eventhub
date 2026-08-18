import { Link, NavLink, useNavigate } from "react-router";
import {
  MdOutlineAccountCircle,
  MdOutlineEventNote,
  MdOutlineExplore,
} from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMoonOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { RiGroupLine } from "react-icons/ri";
import { PiSignOutBold } from "react-icons/pi";
import { AiOutlineClose } from "react-icons/ai";

import { getUser } from "../utils/getDatas.js";

const Navbar = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [user, setUser] = useState(null);

  const logedInUser = localStorage.getItem("isLogin");

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLogin");

    navigate("/login");
  };

  useEffect(() => {
    (() => {
      setUser(getUser());
    })();
  }, []);

  return (
    <header className="text-sm py-4 lg:py-3 px-6 flex gap-4 items-center shadow-sm sticky top-0 z-50 bg-white">
      <nav className="flex items-center justify-between gap-4 w-full">
        <div className="flex gap-4">
          <Link to="/">
            <h1 className="font-bold cursor-pointer">
              <span className="text-white bg-primary py-1 px-2 rounded-lg mr-1">
                E
              </span>
              EventHub
            </h1>
          </Link>
          <ul className="hidden lg:flex gap-2">
            <li>
              <NavLink
                to="/explore"
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-md ${isActive ? "bg-light-primary text-primary" : "text-black"}`
                }
              >
                Explore
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-md ${isActive ? "bg-light-primary text-primary" : "text-black"}`
                }
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/communities"
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-md ${isActive ? "bg-light-primary text-primary" : "text-black"}`
                }
              >
                Communities
              </NavLink>
            </li>
            <li className={logedInUser ? "block" : "hidden"}>
              <NavLink
                to="/my-events"
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-md ${isActive ? "bg-light-primary text-primary" : "text-black"}`
                }
              >
                My Events
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          className={
            logedInUser ? "hidden" : "hidden lg:flex items-center gap-4"
          }
        >
          <input
            className="px-1 focus:outline-none"
            type="text"
            name="browse"
            id="browse"
            placeholder="Browsing as guest"
          />
          <IoMoonOutline className="text-xl cursor-pointer" />
          <Link
            to="/login"
            className="py-2 px-4 bg-primary hover:opacity-90 text-white rounded-lg cursor-pointer"
          >
            Sign In
          </Link>
        </div>
        <div
          className={
            logedInUser ? "hidden lg:flex items-center gap-4" : "hidden"
          }
        >
          <div className={logedInUser ? "flex items-center gap-4" : "hidden"}>
            <div className="flex items-center">
              <Link to="/notifications" className="cursor-pointer relative">
                <div className="absolute -top-0.5 -right-0.5 h-3.5 w-3.5 z-10 flex items-center justify-center rounded-full bg-primary text-white">
                  <p className="text-[7px]">1</p>
                </div>
                <IoIosNotificationsOutline className="text-2xl" />
              </Link>
            </div>
            <IoMoonOutline className="text-xl cursor-pointer" />
          </div>
          <div className={logedInUser ? "relative hidden lg:block" : "hidden"}>
            <button
              onClick={() => setShowPopUp(!showPopUp)}
              className="cursor-pointer"
            >
              <img
                className="w-6 h-6 lg:w-7 lg:h-7 rounded-full"
                src={user?.img}
                alt="profile-pict"
              />
              <div
                className={`${showPopUp ? "grid" : "hidden"} bg-white text-xs shadow-2xl border border-gray-300 absolute top-11 right-0 text-start gap-2 p-2 rounded-lg`}
              >
                <div className="border-b border-b-gray-300 p-2">
                  <p className="font-bold">{user?.full_name}</p>
                  <p className="text-dark-gray">{user?.email}</p>
                </div>
                <Link to="/profile" className="border-b border-b-gray-300 p-2">
                  My profile
                </Link>
                <p
                  onClick={handleLogout}
                  className="text-red p-2 font-semibold text-left cursor-pointer"
                >
                  Sign Out
                </p>
              </div>
            </button>
          </div>
        </div>
        <div className="relative lg:hidden flex items-center gap-4">
          <div className="lg:hidden flex items-center gap-4">
            <div className={logedInUser ? "flex items-center" : "hidden"}>
              <Link to="/notifications" className="cursor-pointer relative">
                <div className="absolute -top-0.5 -right-0.5 h-3.5 w-3.5 z-10 flex items-center justify-center rounded-full bg-primary text-white">
                  <p className="text-[7px]">1</p>
                </div>
                <IoIosNotificationsOutline className="text-2xl" />
              </Link>
            </div>
            <IoMoonOutline className="text-xl cursor-pointer" />
          </div>
          <RxHamburgerMenu
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className={`${showMenu ? "hidden" : "block"} text-xl`}
          />
          <AiOutlineClose
            onClick={() => {
              setShowMenu(!showMenu);
            }}
            className={`${showMenu ? "block" : "hidden"} text-xl`}
          />
          <div
            className={`${showMenu ? "block" : "hidden"} absolute bg-white top-9 right-0 min-w-60 rounded-lg shadow-sm border border-gray-300`}
          >
            <div
              className={logedInUser ? "p-2 flex items-center gap-2" : "hidden"}
            >
              <img
                className="w-7 h-7 lg:w-7 lg:h-7 rounded-full"
                src={user?.img}
                alt="profile-pict"
              />
              <div>
                <p className="font-semibold text-sm">{user?.full_name}</p>
                <p className="text-dark-gray text-xs">{user?.email}</p>
              </div>
            </div>
            <ul>
              <li className="w-full">
                <NavLink
                  to="/explore"
                  className={({ isActive }) =>
                    `flex items-center gap-2 p-3 w-full ${isActive ? "bg-light-primary text-primary" : "text-black"}`
                  }
                >
                  <BiHomeAlt className="text-lg" />
                  Explore
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink
                  to="/events"
                  className={({ isActive }) =>
                    `p-3 w-full flex items-center gap-2 ${isActive ? "bg-light-primary text-primary" : "text-black"}`
                  }
                >
                  <MdOutlineExplore className="text-lg" />
                  Events
                </NavLink>
              </li>
              <li className="w-full">
                <NavLink
                  to="/communities"
                  className={({ isActive }) =>
                    `p-3 w-full flex items-center gap-2 ${isActive ? "bg-light-primary text-primary" : "text-black"}`
                  }
                >
                  <RiGroupLine className="text-lg" />
                  Communities
                </NavLink>
              </li>
              <li className={logedInUser ? "w-full" : "hidden"}>
                <NavLink
                  to="/my-events"
                  className={({ isActive }) =>
                    `p-3 w-full flex items-center gap-2 ${isActive ? "bg-light-primary text-primary" : "text-black"}`
                  }
                >
                  <MdOutlineEventNote className="text-lg" />
                  My Events
                </NavLink>
              </li>
              <li className={logedInUser ? "w-full" : "hidden"}>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    `p-3 w-full flex items-center gap-2 ${isActive ? "bg-light-primary text-primary" : "text-black"}`
                  }
                >
                  <MdOutlineAccountCircle className="text-lg" />
                  My Profile
                </NavLink>
              </li>
              <li
                className={
                  !logedInUser ? "w-full border-t border-t-gray-100" : "hidden"
                }
              >
                <NavLink
                  to="/login"
                  className="p-3 w-full flex items-center gap-2 font-semibold text-primary"
                >
                  <MdOutlineAccountCircle className="text-lg" />
                  Sign In
                </NavLink>
              </li>
              <li
                onClick={handleLogout}
                className={
                  logedInUser ? "w-full border-t border-t-gray-100" : "hidden"
                }
              >
                <NavLink
                  to="/profile"
                  className="p-3 w-full flex items-center gap-2 font-semibold text-red"
                >
                  <PiSignOutBold className="text-lg" />
                  Sign Out
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
