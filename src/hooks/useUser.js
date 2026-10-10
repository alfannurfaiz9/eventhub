import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../redux/slices/userSlice";
import useAuth from "./useAuth.js";

const useUser = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.userState.user);
  const user = useAuth();

  useEffect(() => {
    dispatch(
      getUserProfile({
        token: user?.token,
      }),
    );
  }, [dispatch, user]);

  return userProfile;
};

export default useUser;
