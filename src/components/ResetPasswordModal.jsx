import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineLoading3Quarters } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import useUser from "../hooks/useUser";
import useAuth from "../hooks/useAuth";
import { resetPassword } from "../redux/slices/userSlice";

const ResetPasswordModal = ({ setEditModal = "" }) => {
  const dispatch = useDispatch();

  const user = useUser();
  const token = useAuth();
  const loading = useSelector((state) => state.registerState.isPending);

  const [error, setError] = useState(false);

  const handleClose = () => {
    setEditModal(false);
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();

    const body = {
      current_password: e.target.current_password.value,
      new_password: e.target.new_password.value,
    };

    if (e.target.new_password.value.length < 7) {
      setError(true);
    } else {
      dispatch(
        resetPassword({
          token,
          body,
          next: () => {
            setEditModal(false);
          },
        }),
      );
    }
  };

  useEffect(() => {
    !loading && setEditModal(false);
  }, [loading, setEditModal]);

  return (
    <div className="fixed top-0 left-0 min-w-screen min-h-screen z-50 bg-[#000000b2] flex items-start lg:items-center justify-center">
      <form
        onSubmit={hanldeSubmit}
        className="w-80 mt-40 lg:mt-0 lg:w-96 mx-auto bg-white rounded-xl shadow-lg grid gap-4"
      >
        <div className="p-4 flex justify-between border-b border-b-gray-300">
          <p className="font-semibold">Reset Password</p>
          <AiOutlineClose
            onClick={handleClose}
            className="text-dark-gray cursor-pointer hover:opacity-60"
          />
        </div>
        <div className="py-2 px-4 flex flex-col gap-2 text-sm">
          <div className="h-16 w-16 rounded-full overflow-hidden">
            {user?.img_url ? (
              <img
                className="h-full w-full object-cover"
                src={`${import.meta.env.VITE_API_URL}/user/img/${user?.img_url}`}
                alt="profile-pict"
              />
            ) : (
              <div className="h-full w-full object-cover bg-purple text-white flex items-center justify-center text-lg">
                <p>{`${user?.full_name[0].toUpperCase()}${user?.full_name[1].toUpperCase()}`}</p>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="current_password">Current Password</label>
            <input
              className="p-2 border border-gray-300 rounded-lg placeholder:text-dark-gray"
              name="current_password"
              id="current_password"
              type="text"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="new_password">New Password</label>
            <input
              className="p-2 border border-gray-300 rounded-lg placeholder:text-dark-gray"
              name="new_password"
              id="new_password"
              type="password"
              placeholder="Enter your new password"
              required
              minLength={7}
            />
          </div>
          <p
            className={`${error ? "opacity-100" : "opacity-0"} text-xs text-red`}
          >
            Passwords do not match
          </p>
        </div>

        <div className="p-4 flex gap-2 justify-end text-sm">
          <button
            onClick={handleClose}
            type="button"
            className="py-2 px-4 rounded-lg text-black bg-gray cursor-pointer hover:opacity-80"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="py-2 px-4 rounded-lg text-white bg-primary cursor-pointer hover:opacity-80 w-32 flex justify-center"
          >
            <AiOutlineLoading3Quarters
              className={`${loading ? "block" : "hidden"} text-xl animate-spin`}
            />
            {loading ? "" : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordModal;
