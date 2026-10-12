import EventsCard from "../components/EventsCard";
import moment from "moment/moment";
import useAuth from "../hooks/useAuth";
import useMySavedEvent from "../hooks/useMySavedEvent";

const MyEventSaved = () => {
  const user = useAuth();
  const savedEvent = useMySavedEvent();

  return (
    <>
      <section
        className={`${savedEvent?.length ? "h-fit" : "min-h-dvh"} py-6 px-4 lg:px-24 bg-gray grid lg:grid-cols-3 gap-4`}
      >
        {savedEvent?.map((event, idx) => (
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

export default MyEventSaved;
