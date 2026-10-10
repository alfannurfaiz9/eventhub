const EventSpeakers = ({ img, name, role }) => {
  return (
    <div className="p-2 flex items-center gap-3 bg-white rounded-lg border border-gray-300">
      {img ? (
        <img
          className="w-9 h-9 rounded-full"
          src={`${import.meta.env.VITE_API_URL}/events/img/${img}`}
          alt="avatar-profile"
        />
      ) : (
        <p className="w-9 h-9 rounded-full bg-purple text-sm text-white flex items-center justify-center">{`${name[0].toUpperCase()}${name[1].toUpperCase()}`}</p>
      )}
      <div>
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-sm text-dark-gray">{role}</p>
      </div>
    </div>
  );
};

export default EventSpeakers;
