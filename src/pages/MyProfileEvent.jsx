import { useEffect, useState } from "react";
import { events } from "../utils/datas";
import { getCategories, getJoinedEvent } from "../utils/getDatas";

import EventsCard from "../components/EventsCard";

const MyProfileEvent = () => {
  const [joinedEvent, setJoinedEvent] = useState(null);

  const renderEvent = () => {
    const event = events.filter((event) => {
      return getJoinedEvent(event.id);
    });

    setJoinedEvent(event);
  };

  useEffect(() => {
    (() => {
      renderEvent();
    })();
  }, []);
  return (
    <>
      <section
        className={`${joinedEvent?.length ? "h-fit" : "min-h-dvh"} py-6 px-4 lg:px-38 bg-gray grid lg:grid-cols-3 gap-4`}
      >
        {joinedEvent?.map((event, idx) => (
          <EventsCard
            key={`${event.id}-${idx}`}
            id={event.id}
            img={event.img}
            cat={getCategories(event)}
            title={event.title}
            date={event.date}
            time={event.time}
            location={event.location}
            attendees={event.attendees}
            capacity={event.capacity}
            renderEvent={renderEvent}
          />
        ))}
      </section>
    </>
  );
};

export default MyProfileEvent;
