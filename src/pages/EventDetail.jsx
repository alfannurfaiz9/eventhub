import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

import EventSpeakers from "../components/EventSpeakers.jsx";
import DiscussionCard from "../components/DiscussionCard.jsx";
import RecommendationCard from "../components/RecommendationCard.jsx";

import { communities, discussions, events, speakers } from "../utils/datas.js";
import { getCategories, getRecommendations } from "../utils/getDatas.js";

import { FaArrowLeft } from "react-icons/fa";
import { CiBookmark, CiCalendar, CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";

import { GoComment } from "react-icons/go";
import { MdSend } from "react-icons/md";

const EventDetail = () => {
  const [event, setEvent] = useState(null);
  const [community, setCommunity] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    (() => {
      const filteredEvent = events.filter((e) => e.id.toString() === id);
      setEvent(filteredEvent[0]);

      const filteredCommunities = communities.filter(
        (community) => community.id === event?.community_id,
      );
      setCommunity(filteredCommunities[0]);
    })();
  }, [id, event]);

  return (
    <>
      <>
        <div className="py-4 px-6 border-b border-b-gray shadow-xs">
          <Link
            to="/events"
            className="w-fit flex items-center gap-2 text-dark-gray text-sm cursor-pointer hover:opacity-60 hover:underline"
          >
            <FaArrowLeft />
            <p>Back to Events</p>
          </Link>
        </div>
        {event ? (
          <section className="bg-gray py-6 px-6 lg:px-24 grid lg:grid-cols-4 gap-8 lg:gap-4">
            <section className="lg:col-span-3 grid gap-8 lg:px-8">
              <div className="grid gap-3">
                <div className="h-68 rounded-xl overflow-hidden">
                  {event.img ? (
                    <img
                      className="w-full h-full object-cover"
                      src={event.img}
                      alt="event-detail-thumb"
                    />
                  ) : (
                    <div className="h-full w-full bg-gray"></div>
                  )}
                </div>
                <div className="flex gap-2 text-xs h-fit">
                  {getCategories(event).map((el, idx) => (
                    <p key={`${el.id}-${idx}`} className={el.style}>
                      {el.name}
                    </p>
                  ))}
                  <p className="py-1 px-2 text-green bg-light-green rounded-full">
                    Available
                  </p>
                </div>
                <h2 className="text-3xl font-bold">{event.title}</h2>
                <h3 className="font-bold">About this event</h3>
                <p className="text-dark-gray text-sm">{event.desc}</p>
                <p className="text-dark-gray text-sm">{event.sub_desc}</p>
              </div>
              <div className="grid gap-4">
                <h3 className="font-bold">Speakers</h3>
                <div className="grid lg:grid-cols-2 gap-2 lg:gap-4">
                  {speakers.map((speaker, idx) => (
                    <EventSpeakers
                      key={`${speaker.id}-${idx}`}
                      name={speaker.name}
                      role={speaker.role}
                      img={speaker.img}
                    />
                  ))}
                </div>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center gap-2">
                  <GoComment />
                  <h3 className="font-bold">
                    Discussion
                    <span className="ml-2 font-normal text-dark-gray">(3)</span>
                  </h3>
                </div>
                <div className="grid gap-4">
                  {discussions.map((discuss, idx) => (
                    <DiscussionCard
                      key={`${discuss.id}-${idx}`}
                      img={discuss.img}
                      name={discuss.name}
                      desc={discuss.desc}
                    />
                  ))}
                  <div className="grid grid-cols-[auto_1fr] gap-4">
                    <img
                      className="w-7 h-7 rounded-full"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTMSHWOi0zVkRyJ7BJkq1XsZpWQ-_3Y5oZJDer-Q7amHWxkrInY78-2TU&s=10"
                      alt="avatar-profile"
                    />
                    <div className="p-2 rounded-lg text-sm bg-white flex gap-2 justify-between">
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
                </div>
              </div>
              <section className="grid gap-4">
                <p className="font-bold">You might also like</p>
                <article className="grid lg:grid-cols-3 gap-4">
                  {getRecommendations(event).length ? (
                    getRecommendations(event).map((rec, idx) => (
                      <Link to={`/events/${rec.id}`} key={`${rec.id}-${idx}`}>
                        <RecommendationCard
                          img={rec.img}
                          title={rec.title}
                          date={rec.date}
                        />
                      </Link>
                    ))
                  ) : (
                    <p className="text-xs text-dark-gray">
                      No recommendation for this categories
                    </p>
                  )}
                </article>
              </section>
            </section>
            <section className="grid gap-4 h-fit">
              <div className="bg-white py-4 px-3 grid gap-3 rounded-xl border border-gray-300">
                <p className="text-dark-gray text-xs">EVENT INFO</p>
                <div className="flex gap-1 text-dark-gray">
                  <CiCalendar />
                  <p className="text-xs text-black">{event.date}</p>
                </div>
                <div className="flex gap-1 text-dark-gray">
                  <IoMdTime />
                  <p className="text-xs text-black">{event.time}</p>
                </div>
                <div className="flex gap-1 text-dark-gray">
                  <CiLocationOn />
                  <p className="text-xs text-black">{event.location}</p>
                </div>
                <div className="w-full h-[0.5px] bg-gray-200 my-1"></div>
                <div className="flex gap-2 text-xs text-dark-gray">
                  <p>
                    {Math.round((event.attendees / event.capacity) * 100)}% full
                  </p>
                  <p>{event.capacity - event.attendees} spots left</p>
                </div>
                <div className="text-xs text-dark-gray flex justify-between">
                  <p>{event.attendees} attendees</p>
                  <p>{event.capacity} capacity</p>
                </div>
                <div className="relative w-full py-1 rounded-full bg-gray">
                  <div
                    style={{
                      width: `${(event.attendees / event.capacity) * 100}%`,
                    }}
                    className={`absolute left-0 top-0 rounded-full ${Math.round((event.attendees / event.capacity) * 100) < 80 && "bg-green"} ${Math.round((event.attendees / event.capacity) * 100) > 80 && Math.round((event.attendees / event.capacity) * 100) < 100 && "bg-yellow"} ${Math.round((event.attendees / event.capacity) * 100) === 100 && "bg-red"}  h-full`}
                  ></div>
                </div>
                <button className="py-1 w-full text-sm bg-primary rounded-lg text-white cursor-pointer hover:opacity-90">
                  Join Event
                </button>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <button className="flex items-center justify-center gap-2 py-1 border border-gray-300 rounded-lg cursor-pointer hover:opacity-50">
                    <CiBookmark /> Save
                  </button>
                  <button className="flex items-center justify-center gap-2 py-1 border border-gray-300 rounded-lg cursor-pointer hover:opacity-50">
                    <IoShareSocialOutline /> Share
                  </button>
                </div>
              </div>
              <div className="bg-white py-3 px-2 grid gap-3 rounded-xl border border-gray-300">
                <p className="text-dark-gray text-xs">ORGANIZED BY</p>
                <div className="flex gap-2 items-center">
                  <img
                    className="w-11 h-11 rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmGSTrfvxa6sHR51cGE8mRJQXhHCFM9MxvbA5QzWaON8hSdBPlcrdHHFCk&s=10"
                    alt="organized-profile"
                  />
                  <div>
                    <p className="font-bold">Rizky Pratama</p>
                    <Link
                      to={`/communities/${community?.id}`}
                      className="text-xs text-blue hover:underline hover:opacity-80"
                    >
                      {community?.name}
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </section>
        ) : (
          <p>Loading...</p>
        )}
      </>
    </>
  );
};

export default EventDetail;
