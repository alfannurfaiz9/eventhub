import { CiCalendar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { RxPeople } from "react-icons/rx";
import { CiBookmark } from "react-icons/ci";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { joinEventThunk, saveEventThunk } from "../redux/slices/registerSlice";
import useAuth from "../hooks/useAuth.js";
import { FaBookmark } from "react-icons/fa";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

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
}) => {
  const dispatch = useDispatch();
  const user = useAuth();

  const [selectedId, setSelectedId] = useState({ join: null, save: null });

  const register = useSelector((state) => state.registerState);
  const disabledEvent = attendees === capacity;

  const handleJoin = (id) => {
    if (!user) {
      setShowModal(true);

      return;
    }

    if (user.role === "organizer" || user.role === "admin") {
      return;
    }

    setSelectedId((prev) => {
      return {
        ...prev,
        join: id,
      };
    });

    dispatch(
      joinEventThunk({
        userId: user.id,
        eventId: id,
      }),
    );
  };

  const handleSave = (id) => {
    if (!user) {
      setShowModal(true);

      return;
    }

    if (user.role === "organizer" || user.role === "admin") {
      return;
    }

    setSelectedId((prev) => {
      return {
        ...prev,
        save: id,
      };
    });

    dispatch(
      saveEventThunk({
        userId: user.id,
        eventId: id,
      }),
    );
  };

  useEffect(() => {
    (() => {
      if (!register.isPending) {
        setSelectedId({ join: null, save: null });
      }
    })();
  }, [register.isPending]);

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
          {cat.map((el, idx) => (
            <p
              key={`${idx}`}
              className={`backdrop-blur-[3px] shadow-sm text-white/60 bg-white/20 p-1 rounded-md`}
            >
              {el}
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
              {date} - {time} WIB
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
            onClick={() => handleJoin(id)}
            disabled={
              user?.role === "organizer" ||
              user?.role === "admin" ||
              disabledEvent
            }
            className={`${user?.event_id?.includes(id) ? "bg-green text-white" : "bg-primary text-white"} text-sm py-1.5 px-4 w-10/12 rounded-lg cursor-pointer hover:opacity-80 disabled:bg-gray-300 disabled:text-dark-gray flex justify-center`}
          >
            {selectedId.join === id ? (
              <AiOutlineLoading3Quarters className="text-xl animate-spin" />
            ) : user?.event_id?.includes(id) ? (
              "✔ Registered"
            ) : (
              "Join Event"
            )}
          </button>
          <button
            onClick={() => handleSave(id)}
            disabled={
              user?.role === "organizer" ||
              user?.role === "admin" ||
              disabledEvent
            }
            className={`${user?.saved_event_id?.includes(id) ? "text-primary bg-light-primary" : "text-dark-gray border-gray-300"} py-1 px-4 border rounded-lg cursor-pointer hover:opacity-80 disabled:bg-gray-300 disabled:text-dark-gray`}
          >
            {selectedId.save === id ? (
              <AiOutlineLoading3Quarters className="text-sm animate-spin" />
            ) : (
              <>
                <CiBookmark
                  className={
                    user?.saved_event_id?.includes(id) ? "hidden" : "block"
                  }
                />
                <FaBookmark
                  className={
                    user?.saved_event_id?.includes(id) ? "block" : "hidden"
                  }
                />
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
};

export default EventsCard;
