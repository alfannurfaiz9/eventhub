import { HiOutlineDotsHorizontal } from "react-icons/hi";

const AdminCommunityCard = ({
  img,
  title,
  member,
  upcoming_event,
  status = "active",
}) => {
  return (
    <article className="flex justify-between gap-2 bg-white p-2 rounded-lg border border-gray-300">
      <div className="flex gap-2 items-center text-dark-gray">
        <div className="w-14 h-10 rounded-md overflow-hidden">
          {img ? (
            <img
              className="h-full w-full object-cover"
              src={img}
              alt="event-thumb"
            />
          ) : (
            <div className="h-full w-full bg-gray"></div>
          )}
        </div>
        <div className="text-sm">
          <p className="text-black font-semibold">{title}</p>
          <p>
            {member} members · {upcoming_event} upcoming event
          </p>
        </div>
      </div>
      <div className="flex gap-4 text-xs items-center text-dark-gray">
        <p className="py-1 px-2 bg-light-green text-green rounded-lg h-fit">
          {status}
        </p>
        <HiOutlineDotsHorizontal className="text-lg cursor-pointer" />
      </div>
    </article>
  );
};

export default AdminCommunityCard;
