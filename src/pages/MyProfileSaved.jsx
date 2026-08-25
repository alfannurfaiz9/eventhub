import { getCategories } from "../utils/getDatas";

import EventsCard from "../components/EventsCard";
import { useSelector } from "react-redux";
import useAuth from "../hooks/useAuth";

const MyProfileEvent = () => {
  const user = useAuth();

  const events = useSelector((state) => state.eventsState.events);
  const savedEvent = events.filter((e) => user?.saved_event_id?.includes(e.id));
  return (
    <>
      <section
        className={`${savedEvent?.length ? "h-fit" : "min-h-dvh"} py-6 px-4 lg:px-38 bg-gray grid lg:grid-cols-3 gap-4`}
      >
        {savedEvent?.map((event, idx) => (
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
          />
        ))}
      </section>
    </>
  );
};

export default MyProfileEvent;
