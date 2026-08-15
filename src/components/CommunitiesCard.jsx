import { categories } from "../utils/datas.js";

import { RxPeople } from "react-icons/rx";
import { CiCalendar } from "react-icons/ci";

const CommunitiesCard = ({ img, name, desc, cat, member, upcoming_event }) => {
  return (
    <article className="grid gap-2 border border-gray-300 rounded-lg overflow-hidden">
      <div className="h-38 overflow-hidden flex items-center">
        {img ? (
          <img
            className="h-full w-full object-cover"
            src={img}
            alt="communities-thumb"
          />
        ) : (
          <div className="h-full w-full bg-gray"></div>
        )}
      </div>
      <div className="grid gap-2 py-1 px-2">
        <p className="text-md font-semibold">{name}</p>
        <p className="text-xs text-dark-gray line-clamp-2">{desc}</p>
        <div className="flex gap-2 text-xs">
          {cat.map((c) =>
            categories
              .filter((cat) => cat.id === c)
              .map((el) => (
                <p key={el.id} className={el.style}>
                  {el.name}
                </p>
              )),
          )}
        </div>
        <div className="text-xs text-dark-gray flex gap-4">
          <div className="flex gap-1 items-center">
            <RxPeople />
            <p>
              <span className="mr-1">{member} </span>members
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <CiCalendar />
            <p>
              <span className="mr-1">{upcoming_event}</span> upcoming
            </p>
          </div>
        </div>
        <div className="flex gap-2 my-2">
          <button className="py-1 px-4 w-full text-sm bg-primary text-white rounded-lg cursor-pointer hover:opacity-80">
            Join Community
          </button>
        </div>
      </div>
    </article>
  );
};

export default CommunitiesCard;
