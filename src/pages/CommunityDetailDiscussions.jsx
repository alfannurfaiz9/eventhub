import { MdSend } from "react-icons/md";
import DiscussionCard from "../components/DiscussionCard.jsx";

import { discussions } from "../utils/datas.js";
import useAuth from "../hooks/useAuth.js";
import { useState } from "react";

const CommunityDetailDiscussions = () => {
  const user = useAuth();

  const [discuss, setDiscuss] = useState(discussions);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newId = discuss && discuss[discuss.length - 1].id;

    if (!e.target.new_discuss) {
      return;
    }

    setDiscuss((prev) => {
      return [
        {
          id: newId + 1,
          img: user?.img,
          name: user?.full_name,
          desc: e.target.new_discuss.value,
        },
        ...prev,
      ];
    });

    e.target.new_discuss.value = "";
  };

  return (
    <div className="grid gap-4">
      <div className={`${user ? "flex" : "hidden"} items-center gap-2`}>
        <img
          className="w-7 h-7 rounded-full"
          src={user?.img}
          alt="avatar-profile"
        />
        <form
          onSubmit={handleSubmit}
          className="p-2 rounded-lg w-full text-sm bg-white flex gap-2 justify-between"
        >
          <input
            className="focus:outline-none w-full text-dark-gray"
            type="text"
            name="new_discuss"
            placeholder="Add to the discussion..."
          />
          <button type="submit" className="w-fit text-primary text-lg">
            <MdSend />
          </button>
        </form>
      </div>
      {discuss?.map((discussion, idx) => (
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
