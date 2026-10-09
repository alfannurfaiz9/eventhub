import { Link, NavLink } from "react-router";
import {
  MdOutlineAccountCircle,
  MdOutlineAdminPanelSettings,
  MdOutlineEventNote,
  MdOutlineExplore,
} from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMoonOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { RiGroupLine } from "react-icons/ri";
import { PiSignOutBold } from "react-icons/pi";
import { AiOutlineClose } from "react-icons/ai";

import { useDispatch } from "react-redux";
import { TbLayoutDashboard } from "react-icons/tb";

import useAuth from "../hooks/useAuth.js";
import themeContext from "../context/themeContext.js";
import { CiLight } from "react-icons/ci";
import LogoutModal from "./LogoutModal.jsx";

const guestAndAdminList = [
  { icon: BiHomeAlt, name: "Explore", link: "/explore" },
  { icon: MdOutlineExplore, name: "Events", link: "/events" },
  { icon: RiGroupLine, name: "Communities", link: "/communities" },
];

const attendeeAndOrganizerList = [
  ...guestAndAdminList,
  { icon: MdOutlineEventNote, name: "My Events", link: "/my-events" },
];

const Navbar = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const user = useAuth();
  const { theme, changeTheme } = useContext(themeContext);

  const renderedList =
    !user || user.role === "admin"
      ? guestAndAdminList
      : attendeeAndOrganizerList;

  const handleLogout = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className={showModal ? "block" : "hidden"}>
        <LogoutModal setShowModal={setShowModal} />
      </div>
      <header
        className={`${theme === "light" ? "bg-white" : "bg-black"} text-sm py-4 lg:py-3 px-6 flex gap-4 items-center shadow-sm sticky top-0 z-40 border-b border-white/30`}
      >
        <nav className="flex items-center justify-between gap-4 w-full">
          <div className="flex gap-4">
            <Link to="/">
              <h1
                className={`${theme === "light" ? "text-black" : "text-white"} font-bold cursor-pointer`}
              >
                <span
                  className={`${theme === "light" ? "text-white" : "text-black"} bg-primary py-1 px-2 rounded-lg mr-1`}
                >
                  E
                </span>
                EventHub
              </h1>
            </Link>
            <ul className="hidden lg:flex gap-2">
              {renderedList.map((list, idx) => (
                <li key={idx}>
                  <NavLink
                    to={list.link}
                    className={({ isActive }) =>
                      `px-3 py-1.5 rounded-md ${isActive ? "bg-light-primary text-primary" : theme === "light" ? "text-black" : "text-white"}`
                    }
                  >
                    {list.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={user ? "hidden" : "hidden lg:flex items-center gap-4"}
          >
            <p className="px-1 text-sm text-dark-gray">Browsing as guest</p>
            <div
              onClick={() => changeTheme()}
              className={`${theme === "light" ? "text-black" : "text-white"} text-xl cursor-pointer w-6 flex items-center justify-center`}
            >
              <IoMoonOutline
                className={theme === "light" ? "block" : "hidden"}
              />
              <CiLight
                className={`${theme === "dark" ? "block" : "hidden"} text-2xl`}
              />
            </div>
            <Link
              to="/login"
              className="py-2 px-4 bg-primary hover:opacity-90 text-white rounded-lg cursor-pointer"
            >
              Sign In
            </Link>
          </div>
          <div
            className={user ? "hidden lg:flex items-center gap-4" : "hidden"}
          >
            <div className={user ? "flex items-center gap-4" : "hidden"}>
              <div className={user?.role === "organizer" ? "block" : "hidden"}>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `flex items-center hover:text-primary hover:bg-light-primary gap-2 px-3 py-1.5 rounded-md ${isActive ? "bg-light-primary text-primary" : theme === "light" ? "text-black/80" : "text-white"}`
                  }
                >
                  <TbLayoutDashboard className="text-lg" />
                  <p className="text-xs font-semibold">Dashboard</p>
                </NavLink>
              </div>
              <div className={user?.role === "admin" ? "block" : "hidden"}>
                <NavLink
                  to="/admin"
                  className={({ isActive }) =>
                    `flex items-center hover:text-primary hover:bg-light-primary gap-2 px-3 py-1.5 rounded-md ${isActive ? "bg-light-primary text-primary" : theme === "light" ? "text-black/80" : "text-white"}`
                  }
                >
                  <MdOutlineAdminPanelSettings className="text-lg" />
                  <p className="text-xs font-semibold">Admin</p>
                </NavLink>
              </div>
              <div
                className={`${theme === "light" ? "text-black" : "text-white"} flex items-center`}
              >
                <Link to="/notifications" className="cursor-pointer relative">
                  <div className="absolute -top-0.5 -right-0.5 h-3.5 w-3.5 z-10 flex items-center justify-center rounded-full bg-primary text-white">
                    <p className="text-[7px]">1</p>
                  </div>
                  <IoIosNotificationsOutline className="text-2xl" />
                </Link>
              </div>
              <div
                onClick={() => changeTheme()}
                className={`${theme === "light" ? "text-black" : "text-white"} text-xl cursor-pointer w-6 flex items-center justify-center`}
              >
                <IoMoonOutline
                  className={theme === "light" ? "block" : "hidden"}
                />
                <CiLight
                  className={`${theme === "dark" ? "block" : "hidden"} text-2xl`}
                />
              </div>
            </div>
            <div className={user ? "relative hidden lg:block" : "hidden"}>
              <button
                onClick={() => setShowPopUp(!showPopUp)}
                className="cursor-pointer"
              >
                <img
                  className="w-6 h-6 lg:w-7 lg:h-7 rounded-full"
                  src={user?.img_url}
                  alt="profile-pict"
                />
                <div
                  className={`${showPopUp ? "grid" : "hidden"} bg-white text-xs shadow-2xl border border-gray-300 absolute top-11 right-0 text-start gap-2 p-2 rounded-lg`}
                >
                  <div className="border-b border-b-gray-300 p-2">
                    <p className="font-bold">{user?.full_name}</p>
                    <p className="text-dark-gray">{user?.email}</p>
                  </div>
                  <Link
                    to="/profile"
                    className="border-b border-b-gray-300 p-2"
                  >
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
            <div
              className={`${theme === "light" ? "text-black" : "text-white"} lg:hidden flex items-center gap-4`}
            >
              <div className={user ? "flex items-center" : "hidden"}>
                <Link to="/notifications" className="cursor-pointer relative">
                  <div className="absolute -top-0.5 -right-0.5 h-3.5 w-3.5 z-10 flex items-center justify-center rounded-full bg-primary text-white">
                    <p className="text-[7px]">1</p>
                  </div>
                  <IoIosNotificationsOutline className="text-2xl" />
                </Link>
              </div>
              <div
                onClick={() => changeTheme()}
                className="text-xl cursor-pointer w-6 flex items-center justify-center"
              >
                <IoMoonOutline
                  className={theme === "light" ? "block" : "hidden"}
                />
                <CiLight
                  className={`${theme === "dark" ? "block" : "hidden"} text-2xl`}
                />
              </div>
            </div>
            <div className={theme === "light" ? "text-black" : "text-white"}>
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
            </div>
            <div
              className={`${showMenu ? "block" : "hidden"} absolute bg-white top-9 right-0 min-w-60 rounded-lg shadow-sm border border-gray-300`}
            >
              <div className={user ? "p-2 flex items-center gap-2" : "hidden"}>
                <img
                  className="w-7 h-7 lg:w-7 lg:h-7 rounded-full"
                  src={user?.img_url}
                  alt="profile-pict"
                />
                <div>
                  <p className="font-semibold text-sm">{user?.full_name}</p>
                  <p className="text-dark-gray text-xs">{user?.email}</p>
                </div>
              </div>
              <ul>
                <li
                  className={
                    user && user?.role === "admin" ? "w-full" : "hidden"
                  }
                >
                  <NavLink
                    to="/admin"
                    className={({ isActive }) =>
                      `p-3 w-full flex items-center gap-2 ${isActive ? "bg-light-primary text-primary" : "text-black"}`
                    }
                  >
                    <MdOutlineAdminPanelSettings className="text-lg" />
                    Admin
                  </NavLink>
                </li>
                <li
                  className={
                    user && user?.role === "organizer" ? "w-full" : "hidden"
                  }
                >
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      `p-3 w-full flex items-center gap-2 ${isActive ? "bg-light-primary text-primary" : "text-black"}`
                    }
                  >
                    <TbLayoutDashboard className="text-lg" />
                    Dashboard
                  </NavLink>
                </li>
                {renderedList.map((list, idx) => (
                  <li key={idx} className="w-full">
                    <NavLink
                      to={list.link}
                      className={({ isActive }) =>
                        `flex items-center gap-2 p-3 w-full ${isActive ? "bg-light-primary text-primary" : "text-black"}`
                      }
                    >
                      <list.icon className="text-lg" />
                      {list.name}
                    </NavLink>
                  </li>
                ))}
                <li className={user ? "w-full" : "hidden"}>
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
                    !user ? "w-full border-t border-t-gray-100" : "hidden"
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
                    user ? "w-full border-t border-t-gray-100" : "hidden"
                  }
                >
                  <p className="p-3 w-full flex items-center gap-2 font-semibold text-red">
                    <PiSignOutBold className="text-lg" />
                    Sign Out
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
