import { useParams } from "react-router";

import EventsCard from "../components/EventsCard.jsx";

import { communities } from "../utils/datas.js";
import { getCategories, getEvent } from "../utils/getDatas.js";
import { useEffect, useState } from "react";

const CommunityDetail = () => {
  const { id } = useParams();

  const [community, setCommunity] = useState(null);

  useEffect(() => {
    (() => {
      const filteredCommunities = communities.filter(
        (c) => c.id.toString() === id,
      )[0];
      setCommunity(filteredCommunities);
    })();
  }, [id]);

  return (
    <>
      <p className="font-semibold text-sm text-dark-gray">UPCOMING</p>
      <div className="grid lg:grid-cols-3">
        {getEvent(community).map((event, idx) => (
          <EventsCard
            key={`${event?.id}-${idx}`}
            id={event?.id}
            img={event?.img}
            cat={getCategories(event)}
            title={event?.title}
            date={event?.date}
            time={event?.time}
            location={event?.location}
            attendees={event?.attendees}
            capacity={event?.capacity}
          />
        ))}
      </div>
    </>
  );
};

export default CommunityDetail;
