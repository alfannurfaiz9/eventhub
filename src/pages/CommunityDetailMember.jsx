import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCommunityMemberThunk } from "../redux/slices/communitiesSlice.js";

const CommunityDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const members = useSelector((state) => state.communitiesState.members);

  useEffect(() => {
    dispatch(getCommunityMemberThunk({ id }));
  }, [dispatch, id]);

  return (
    <>
      <div className="grid lg:grid-cols-3 gap-3">
        {members?.map((member, idx) => (
          <div
            key={`${member.id}-${idx}`}
            className="p-2 flex gap-2 bg-white rounded-lg border border-gray-300"
          >
            {member?.img_url ? (
              <img
                className="h-8 w-8 rounded-full"
                src={`${import.meta.env.VITE_API_URL}/user/img/${member.img_url}`}
                alt="profie-pict"
              />
            ) : (
              <p className="h-8 w-8 rounded-full flex items-center justify-center bg-purple text-white">{`${member.full_name[0].toUpperCase()}${member.full_name[1].toUpperCase()}`}</p>
            )}
            <div>
              <p className="text-sm font-semibold">{member.full_name}</p>
              {member?.position ? (
                <p className="text-xs text-dark-gray">{member.position}</p>
              ) : (
                <p className="text-xs text-dark-gray">Member</p>
              )}
            </div>
          </div>
        ))}
        {/* <button className="py-2 px-8 text-sm hover:opacity-80 cursor-pointer text-dark-gray bg-gray-200 border-gray-300 rounded-lg">
          +841 more members
        </button> */}
      </div>
    </>
  );
};

export default CommunityDetail;
