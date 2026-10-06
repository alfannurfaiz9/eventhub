import { FaRegEye } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";
import { Link } from "react-router";

const EventCard = ({ id, img, title, date, location, attendees, capacity }) => {
  return (
    <article className="p-3 flex gap-4 items-start w-full bg-white border border-gray-300 rounded-lg">
      <div className="w-24 h-16 overflow-hidden rounded-lg">
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
      <div className="w-full grid gap-2 text-dark-gray">
        <div className="flex items-center justify-between">
          <div className="grid gap-1">
            <p className="font-semibold text-black text-sm">{title}</p>
            <p className="text-xs">
              {date} · {location}
            </p>
          </div>
          <p className="text-xs py-1 px-2 rounded-full text-green bg-light-green">
            Active
          </p>
        </div>
        <div className="text-xs flex items-center justify-between">
          <p>{attendees} attendees</p>
          <p>{capacity} Capacity</p>
        </div>
        <div className="relative w-full py-0.5 rounded-full bg-gray">
          <div
            style={{ width: `${(attendees / capacity) * 100}%` }}
            className={`absolute left-0 top-0 rounded-full ${Math.round((attendees / capacity) * 100) < 80 && "bg-green"} ${Math.round((attendees / capacity) * 100) > 80 && Math.round((attendees / capacity) * 100) < 100 && "bg-yellow"} ${Math.round((attendees / capacity) * 100) === 100 && "bg-red"}  h-full`}
          ></div>
        </div>
        <div className="flex gap-2">
          <Link
            to={`edit-event/${id}`}
            className="flex gap-3 items-center cursor-pointer text-black/80 hover:opacity-60 py-1 px-3 text-sm border border-gray-300 rounded-lg"
          >
            <FiEdit3 /> Edit
          </Link>
          <button className="flex gap-3 items-center cursor-pointer text-black/80 hover:opacity-60 py-1 px-3 text-sm">
            <FaRegEye /> attandees
          </button>
        </div>
      </div>
    </article>
  );
};

export default EventCard;
