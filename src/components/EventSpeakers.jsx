const EventSpeakers = ({ img, name, role }) => {
  return (
    <div className="p-2 flex items-center gap-3 bg-white rounded-lg border border-gray-300">
      <img className="w-9 h-9 rounded-full" src={img} alt="avatar-profile" />
      <div>
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-sm text-dark-gray">{role}</p>
      </div>
    </div>
  );
};

export default EventSpeakers;
