import { CiCalendar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { RxPeople } from "react-icons/rx";
import { CiBookmark } from "react-icons/ci";
import {
  getJoinedEvent,
  getSavedEvent,
  joinEvent,
  saveEvent,
} from "../utils/getDatas";
import { Link } from "react-router";
import { useState } from "react";

const EventsCard = ({
  id,
  img,
  cat,
  title,
  date,
  time,
  location,
  attendees,
  capacity,
  setShowModal,
  renderEvent,
}) => {
  const userLogin = localStorage.getItem("isLogin");

  const [joinedEvent, setJoinedEvent] = useState(getJoinedEvent(id));
  const [savedEvent, setSavedEvent] = useState(getSavedEvent(id));

  const handleJoin = () => {
    if (!userLogin) {
      setShowModal(true);

      return;
    }

    joinEvent(id);
    setJoinedEvent(getJoinedEvent(id));
    renderEvent && renderEvent();
  };

  const handleSave = () => {
    if (!userLogin) {
      setShowModal(true);

      return;
    }

    saveEvent(id);
    setSavedEvent(getSavedEvent(id));
    renderEvent && renderEvent();
  };

  return (
    <article className="grid gap-2 border border-gray-300 rounded-lg overflow-hidden">
      <div className="relative h-46 overflow-hidden flex items-start">
        {img ? (
          <img
            className="h-full w-full object-cover"
            src={img}
            alt="event-thumb"
          />
        ) : (
          <div className="h-full w-full bg-gray"></div>
        )}
        <div className="absolute bottom-0 flex gap-2 p-2 text-xs">
          {cat.map((el) => (
            <p key={el.id} className={el.style}>
              {el.name}
            </p>
          ))}
        </div>
      </div>
      <div className="grid gap-2 py-2 px-4">
        <Link to={`/events/detail/${id}`} className="grid gap-2">
          <p className="text-md font-semibold">{title}</p>
          <div className="flex gap-1 text-dark-gray">
            <CiCalendar />
            <p className="text-xs">
              {date} - {time}
            </p>
          </div>
          <div className="flex gap-1 text-dark-gray">
            <CiLocationOn />
            <p className="text-xs">{location}</p>
          </div>
          <div className="flex gap-1 text-dark-gray">
            <RxPeople />
            <p className="text-xs">
              {attendees} / {capacity} attendees
            </p>
          </div>
          <div className="text-xs text-dark-gray flex justify-between">
            <p>{attendees} attendees</p>
            <p>{capacity} capacity</p>
          </div>
          <div className="relative w-full py-1 rounded-full bg-gray">
            <div
              style={{ width: `${(attendees / capacity) * 100}%` }}
              className={`absolute left-0 top-0 rounded-full ${Math.round((attendees / capacity) * 100) < 80 && "bg-green"} ${Math.round((attendees / capacity) * 100) > 80 && Math.round((attendees / capacity) * 100) < 100 && "bg-yellow"} ${Math.round((attendees / capacity) * 100) === 100 && "bg-red"}  h-full`}
            ></div>
          </div>
        </Link>
        <div className="flex gap-2 my-2">
          <button
            onClick={handleJoin}
            className={`${joinedEvent ? "bg-green text-white" : "bg-primary text-white"} text-sm py-1.5 px-4 w-10/12 rounded-lg cursor-pointer hover:opacity-80`}
          >
            {joinedEvent ? "✔ Registered" : "Join Event"}
          </button>
          <button
            onClick={handleSave}
            className={`${savedEvent ? "text-green bg-light-green" : "text-dark-gray border-gray-300"} py-1 px-4 border rounded-lg cursor-pointer hover:opacity-80`}
          >
            <CiBookmark />
          </button>
        </div>
      </div>
    </article>
  );
};

export default EventsCard;
