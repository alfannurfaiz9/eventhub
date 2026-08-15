const DiscussionCard = ({ img, name, desc }) => {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-4">
      <img className="w-7 h-7 rounded-full" src={img} alt="avatar-profile" />
      <div className="grid gap-1 p-2 rounded-lg text-sm bg-white border border-gray-300">
        <p className="font-semibold">
          {name}{" "}
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
