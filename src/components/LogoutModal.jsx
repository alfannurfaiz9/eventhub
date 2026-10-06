import { AiOutlineClose, AiOutlineLoading3Quarters } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../redux/slices/authSlice";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

const LogoutModal = ({ setShowModal = "" }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authState = useSelector((state) => state.authState);
  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleLogout = async () => {
    try {
      await dispatch(logoutThunk()).unwrap();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (() => {
      if (authState.isPending) {
        setLoading(true);
      } else {
        setLoading(false);
      }
    })();
  }, [authState]);

  return (
    <div className="fixed top-0 left-0 min-w-screen min-h-screen z-10 bg-[#000000b2] flex items-start lg:items-center justify-center">
      <div className="w-80 mt-40 lg:mt-0 lg:w-96 mx-auto bg-white rounded-xl shadow-lg grid gap-4">
        <div className="p-4 flex text-center justify-between border-b border-b-gray-300">
          <p className="font-semibold">Logout confirmation</p>
          <AiOutlineClose
            onClick={handleClose}
            className="text-dark-gray cursor-pointer hover:opacity-60"
          />
        </div>
        <div className="p-4 grid gap-4">
          <p className="text-dark-gray text-sm">
            Are you sure you want to logout?
          </p>
        </div>
        <div className="p-4 flex gap-2 justify-end text-sm">
          <button
            onClick={handleLogout}
            type="button"
            className="min-w-22 flex items-center justify-center py-2 px-4 rounded-lg text-white bg-red cursor-pointer hover:opacity-80"
          >
            <AiOutlineLoading3Quarters
              className={`${loading ? "block" : "hidden"} text-xl animate-spin`}
            />
            {loading ? "" : "Confirm"}
          </button>
          <button
            onClick={handleClose}
            type="button"
            className="py-2 px-4 rounded-lg text-black bg-gray cursor-pointer hover:opacity-80"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
