import { categories } from "../utils/datas.js";

import { RxPeople } from "react-icons/rx";
import { CiCalendar } from "react-icons/ci";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { joinCommunityThunk } from "../redux/slices/registerSlice.js";
import useAuth from "../hooks/useAuth.js";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useEffect, useState } from "react";

const CommunitiesCard = ({
  id,
  img,
  name,
  desc,
  cat,
  member,
  upcoming_event,
  setShowModal,
}) => {
  const dispatch = useDispatch();

  const user = useAuth();
  const register = useSelector((state) => state.registerState);

  const [selectedId, setSelectedId] = useState(null);

  const handleJoin = (id) => {
    setSelectedId(id);

    if (!user) {
      setShowModal(true);

      return;
    }

    if (user.role === "organizer" || user.role === "admin") {
      return;
    }

    dispatch(
      joinCommunityThunk({
        userId: user.id,
        communityId: id,
      }),
    );
  };

  useEffect(() => {
    (() => {
      if (!register.isPending) {
        setSelectedId(null);
      }
    })();
  }, [register.isPending]);

  return (
    <article className="grid gap-2 border border-gray-300 rounded-lg overflow-hidden">
      <div className="h-38 overflow-hidden flex items-center">
        {img ? (
          <img
            className="h-full w-full object-cover"
            src={img}
            alt="communities-thumb"
          />
        ) : (
          <div className="h-full w-full bg-gray"></div>
        )}
      </div>
      <div className="py-1 px-2">
        <Link to={`/communities/detail/${id}`} className="grid gap-2">
          <p className="text-md font-semibold">{name}</p>
          <p className="text-xs text-dark-gray line-clamp-2">{desc}</p>
          <div className="flex gap-2 text-xs">
            {cat.map((c) =>
              categories
                .filter((cat) => cat.id === c)
                .map((el) => (
                  <p key={el.id} className={el.style}>
                    {el.name}
                  </p>
                )),
            )}
          </div>
          <div className="text-xs text-dark-gray flex gap-4">
            <div className="flex gap-1 items-center">
              <RxPeople />
              <p>
                <span className="mr-1">{member} </span>members
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <CiCalendar />
              <p>
                <span className="mr-1">{upcoming_event}</span> upcoming
              </p>
            </div>
          </div>
        </Link>
        <div className="flex gap-2 my-2">
          <button
            onClick={() => handleJoin(id)}
            disabled={user?.role === "organizer" || user?.role === "admin"}
            className={`${user?.community_id?.includes(id) ? "bg-green text-white" : "bg-primary text-white"} text-sm py-1 w-full rounded-lg cursor-pointer hover:opacity-80 disabled:bg-gray-300 disabled:text-dark-gray flex justify-center`}
          >
            {selectedId === id ? (
              <AiOutlineLoading3Quarters className="text-xl animate-spin" />
            ) : user?.community_id?.includes(id) ? (
              "✔ Registered"
            ) : (
              "Join Community"
            )}
          </button>
        </div>
      </div>
    </article>
  );
};

export default CommunitiesCard;
