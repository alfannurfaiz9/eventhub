import { useSelector } from "react-redux";
import AdminCommunityCard from "./AdminCommunityCard";

const AdminDashboardCommunities = () => {
  const communities = useSelector(
    (state) => state.communitiesState.communities,
  );

  return (
    <section className="grid gap-4">
      {communities?.map((comm) => (
        <AdminCommunityCard
          key={comm.id}
          img={comm?.img}
          title={comm?.name}
          member={comm?.member}
          upcoming_event={comm?.upcoming_event}
        />
      ))}
    </section>
  );
};

export default AdminDashboardCommunities;
