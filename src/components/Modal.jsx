import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router";

const Modal = ({ setShowModal = "" }) => {
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div className="fixed top-0 left-0 min-w-screen min-h-screen z-10 bg-[#000000b2] flex items-start lg:items-center justify-center">
      <div className="w-80 mt-40 lg:mt-0 lg:w-96 mx-auto bg-white rounded-xl shadow-lg grid gap-4">
        <div className="p-4 flex justify-between border-b border-b-gray-300">
          <p className="font-semibold">Sign in to continue</p>
          <AiOutlineClose
            onClick={handleClose}
            className="text-dark-gray cursor-pointer hover:opacity-60"
          />
        </div>
        <div className="p-4 grid gap-4">
          <div className="text-center p-3 bg-orange-100 w-fit m-auto rounded-2xl">
            <p className="text-4xl">🎟️</p>
          </div>
          <p className="text-dark-gray text-xs">
            Create a free account to register for events, save favourites, join
            communities, and get personalised recommendations.
          </p>
        </div>
        <div className="p-4 flex gap-2 justify-end text-sm">
          <button
            onClick={handleClose}
            className="py-2 px-4 rounded-lg text-black bg-gray cursor-pointer hover:opacity-80"
          >
            Keep browsing
          </button>
          <Link
            to="/login"
            className="py-2 px-4 rounded-lg text-white bg-primary cursor-pointer hover:opacity-80"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
