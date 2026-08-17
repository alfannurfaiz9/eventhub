import { AiOutlineClose } from "react-icons/ai";

import { getUser } from "../utils/getDatas.js";

const ProfileModal = ({ setShowModal = "" }) => {
  const user = getUser();

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="fixed top-0 left-0 min-w-screen min-h-screen z-10 bg-[#000000b2] flex items-start lg:items-center justify-center">
      <div className="w-80 mt-40 lg:mt-0 lg:w-96 mx-auto bg-white rounded-xl shadow-lg grid gap-4">
        <div className="p-4 flex justify-between border-b border-b-gray-300">
          <p className="font-semibold">Edit Profile</p>
          <AiOutlineClose
            onClick={handleClose}
            className="text-dark-gray cursor-pointer hover:opacity-60"
          />
        </div>
        <div className="py-2 px-4 flex flex-col gap-2 text-sm">
          <div className="w-16 h-16">
            <img src={user?.img} alt="profile-pict" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="full_name">Full Name</label>
            <input
              className="p-2 border border-gray-300 rounded-lg placeholder:text-black"
              name="full_name"
              type="text"
              placeholder={user?.full_name}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="location">Location</label>
            <input
              className="p-2 border border-gray-300 rounded-lg placeholder:text-black"
              name="location"
              type="text"
              placeholder={user?.location || "Bandung, Indonesia"}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="location">Bio</label>
            <textarea
              className="p-2 border border-gray-300 rounded-lg"
              name="location"
              type="text"
              placeholder="Tell the community a little about yourself..."
            />
          </div>
        </div>
        <div className="p-4 flex gap-2 justify-end text-sm">
          <button
            onClick={handleClose}
            className="py-2 px-4 rounded-lg text-black bg-gray cursor-pointer hover:opacity-80"
          >
            Cancel
          </button>
          <button
            onClick={handleClose}
            className="py-2 px-4 rounded-lg text-white bg-primary cursor-pointer hover:opacity-80"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
