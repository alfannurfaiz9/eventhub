const RecommendationCard = ({ img, title, date }) => {
  return (
    <div className="grid rounded-xl border border-gray-300 overflow-hidden">
      <div className="h-30 overflow-hidden">
        {img.length > 2 ? (
          <img className="w-full" src={img} alt="community-banners" />
        ) : (
          <div className="h-full w-full bg-gray-200"></div>
        )}
      </div>
      <div className="p-2">
        <h2 className="text-sm font-bold">{title}</h2>
        <p className="text-xs text-dark-gray">{date}</p>
      </div>
    </div>
  );
};

export default RecommendationCard;
