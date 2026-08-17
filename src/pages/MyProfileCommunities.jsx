import { useEffect, useState } from "react";
import { communities } from "../utils/datas";
import { getJoinedCommunity } from "../utils/getDatas";

import CommunitiesCard from "../components/CommunitiesCard.jsx";

const MyProfileCommunities = () => {
  const [joinedCommunity, setJoinedCommunity] = useState(null);

  const renderEvent = () => {
    const community = communities.filter((community) => {
      return getJoinedCommunity(community.id);
    });

    setJoinedCommunity(community);
  };

  useEffect(() => {
    (() => {
      renderEvent();
    })();
  }, []);
  return (
    <>
      <section
        className={`${joinedCommunity?.length ? "h-fit" : "min-h-dvh"} py-6 px-4 lg:px-38 bg-gray grid lg:grid-cols-3 gap-4`}
      >
        {joinedCommunity?.map((community, idx) => (
          <CommunitiesCard
            key={`c-${community.id}-${idx}`}
            id={community.id}
            img={community.img}
            name={community.name}
            desc={community.desc}
            cat={community.categories}
            member={community.member}
            upcoming_event={community.upcoming_event}
            renderCommunity={renderEvent}
          />
        ))}
      </section>
    </>
  );
};

export default MyProfileCommunities;
