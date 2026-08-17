import { Link, NavLink, Outlet, useParams } from "react-router";
import {
  getCategories,
  getJoinedCommunity,
  joinCommunity,
} from "../utils/getDatas";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import { communities } from "../utils/datas";

const CommunityDetailLayout = () => {
  const { id } = useParams();

  const [community, setCommunity] = useState(null);
  const [joinedCommunity, setJoinedCommunity] = useState(
    getJoinedCommunity(id),
  );

  const handleJoin = () => {
    joinCommunity(Number(id));
    setJoinedCommunity(getJoinedCommunity(id));
  };

  useEffect(() => {
    (() => {
      const filteredCommunities = communities.filter(
        (c) => c.id.toString() === id,
      )[0];
      setCommunity(filteredCommunities);
    })();
  }, [id]);

  return (
    <>
      <div className="py-4 px-6 border-b border-b-gray shadow-xs">
        <Link
          to="/communities"
          className="flex w-fit items-center gap-2 text-dark-gray text-sm cursor-pointer hover:opacity-60 hover:underline"
        >
          <FaArrowLeft />
          <p>Back to Communities</p>
        </Link>
      </div>
      <section className="w-full h-64 lg:h-80 relative">
        {community?.img ? (
          <img
            className="w-full h-full object-cover"
            src={community.img}
            alt="community-banner"
          />
        ) : (
          <div className="h-full w-full bg-gray"></div>
        )}
        <div className="w-full py-2 lg:py-0 h-78 lg:h-86 flex flex-col justify-end absolute top-0 z-10 bg-black/50 text-white">
          <div className="px-4 lg:px-24 lg:py-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="grid gap-2">
              <h2 className="text-2xl lg:text-3xl font-bold">
                {community?.name}
              </h2>
              <div className="flex gap-4">
                <p className="text-sm">
                  {community?.member} <span className="ml-1">members</span>
                </p>
                <p className="text-sm">
                  {community?.upcoming_event}{" "}
                  <span className="ml-1">upcoming events</span>
                </p>
              </div>
            </div>
            <button
              onClick={handleJoin}
              className={`${joinedCommunity ? "bg-green" : "bg-primary"} py-2 px-8 h-fit w-fit hover:opacity-70 cursor-pointer rounded-lg`}
            >
              {joinedCommunity ? "✓ Joined" : "Join community"}
            </button>
          </div>
        </div>
      </section>
      <section className="bg-gray pt-20 lg:pt-12 py-8 px-4 lg:px-24">
        <div className="p-4 rounded-lg border border-gray-300 bg-white grid gap-3">
          <p className="text-dark-gray text-sm">
            The premier Go programming community in Bandung — weekly meetups,
            workshops, and mentoring for Gophers at all levels.
          </p>
          <div className="flex gap-2 text-xs">
            {community &&
              getCategories(null, community).map((el, idx) => (
                <p key={`${el}-${idx}`} className={el.style}>
                  {el.name}
                </p>
              ))}
          </div>
        </div>
      </section>
      <section className="px-4 lg:px-24 py-2 grid gap-6 bg-gray">
        <div className="flex gap-4 text-dark-gray border-b border-b-gray-300 text-sm">
          <NavLink
            end
            to=""
            className={({ isActive }) =>
              `py-3 ${isActive ? "text-primary border-b-2 border-b-primary" : "text-dark-gray border-b-2 border-white"}`
            }
          >
            Events
          </NavLink>
          <NavLink
            to="members"
            className={({ isActive }) =>
              `py-3 ${isActive ? "text-primary border-b-2 border-b-primary" : "text-dark-gray border-b-2 border-white"}`
            }
          >
            Members
          </NavLink>
          <NavLink
            to="discussions"
            className={({ isActive }) =>
              `py-3 ${isActive ? "text-primary border-b-2 border-b-primary" : "text-dark-gray border-b-2 border-white"}`
            }
          >
            Discussions
          </NavLink>
        </div>
        <div className="grid gap-2">
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default CommunityDetailLayout;
