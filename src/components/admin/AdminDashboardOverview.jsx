import { CiCalendar, CiFlag1 } from "react-icons/ci";
import { RxPeople } from "react-icons/rx";
import { useSelector } from "react-redux";

const AdminDashboardOverview = () => {
  const organizer = JSON.parse(import.meta.env.VITE_ORGANIZER);
  const registeredUsers = useSelector(
    (state) => state.registerState.registeredUser,
  );
  const totalUsers = [organizer, ...registeredUsers];

  const events = useSelector((state) => state.eventsState.events);
  const communities = useSelector(
    (state) => state.communitiesState.communities,
  );
  return (
    <>
      <section className="grid grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4 lg:col-span-2">
        <div className="grid gap-2 bg-white p-4 w-full rounded-lg border border-gray-300 text-dark-gray">
          <div className="flex items-center justify-between">
            <p className="text-sm">TOTAL USERS</p>
            <RxPeople />
          </div>
          <p className="text-2xl text-black font-bold">{totalUsers?.length}</p>
          <p className="text-xs">+{totalUsers?.length - 2} this month</p>
        </div>
        <div className="grid gap-2 bg-white p-4 w-full rounded-lg border border-gray-300 text-dark-gray">
          <div className="flex items-center justify-between">
            <p className="text-sm">TOTAL EVENTS</p>
            <RxPeople />
          </div>
          <p className="text-2xl text-black font-bold">{events?.length}</p>
          <p className="text-xs">8 upcoming</p>
        </div>
        <div className="grid gap-2 bg-white p-4 w-full rounded-lg border border-gray-300 text-dark-gray">
          <div className="flex items-center justify-between">
            <p className="text-sm">COMMUNITIES</p>
            <CiCalendar />
          </div>
          <p className="text-2xl text-black font-bold">{communities?.length}</p>
          <p className="text-xs">All active</p>
        </div>
        <div className="grid gap-2 bg-white p-4 w-full rounded-lg border border-gray-300 text-dark-gray">
          <div className="flex items-center justify-between">
            <p className="text-sm">AVG FILL RATE</p>
            <CiFlag1 />
          </div>
          <p className="text-2xl text-black font-bold">74%</p>
          <p className="text-xs">Across all events</p>
        </div>
      </section>
      <section className="p-4 bg-white rounded-lg text-sm grid gap-2 border border-gray-300">
        <p className="font-semibold">Recent Platform Activity</p>
        <div className="flex items-center justify-between text-dark-gray">
          <div className="flex items-center gap-2">
            <RxPeople className="text-green" />
            <p>284 new users registered this month</p>
          </div>
          <p className="text-xs">Today</p>
        </div>
        <div className="flex items-center justify-between text-dark-gray">
          <div className="flex items-center gap-2">
            <CiCalendar className="text-purple" />
            <p>"AI Product Design Summit" reached 234 registrations</p>
          </div>
          <p className="text-xs">2h ago</p>
        </div>
        <div className="flex items-center justify-between text-dark-gray">
          <div className="flex items-center gap-2">
            <CiFlag1 className="text-red" />
            <p>3 new organizer applications received</p>
          </div>
          <p className="text-xs">5h ago</p>
        </div>
        <div className="flex items-center justify-between text-dark-gray">
          <div className="flex items-center gap-2">
            <RxPeople className="text-green" />
            <p>Jakarta AI & ML Club crossed 2,000 members</p>
          </div>
          <p className="text-xs">5h ago</p>
        </div>
      </section>
    </>
  );
};

export default AdminDashboardOverview;
