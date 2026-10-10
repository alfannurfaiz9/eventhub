const DiscussionCard = ({ img, name, desc }) => {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-4">
      {img ? (
        <img
          className="w-7 h-7 rounded-full"
          src={`${import.meta.env.VITE_API_URL}/events/img/${img}`}
          alt="avatar-profile"
        />
      ) : (
        <p className="w-7 h-7 rounded-full bg-purple text-sm text-white flex items-center justify-center">{`${name[0].toUpperCase()}${name[1].toUpperCase()}`}</p>
      )}
      <div className="grid gap-1 p-2 rounded-lg text-sm bg-white border border-gray-300">
        <p className="font-semibold">
          {name}
          <span className="ml-1 text-dark-gray font-normal text-xs">
            2d ago
          </span>
        </p>
        <p className="text-dark-gray">{desc}</p>
      </div>
    </div>
  );
};

export default DiscussionCard;
