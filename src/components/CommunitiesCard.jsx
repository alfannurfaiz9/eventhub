import { categories } from "../utils/datas.js";
import { getJoinedCommunity, joinCommunity } from "../utils/getDatas";

import { RxPeople } from "react-icons/rx";
import { CiCalendar } from "react-icons/ci";
import { Link } from "react-router";

const CommunitiesCard = ({
  id,
  img,
  name,
  desc,
  cat,
  member,
  upcoming_event,
  setShowModal,
  update,
}) => {
  const userLogin = localStorage.getItem("isLogin");
  const joinedCommunity = getJoinedCommunity(id);

  const handleJoin = () => {
    if (!userLogin) {
      setShowModal(true);

      return;
    }

    joinCommunity(id);
    update();
  };
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
            onClick={handleJoin}
            className={`${joinedCommunity ? "bg-green text-white" : "bg-primary text-white"} text-sm py-1.5 px-4 w-10/12 rounded-lg cursor-pointer hover:opacity-80`}
          >
            {joinedCommunity ? "✔ Registered" : "Join Community"}
          </button>
        </div>
      </div>
    </article>
  );
};

export default CommunitiesCard;
