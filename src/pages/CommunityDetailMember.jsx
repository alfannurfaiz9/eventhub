import { members } from "../utils/datas.js";

const CommunityDetail = () => {
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-3">
        {members.map((member, idx) => (
          <div
            key={`${member.id}-${idx}`}
            className="p-2 flex gap-2 bg-white rounded-lg border border-gray-300"
          >
            <img
              className="h-8 w-8 rounded-full"
              src={member.img}
              alt="profie-pict"
            />
            <div>
              <p className="text-sm font-semibold">{member.name}</p>
              <p className="text-xs text-dark-gray">{member.role}</p>
            </div>
          </div>
        ))}
        <button className="py-2 px-8 text-sm hover:opacity-80 cursor-pointer text-dark-gray bg-gray-200 border-gray-300 rounded-lg">
          +841 more members
        </button>
      </div>
    </>
  );
};

export default CommunityDetail;
