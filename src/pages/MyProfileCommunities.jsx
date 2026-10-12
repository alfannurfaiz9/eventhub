import CommunitiesCard from "../components/CommunitiesCard.jsx";
import useAuth from "../hooks/useAuth.js";
import useMyCommunity from "../hooks/useMyCommunity.js";

const MyProfileCommunities = () => {
  const user = useAuth();
  const community = useMyCommunity();

  return (
    <>
      <section
        className={`${community?.length ? "h-fit" : "min-h-dvh"} py-6 px-4 lg:px-38 bg-gray grid lg:grid-cols-3 gap-4`}
      >
        {community?.map((community, idx) => (
          <CommunitiesCard
            key={`${community.id}-${idx}`}
            id={community.id}
            img={`${import.meta.env.VITE_API_URL}/communities/img/${community.img_url}`}
            name={community.name}
            desc={community.description}
            cat={community.category}
            member={community.total_member}
            upcoming_event={community.upcoming_event}
          />
        ))}
      </section>
    </>
  );
};

export default MyProfileCommunities;
