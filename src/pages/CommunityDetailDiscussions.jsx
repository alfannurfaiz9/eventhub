import { MdSend } from "react-icons/md";
import DiscussionCard from "../components/DiscussionCard.jsx";

import useUser from "../hooks/useUser.js";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommunityDiscussionsThunk } from "../redux/slices/communitiesSlice.js";

const CommunityDetailDiscussions = () => {
  const { id } = useParams();
  const user = useUser();
  const dispatch = useDispatch();

  const discuss = useSelector((state) => state.communitiesState.discussion);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!e.target.new_discuss) {
      return;
    }

    e.target.new_discuss.value = "";
  };

  useEffect(() => {
    dispatch(getCommunityDiscussionsThunk({ id }));
  }, [dispatch, id]);

  return (
    <div className="grid gap-4">
      <div className={`${user ? "flex" : "hidden"} items-center gap-2`}>
        {user.img_url ? (
          <img
            className="w-7 h-7 rounded-full"
            src={`${import.meta.env.VITE_API_URL}/user/img/${user?.img_url}`}
            alt="avatar-profile"
          />
        ) : (
          <div className="w-7 h-7 rounded-full flex items-center justify-center bg-purple text-white p-2">
            <p className="text-sm">{`${user?.full_name[0].toUpperCase()}${user?.full_name[1].toUpperCase()}`}</p>
          </div>
        )}
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
          key={`${idx}`}
          img={discussion.img_url}
          name={discussion.full_name}
          desc={discussion.message}
        />
      ))}
    </div>
  );
};

export default CommunityDetailDiscussions;
