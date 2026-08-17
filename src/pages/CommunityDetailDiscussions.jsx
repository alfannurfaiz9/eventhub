import { MdSend } from "react-icons/md";
import DiscussionCard from "../components/DiscussionCard.jsx";

import { discussions } from "../utils/datas.js";
import { getUser } from "../utils/getDatas.js";

const CommunityDetailDiscussions = () => {
  const user = getUser();

  return (
    <div className="grid gap-4">
      <div className="flex items-center gap-2">
        <img
          className="w-7 h-7 rounded-full"
          src={user?.img}
          alt="avatar-profile"
        />
        <div className="p-2 rounded-lg w-full text-sm bg-white flex gap-2 justify-between">
          <input
            className="focus:outline-none w-full text-dark-gray"
            type="text"
            placeholder="Add to the discussion..."
          />
          <button className="w-fit text-primary text-lg">
            <MdSend />
          </button>
        </div>
      </div>
      {discussions?.map((discussion, idx) => (
        <DiscussionCard
          key={`${discussion.id}-${idx}`}
          img={discussion.img}
          name={discussion.name}
          desc={discussion.desc}
        />
      ))}
    </div>
  );
};

export default CommunityDetailDiscussions;
