import { FiEdit3 } from "react-icons/fi";
import { getUser } from "../utils/getDatas";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { NavLink, Outlet } from "react-router";
import ProfileModal from "../components/ProfileModal";
import { useState } from "react";

const MyProfileLayout = () => {
  const user = getUser();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={`${showModal ? "block" : "hidden"}`}>
        <ProfileModal setShowModal={setShowModal} />
      </div>
      <section className="bg-white pt-6 px-4 lg:px-38 grid gap-4 border-b border-b-gray-300">
        <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row items-start justify-between">
          <div className="flex gap-4 lg:w-10/12">
            <div className="w-18 h-18 rounded-xl overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={user?.img}
                alt="profile-photo"
              />
            </div>
            <div className="grid gap-4 w-8/12">
              <div className="grid gap-1">
                <h2 className="text-xl font-bold">{user?.full_name}</h2>
                <p className="text-sm text-dark-gray">{user?.email}</p>
                <button
                  onClick={() => setShowModal(true)}
                  className="flex lg:hidden items-center gap-2 hover:opacity-60 cursor-pointer w-fit py-1 px-2 text-xs rounded-lg border border-gray-300"
                >
                  <FiEdit3 />
                  Edit Profile
                </button>
                <div className="flex flex-wrap gap-1 lg:gap-3 text-dark-gray text-xs items-center">
                  <div className="flex gap-1 items-center">
                    <CiLocationOn />
                    <p>Bandung, Indonesia</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <CiCalendar />
                    <p>Joined August 2026</p>
                  </div>
                  <p className="py-0.5 px-1 rounded-full text-primary bg-light-primary">
                    {user?.role}
                  </p>
                </div>
                <p className="text-xs lg:text-sm text-dark-gray">
                  Backend engineer & community builder. Passionate about Go,
                  distributed systems, and connecting people through events.
                </p>
              </div>
              <div className="hidden lg:flex w-full gap-8 items-center justify-between">
                <div className="grid gap-1 place-items-center">
                  <p className="text-xl font-bold">{user?.event_id?.length}</p>
                  <p className="text-xs text-dark-gray">Events</p>
                </div>
                <div className="grid gap-1 place-items-center">
                  <p className="text-xl font-bold">
                    {user?.community_id?.length}
                  </p>
                  <p className="text-xs text-dark-gray">Communities</p>
                </div>
                <div className="grid gap-1 place-items-center">
                  <p className="text-xl font-bold">
                    {user?.saved_event_id?.length}
                  </p>
                  <p className="text-xs text-dark-gray">Saved</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:hidden w-full items-center justify-around">
            <div className="grid gap-1 place-items-center">
              <p className="text-xl font-bold">{user?.event_id?.length}</p>
              <p className="text-xs text-dark-gray">Events</p>
            </div>
            <div className="grid gap-1 place-items-center">
              <p className="text-xl font-bold">{user?.community_id?.length}</p>
              <p className="text-xs text-dark-gray">Communities</p>
            </div>
            <div className="grid gap-1 place-items-center">
              <p className="text-xl font-bold">
                {user?.saved_event_id?.length}
              </p>
              <p className="text-xs text-dark-gray">Saved</p>
            </div>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="hidden lg:flex items-center gap-2 hover:opacity-60 cursor-pointer w-fit py-2 px-4 text-sm rounded-lg border border-gray-300"
          >
            <FiEdit3 />
            Edit Profile
          </button>
        </div>
        <div className="flex items-center gap-6 text-sm font-semibold text-dark-gray">
          <NavLink
            end
            to=""
            className={({ isActive }) =>
              `py-3 ${isActive ? "text-primary border-b-2 border-b-primary" : "text-dark-gray border-b-2 border-white"}`
            }
          >
            Events <span>({user?.event_id?.length})</span>
          </NavLink>
          <NavLink
            to="communities"
            className={({ isActive }) =>
              `py-3 ${isActive ? "text-primary border-b-2 border-b-primary" : "text-dark-gray border-b-2 border-white"}`
            }
          >
            Communities <span>({user?.community_id?.length})</span>
          </NavLink>
          <NavLink
            to="saved"
            className={({ isActive }) =>
              `py-3 ${isActive ? "text-primary border-b-2 border-b-primary" : "text-dark-gray border-b-2 border-white"}`
            }
          >
            Saved <span>({user?.saved_event_id?.length})</span>
          </NavLink>
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default MyProfileLayout;
