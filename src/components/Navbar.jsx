import { Link, NavLink } from "react-router";
import {
  MdOutlineAccountCircle,
  MdOutlineEventNote,
  MdOutlineExplore,
  MdOutlineNightlight,
} from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMoonOutline } from "react-icons/io5";
import { useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { RiGroupLine } from "react-icons/ri";
import { PiSignOutBold } from "react-icons/pi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

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
            <li>
              <NavLink
                to="/communities"
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-md ${isActive ? "bg-light-primary text-primary" : "text-black"}`
                }
              >
                My Events
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="hidden items-center gap-4">
          <input
            className="px-1 focus:outline-none"
            type="text"
            name="browse"
            id="browse"
            placeholder="Browsing as guest"
          />
          <MdOutlineNightlight className="text-2xl cursor-pointer" />
          <button className="py-2 px-4 bg-primary hover:opacity-90 text-white rounded-lg cursor-pointer">
            Sign In
          </button>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <button className="cursor-pointer relative">
              <div className="absolute -top-0.5 -right-0.5 h-3.5 w-3.5 z-10 flex items-center justify-center rounded-full bg-primary text-white">
                <p className="text-[7px]">3</p>
              </div>
              <IoIosNotificationsOutline className="text-2xl" />
            </button>
          </div>
          <IoMoonOutline className="text-xl cursor-pointer" />
          <div className="relative lg:hidden">
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
              className={`${showMenu ? "block" : "hidden"} absolute bg-white top-9 right-0 min-w-50 rounded-lg shadow-sm border border-gray-300`}
            >
              <div className="p-2 flex items-center gap-2">
                <img
                  className="w-7 h-7 lg:w-7 lg:h-7 rounded-full"
                  src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
                  alt="profile-pict"
                />
                <div>
                  <p className="font-semibold text-sm">Alex Kim</p>
                  <p className="text-dark-gray text-xs">alexkim@example.com</p>
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
                <li className="w-full">
                  <NavLink
                    to="/my-event"
                    className={({ isActive }) =>
                      `p-3 w-full flex items-center gap-2 ${isActive ? "bg-light-primary text-primary" : "text-black"}`
                    }
                  >
                    <MdOutlineEventNote className="text-lg" />
                    My Events
                  </NavLink>
                </li>
                <li className="w-full">
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
                <li className="w-full border-t border-t-gray-100">
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
          <div className="relative hidden lg:block">
            <button
              onClick={() => setShowPopUp(!showPopUp)}
              className="cursor-pointer"
            >
              <img
                className="w-6 h-6 lg:w-7 lg:h-7 rounded-full"
                src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
                alt="profile-pict"
              />
              <div
                className={`${showPopUp ? "grid" : "hidden"} bg-white text-xs shadow-2xl border border-gray-300 absolute top-11 right-0 text-start gap-2 p-2 rounded-lg`}
              >
                <div className="border-b border-b-gray-300 p-2">
                  <p className="font-bold">Alex kim</p>
                  <p className="text-dark-gray">alex.kim@example.com</p>
                </div>
                <Link className="border-b border-b-gray-300 p-2">
                  My profile
                </Link>
                <Link className="text-red p-2 font-semibold">Sign Out</Link>
              </div>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
