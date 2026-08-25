import { CiSearch } from "react-icons/ci";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useSelector } from "react-redux";

const AdminDashboardUsers = () => {
  const organizer = JSON.parse(import.meta.env.VITE_ORGANIZER);
  const registeredUsers = useSelector(
    (state) => state.registerState.registeredUser,
  );
  const totalUsers = [organizer, ...registeredUsers];

  return (
    <section className="grid gap-4">
      <div className="flex gap-2 p-2 bg-white rounded-lg items-center justify-start text-dark-gray border border-gray-300">
        <CiSearch className="text-lg" />
        <input
          className="text-xs w-full focus:outline-none"
          type="text"
          placeholder="Search users..."
        />
      </div>
      <div className="bg-white rounded-lg w-full overflow-x-scroll scrollbar-none">
        <table className="text-sm text-left w-full">
          <thead className="border-b border-gray-200">
            <tr className="text-dark-gray">
              <th className="py-3 px-4" scope="col">
                USER
              </th>
              <th className="py-3 px-4" scope="col">
                ROLE
              </th>
              <th className="py-3 px-4" scope="col">
                STATUS
              </th>
              <th className="py-3 px-4" scope="col">
                JOINED
              </th>
              <th className="py-3 px-4" scope="col"></th>
            </tr>
          </thead>
          <tbody className="text-xs text-dark-gray">
            {totalUsers?.map((user) => (
              <tr key={user?.id} className="border-b border-gray-200">
                <td className="grid gap-1 py-3 px-4">
                  <p className="text-black font-semibold">{user?.full_name}</p>
                  <p>{user?.email}</p>
                </td>
                <td className="py-3 px-4">
                  <p className="py-1 px-2 bg-gray w-fit rounded-xl">
                    {user?.role}
                  </p>
                </td>
                <td className="py-3 px-4">
                  <p className="py-1 px-2 bg-light-green text-green w-fit rounded-xl">
                    active
                  </p>
                </td>
                <td className="py-3 px-4">Mar 2025</td>
                <td className="py-3 px-4">
                  <HiOutlineDotsHorizontal className="text-lg cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminDashboardUsers;
