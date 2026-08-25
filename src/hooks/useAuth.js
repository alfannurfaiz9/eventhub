import { useSelector } from "react-redux";

const useAuth = () => {
  const registeredUsers = useSelector(
    (state) => state.registerState.registeredUser,
  );

  const organizerAndAdmin = [
    JSON.parse(import.meta.env.VITE_ORGANIZER),
    JSON.parse(import.meta.env.VITE_ADMIN),
  ];

  const combinedUser = registeredUsers
    ? [...organizerAndAdmin, ...registeredUsers]
    : [...organizerAndAdmin];

  const logedInUser = useSelector((state) => state.authState.user);

  const user = combinedUser.find((u) => u.id === logedInUser);

  return user;
};

export default useAuth;
