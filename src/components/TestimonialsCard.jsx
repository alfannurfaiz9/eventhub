const TestimonialsCard = ({ desc, name, role }) => {
  return (
    <article className="p-2 border border-gray-300 rounded-lg grid gap-2">
      <p className="text-3xl text-primary">"</p>
      <p className="text-sm text-dark-gray">{desc}</p>
      <div className="flex gap-2 items-center">
        <p className="w-8 h-8 flex items-center justify-center text-sm bg-blue rounded-full text-white font-bold">
          {name[0] + name[1].toUpperCase()}
        </p>
        <div>
          <p className="text-sm font-bold">{name}</p>
          <p className="text-xs text-dark-gray">{role}</p>
        </div>
      </div>
    </article>
  );
};

export default TestimonialsCard;
