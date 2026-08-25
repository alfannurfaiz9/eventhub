import CommunitiesCard from "../components/CommunitiesCard.jsx";
import { useSelector } from "react-redux";
import useAuth from "../hooks/useAuth.js";

const MyProfileCommunities = () => {
  const user = useAuth();

  const communities = useSelector(
    (state) => state.communitiesState.communities,
  );

  const joinedCommunity = communities.filter((comm) =>
    user?.community_id?.includes(comm.id),
  );

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
          />
        ))}
      </section>
    </>
  );
};

export default MyProfileCommunities;
