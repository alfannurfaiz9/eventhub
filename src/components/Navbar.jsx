import { NavLink } from "react-router";

import { MdOutlineNightlight } from "react-icons/md";

const Navbar = () => {
  return (
    <header className="text-sm py-4 lg:py-3 px-6 flex gap-4 items-center shadow-sm sticky top-0 z-50 bg-white">
      <h1 className="font-bold cursor-pointer">
        <span className="text-white bg-primary py-1 px-2 rounded-lg mr-1">
          E
        </span>
        EventHub
      </h1>
      <nav className="hidden lg:flex items-center justify-between w-full">
        <ul className=" flex gap-2">
          <li className="cursor-pointer">
            <NavLink
              to="/explore"
              className={`px-3 py-1.5 rounded-md text-black [&.active]:bg-light-primary [&.active]:text-primary`}
            >
              Explore
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink
              to="/events"
              className="px-3 py-1.5 rounded-md text-black [&.active]:bg-light-primary [&.active]:text-primary"
            >
              Events
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink
              to="/communities"
              className="px-3 py-1.5 rounded-md text-black [&.active]:bg-light-primary [&.active]:text-primary"
            >
              Communities
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <input
            className="px-1 focus:outline-none"
            type="text"
            name="browse"
            id="browse"
            placeholder="Browsing as guest"
          />
          <MdOutlineNightlight className="text-2xl cursor-pointer"/>
          <button className="py-2 px-4 bg-primary hover:opacity-90 text-white rounded-lg cursor-pointer">
            Sign In
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
