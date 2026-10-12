import { getCategories } from "../utils/getDatas";

import EventsCard from "../components/EventsCard";
import useAuth from "../hooks/useAuth";
import useMyEvent from "../hooks/useMyEvent";
import moment from "moment/moment";

const MyProfileEvent = () => {
  const user = useAuth();
  const events = useMyEvent();

  return (
    <>
      <section
        className={`${events?.length ? "h-fit" : "min-h-dvh"} py-6 px-4 lg:px-38 bg-gray grid lg:grid-cols-3 gap-4`}
      >
        {events?.map((event, idx) => (
          <EventsCard
            key={`${event.id}-${idx}`}
            id={event.id}
            img={`${import.meta.env.VITE_API_URL}/events/img/${event.img_url}`}
            cat={event.category.split(",")}
            title={event.title}
            date={moment(event.start_at).add(1, "year").format("LL")}
            time={
              moment(event.start_at).add(1, "day").format("LLL").split(" ")[3]
            }
            location={event.location}
            attendees={event.total_attendee}
            capacity={event.capacity}
          />
        ))}
      </section>
    </>
  );
};

export default MyProfileEvent;
