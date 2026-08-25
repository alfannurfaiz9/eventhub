import { NavLink, Outlet } from "react-router";
import useAuth from "../hooks/useAuth";
import { useSelector } from "react-redux";

const MyEventLayout = () => {
  const user = useAuth();
  const events = useSelector((state) => state.eventsState.events);

  return (
    <>
      <section className="bg-white pt-6 px-4 lg:px-24 grid gap-4 border-b border-b-gray-300">
        <h2 className="text-2xl font-semibold">My Events</h2>
        <div className="flex items-center gap-6 text-sm font-semibold text-dark-gray">
          <NavLink
            end
            to=""
            className={({ isActive }) =>
              `py-3 ${isActive ? "text-primary border-b-2 border-b-primary" : "text-dark-gray border-b-2 border-white"}`
            }
          >
            Upcoming{" "}
            <span>
              (
              {user?.role === "organizer" || user?.role === "admin"
                ? events?.length
                : user?.event_id?.length}
              )
            </span>
          </NavLink>
          <NavLink
            to="past"
            className={({ isActive }) =>
              `py-3 ${isActive ? "text-primary border-b-2 border-b-primary" : "text-dark-gray border-b-2 border-white"}`
            }
          >
            Past <span>(0)</span>
          </NavLink>
          <NavLink
            to="saved"
            className={({ isActive }) =>
              `py-3 ${isActive ? "text-primary border-b-2 border-b-primary" : "text-dark-gray border-b-2 border-white"}`
            }
          >
            Saved{" "}
            <span>
              (
              {user?.role === "organizer" || user?.role === "admin"
                ? 0
                : user?.saved_event_id?.length}
              )
            </span>
          </NavLink>
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default MyEventLayout;
