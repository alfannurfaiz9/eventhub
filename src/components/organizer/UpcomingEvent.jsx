const UpcomingEvent = ({ title, date, attendees, capacity }) => {
  return (
    <section className="flex gap-2 items-center text-xs text-dark-gray justify-between">
      <div className="flex gap-2 items-center">
        <div className="w-1.5 h-1.5 bg-green rounded-full"></div>
        <div>
          <p className="text-xs font-semibold text-black">{title}</p>
          <p className="text-xs">{date}</p>
        </div>
      </div>
      <p className="text-xs">
        {attendees}/{capacity}
      </p>
    </section>
  );
};

export default UpcomingEvent;
