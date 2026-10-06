import { CiCalendar } from "react-icons/ci";
import { IoShieldOutline } from "react-icons/io5";
import { RxPeople } from "react-icons/rx";
import { NavLink, Outlet, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import { useEffect } from "react";

const AdminLayout = () => {
  const navigate = useNavigate();
  const user = useAuth();

  useEffect(() => {
    user?.role !== "admin" && navigate("/");
  }, [user?.role, navigate]);

  return (
    user?.role === "admin" && (
      <section className="py-6 px-4 lg:px-24 bg-gray flex flex-col gap-6 min-h-dvh">
        <section className="flex gap-4 lg:gap-0 flex-col lg:flex-row lg:items-center justify-between">
          <div className="flex gap-4">
            <div className="p-2 bg-light-primary h-fit rounded-lg">
              <IoShieldOutline className="text-primary text-2xl" />
            </div>
            <div>
              <h2 className="font-bold text-2xl">Admin Dashboard</h2>
              <p className="text-sm text-dark-gray">
                Platform management and moderation
              </p>
            </div>
          </div>
        </section>
        <div className="flex w-full  overflow-x-scroll scrollbar-none items-center gap-6 text-sm font-semibold text-dark-gray border-b border-gray-300">
          <NavLink
            end
            to="dashboard"
            className={({ isActive }) =>
              `py-3 ${isActive ? "text-primary border-b-2 border-b-primary" : "text-dark-gray border-b-2 border-gray"} flex gap-2 items-center`
            }
          >
            <IoShieldOutline />
            <p>Overview</p>
          </NavLink>
          <NavLink
            to="users"
            className={({ isActive }) =>
              `py-3 ${isActive ? "text-primary border-b-2 border-b-primary" : "text-dark-gray border-b-2 border-gray"} flex gap-2 items-center`
            }
          >
            <RxPeople />
            <p>Users</p>
          </NavLink>
          <NavLink
            to="events"
            className={({ isActive }) =>
              `py-3 ${isActive ? "text-primary border-b-2 border-b-primary" : "text-dark-gray border-b-2 border-gray"} flex gap-2 items-center`
            }
          >
            <CiCalendar />
            <p>Events</p>
          </NavLink>
          <NavLink
            to="communities"
            className={({ isActive }) =>
              `py-3 ${isActive ? "text-primary border-b-2 border-b-primary" : "text-dark-gray border-b-2 border-gray"} flex gap-2 items-center`
            }
          >
            <RxPeople />
            <p>Communities</p>
          </NavLink>
        </div>
        <Outlet />
      </section>
    )
  );
};

export default AdminLayout;
