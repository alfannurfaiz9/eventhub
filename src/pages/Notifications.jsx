import { IoMdDoneAll } from "react-icons/io";

import NotificationCard from "../components/NotificationsCard.jsx";

const Notifications = () => {
  return (
    <>
      <section className="py-6 px-4 lg:px-68 bg-white border-b border-b-gray-300">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold">Notifications</h2>
            <div className="w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white">
              <p className="text-xs">1</p>
            </div>
          </div>
          <p className="lg:hidden py-2 text-sm text-dark-gray">
            Stay up to date with your events and communities.
          </p>
          <button className="w-fit py-1.5 px-3 flex gap-2 items-center cursor-pointer hover:opacity-60 text-xs lg:text-sm lg:py-2 lg:px-4 border border-gray-300 rounded-lg">
            <IoMdDoneAll />
            Mark as all read
          </button>
        </div>
        <p className="hidden lg:block text-sm text-dark-gray">
          Stay up to date with your events and communities.
        </p>
        <div className="flex gap-4 py-4">
          <button className="py-1.5 px-3 lg:py-2 lg:px-4 text-xs bg-primary text-white rounded-lg hover:opacity-90 cursor-pointer">
            All
          </button>
          <button className="py-1.5 px-3 lg:py-2 lg:px-4 text-xs bg-white text-dark-gray border border-gray-300 rounded-lg hover:opacity-60 cursor-pointer">
            Unread(1)
          </button>
        </div>
      </section>
      <section className="lg:py-6 lg:px-68 bg-gray min-h-dvh">
        <div className="lg:border bg-white lg:border-gray-300 lg:rounded-lg lg:overflow-hidden shadow-sm">
          <NotificationCard />
        </div>
      </section>
    </>
  );
};

export default Notifications;
