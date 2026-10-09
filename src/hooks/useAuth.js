import { useSelector } from "react-redux";

const useAuth = () => {
  const user = useSelector((state) => state.authState.user);

  return user;
};

export default useAuth;
