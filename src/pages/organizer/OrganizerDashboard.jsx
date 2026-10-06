import { CiCalendar } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { RxPeople } from "react-icons/rx";
import { TbStairsUp } from "react-icons/tb";
import OrganizerChart from "../../components/organizer/OrganizerChart.jsx";
import { RiSignalCellular3Line } from "react-icons/ri";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import EventCard from "../../components/organizer/EventCard.jsx";
import UpcomingEvent from "../../components/organizer/UpcomingEvent.jsx";

const OrganizerDashboard = () => {
  const events = useSelector((state) => state.eventsState.events);

  return (
    <section className="py-6 px-4 lg:px-24 bg-gray">
      <section className="flex gap-4 lg:gap-0 flex-col lg:flex-row lg:items-center justify-between">
        <div>
          <h2 className="font-bold text-2xl">Organizer Dashboard</h2>
          <p className="text-sm text-dark-gray">
            Manage your events and track performance.
          </p>
        </div>
        <Link
          to="create"
          className="py-2 px-4 w-fit text-white bg-primary rounded-lg hover:opacity-80 cursor-pointer text-sm"
        >
          + Create Event
        </Link>
      </section>
      <section className="mt-8 grid lg:grid-cols-[2.5fr_1fr] gap-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4 lg:col-span-2">
          <div className="grid gap-2 bg-white p-2 w-full rounded-lg border border-gray-300 text-dark-gray">
            <div className="flex items-center justify-between">
              <p className="text-sm">TOTAL EVENTS</p>
              <CiCalendar />
            </div>
            <p className="text-2xl text-black font-bold">{events?.length}</p>
            <p className="text-xs">All time</p>
          </div>
          <div className="grid gap-2 bg-white p-2 w-full rounded-lg border border-gray-300 text-dark-gray">
            <div className="flex items-center justify-between">
              <p className="text-sm">TOTAL ATTENDEES</p>
              <RxPeople />
            </div>
            <p className="text-2xl text-black font-bold">102</p>
            <p className="text-xs">Accross all events</p>
          </div>
          <div className="grid gap-2 bg-white p-2 w-full rounded-lg border border-gray-300 text-dark-gray">
            <div className="flex items-center justify-between">
              <p className="text-sm">AVG FILL RATE</p>
              <TbStairsUp />
            </div>
            <p className="text-2xl text-black font-bold">57%</p>
            <p className="text-xs">Capacity utilization</p>
          </div>
          <div className="grid gap-2 bg-white p-2 w-full rounded-lg border border-gray-300 text-dark-gray">
            <div className="flex items-center justify-between">
              <p className="text-sm">EVENT VIEWS</p>
              <FaRegEye />
            </div>
            <p className="text-2xl text-black font-bold">3,324</p>
            <p className="text-xs">Last 30 days</p>
          </div>
        </div>
        <div className="grid gap-4 h-fit">
          <p className="font-semibold">Your Event</p>
          {events?.map((event) => (
            <EventCard
              id={event.id}
              key={event.id}
              img={event.img}
              title={event.title}
              date={event.date}
              location={event.location}
              attendees={event.attendees}
              capacity={event.capacity}
            />
          ))}
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="p-4 bg-white rounded-lg border border-gray-300">
            <div className="flex items-center gap-2 mb-4">
              <RiSignalCellular3Line />
              <p className="font-semibold text-black text-sm">
                Registration (6 month)
              </p>
            </div>
            <OrganizerChart />
          </div>
          <div className="p-4 grid gap-2 bg-white rounded-lg h-fit border border-gray-300">
            <p className="font-semibold">Quick Actions</p>
            <Link
              to="create"
              className="text-center py-1.5 w-full bg-primary text-white rounded-lg text-sm hover:opacity-80 cursor-pointer"
            >
              + Create New Event
            </Link>
            <Link
              to="/events"
              className="py-1.5 flex gap-2 items-center justify-center w-full bg-gray rounded-lg text-sm hover:opacity-60 cursor-pointer"
            >
              <FaRegEye /> Preview as attandees
            </Link>
          </div>
          <div className="p-4 grid gap-4 bg-white rounded-lg h-fit border border-gray-300">
            <p className="font-semibold">Upcoming Events</p>
            {events?.map((event) => (
              <UpcomingEvent
                key={event.id}
                title={event.title}
                date={event.date}
                attendees={event.attendees}
                capacity={event.capacity}
              />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default OrganizerDashboard;
