import { useSelector } from "react-redux";
import AdminDashboardCard from "./AdminEventCard";

const AdminDashboardEvents = () => {
  const events = useSelector((state) => state.eventsState.events);
  return (
    <section className="grid gap-4">
      {events?.map((event) => (
        <AdminDashboardCard
          key={event.id}
          img={event?.img}
          title={event?.title}
          date={event?.date}
          location={event?.location}
          attendees={event?.attendees}
          capacity={event?.capacity}
        />
      ))}
    </section>
  );
};

export default AdminDashboardEvents;
