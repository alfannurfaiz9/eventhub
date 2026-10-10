import { FiEdit3 } from "react-icons/fi";
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { NavLink, Outlet } from "react-router";
import ProfileModal from "../components/ProfileModal";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useSelector } from "react-redux";
import { TbPasswordUser } from "react-icons/tb";
import ResetPasswordModal from "../components/ResetPasswordModal";
import useEvent from "../hooks/useEvent.js";
import useUser from "../hooks/useUser.js";

const MyProfileLayout = () => {
  const user = useAuth();
  const events = useEvent();
  const userProfile = useUser();
  const communities = useSelector(
    (state) => state.communitiesState.communities,
  );

  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  return (
    <>
      <div className={`${showModal ? "block" : "hidden"}`}>
        <ProfileModal setShowModal={setShowModal} />
      </div>
      <div className={`${editModal ? "block" : "hidden"}`}>
        <ResetPasswordModal setEditModal={setEditModal} />
      </div>
      <section className="bg-white pt-6 px-4 lg:px-38 grid gap-4 border-b border-b-gray-300">
        <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row items-start justify-between">
          <div className="flex gap-4 lg:w-10/12">
            <div className="relative h-fit w-fit">
              <div className="absolute h-4 w-4 bg-green rounded-full bottom-1 right-1 border-2 border-white"></div>
              <div className="w-18 h-18 rounded-xl overflow-hidden">
                {userProfile?.img_url ? (
                  <img
                    className="h-full w-full object-cover"
                    src={userProfile?.img_url}
                    alt="profile-pict"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full w-full bg-purple text-white">
                    <p className="text-2xl">
                      {`${userProfile?.full_name[0].toUpperCase()}${userProfile?.full_name[1].toUpperCase()}`}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="grid gap-4 w-8/12">
              <div className="grid gap-2">
                <h2 className="text-xl font-bold">{userProfile?.full_name}</h2>
                <p className="text-sm text-dark-gray">{userProfile?.email}</p>
                <button
                  onClick={() => setShowModal(true)}
                  disabled={
                    userProfile?.role === "organizer" ||
                    userProfile?.role === "admin"
                  }
                  className="flex lg:hidden items-center gap-2 hover:opacity-60 cursor-pointer w-fit py-1 px-2 text-xs rounded-lg border border-gray-300 disabled:bg-gray-300 disabled:text-dark-gray"
                >
                  <FiEdit3 />
                  Edit Profile
                </button>
                <button
                  onClick={() => setEditModal(true)}
                  disabled={
                    userProfile?.role === "organizer" ||
                    userProfile?.role === "admin"
                  }
                  className="flex lg:hidden items-center gap-2 hover:opacity-60 cursor-pointer w-fit py-1 px-2 text-xs rounded-lg border border-gray-300 disabled:bg-gray-300 disabled:text-dark-gray"
                >
                  <TbPasswordUser />
                  Reset Password
                </button>
                <div className="flex flex-wrap gap-1 lg:gap-3 text-dark-gray text-xs items-center">
                  <div className="flex gap-1 items-center">
                    <CiLocationOn />
                    <p>{user?.address || "Unknown address"}</p>
                  </div>
                  <div className="flex gap-1 items-center">
                    <CiCalendar />
                    <p>August 2026</p>
                  </div>
                  <p className="py-0.5 px-1 rounded-full text-primary bg-light-primary">
                    {userProfile?.role}
                  </p>
                </div>
                <p className="text-xs lg:text-sm text-dark-gray">
                  {userProfile?.bio || "No bio"}
                </p>
              </div>
              <div className="hidden lg:flex w-full gap-8 items-center justify-between">
                <div className="grid gap-1 place-items-center">
                  <p className="text-xl font-bold">
                    {userProfile?.role === "organizer" ||
                    userProfile?.role === "admin"
                      ? events.length
                      : userProfile?.event_id?.length}
                  </p>
                  <p className="text-xs text-dark-gray">Events</p>
                </div>
                <div className="grid gap-1 place-items-center">
                  <p className="text-xl font-bold">
                    {userProfile?.role === "organizer"
                      ? 0
                      : userProfile?.role === "admin"
                        ? communities.length
                        : user?.community_id?.length}
                  </p>
                  <p className="text-xs text-dark-gray">Communities</p>
                </div>
                <div className="grid gap-1 place-items-center">
                  <p className="text-xl font-bold">
                    {userProfile?.role === "organizer" ||
                    userProfile?.role === "admin"
                      ? 0
                      : userProfile?.saved_event_id?.length}
                  </p>
                  <p className="text-xs text-dark-gray">Saved</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:hidden w-full items-center justify-around">
            <div className="grid gap-1 place-items-center">
              <p className="text-xl font-bold">
                {userProfile?.role === "organizer" ||
                userProfile?.role === "admin"
                  ? events.length
                  : userProfile?.event_id?.length}
              </p>
              <p className="text-xs text-dark-gray">Events</p>
            </div>
            <div className="grid gap-1 place-items-center">
              <p className="text-xl font-bold">
                {userProfile?.role === "organizer"
                  ? 0
                  : userProfile?.role === "admin"
                    ? communities.length
                    : userProfile?.community_id?.length}
              </p>
              <p className="text-xs text-dark-gray">Communities</p>
            </div>
            <div className="grid gap-1 place-items-center">
              <p className="text-xl font-bold">
                {userProfile?.role === "organizer" ||
                userProfile?.role === "admin"
                  ? 0
                  : userProfile?.saved_event_id?.length}
              </p>
              <p className="text-xs text-dark-gray">Saved</p>
            </div>
          </div>
          <div className="lg:grid gap-2 hidden place-items-end w-full">
            <button
              onClick={() => setShowModal(true)}
              disabled={
                userProfile?.role === "organizer" ||
                userProfile?.role === "admin"
              }
              className="flex w-fit items-center gap-2 hover:opacity-60 cursor-pointer py-2 px-4 text-sm rounded-lg border border-gray-300 disabled:bg-gray-300 disabled:text-dark-gray"
            >
              <FiEdit3 />
              Edit Profile
            </button>
            <button
              onClick={() => setEditModal(true)}
              disabled={
                userProfile?.role === "organizer" ||
                userProfile?.role === "admin"
              }
              className="flex w-fit items-center gap-2 hover:opacity-60 cursor-pointer py-2 px-4 text-sm rounded-lg border border-gray-300 disabled:bg-gray-300 disabled:text-dark-gray"
            >
              <TbPasswordUser />
              Reset Password
            </button>
          </div>
        </div>
        <div className="flex items-center gap-6 text-sm font-semibold text-dark-gray">
          <NavLink
            end
            to=""
            className={({ isActive }) =>
              `py-3 ${isActive ? "text-primary border-b-2 border-b-primary" : "text-dark-gray border-b-2 border-white"}`
            }
          >
            Events
            <span>
              (
              {userProfile?.role === "organizer" ||
              userProfile?.role === "admin"
                ? events.length
                : userProfile?.event_id?.length}
              )
            </span>
          </NavLink>
          <NavLink
            to="communities"
            className={({ isActive }) =>
              `py-3 ${isActive ? "text-primary border-b-2 border-b-primary" : "text-dark-gray border-b-2 border-white"}`
            }
          >
            Communities
            <span>
              (
              {userProfile?.role === "organizer"
                ? 0
                : userProfile?.role === "admin"
                  ? communities.length
                  : userProfile?.community_id?.length}
              )
            </span>
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
              {userProfile?.role === "organizer" ||
              userProfile?.role === "admin"
                ? 0
                : userProfile?.saved_event_id?.length}
              )
            </span>
          </NavLink>
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default MyProfileLayout;
