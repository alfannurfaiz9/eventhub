import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineLoading3Quarters } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { updateProfileThunk } from "../redux/slices/registerSlice";
import useAuth from "../hooks/useAuth";

const ProfileModal = ({ setShowModal = "" }) => {
  const dispatch = useDispatch();

  const user = useAuth();

  const loading = useSelector((state) => state.registerState.isPending);

  const [name, setName] = useState(user?.full_name);
  const [address, setAddress] = useState(user?.address || "Bogor");
  const [bio, setBio] = useState(user?.bio || "Hello this is my bio");
  const [img, setImg] = useState("");

  const handleClose = () => {
    setShowModal(false);
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();

    dispatch(
      updateProfileThunk({
        img,
        userId: user.id,
        full_name: name,
        address,
        bio,
      }),
    );
  };

  useEffect(() => {
    !loading && setShowModal(false);
  }, [loading, setShowModal]);

  return (
    <div className="fixed top-0 left-0 min-w-screen min-h-screen z-10 bg-[#000000b2] flex items-start lg:items-center justify-center">
      <form
        onSubmit={hanldeSubmit}
        className="w-80 mt-40 lg:mt-0 lg:w-96 mx-auto bg-white rounded-xl shadow-lg grid gap-4"
      >
        <div className="p-4 flex justify-between border-b border-b-gray-300">
          <p className="font-semibold">Edit Profile</p>
          <AiOutlineClose
            onClick={handleClose}
            className="text-dark-gray cursor-pointer hover:opacity-60"
          />
        </div>
        <div className="py-2 px-4 flex flex-col gap-2 text-sm">
          <label
            className="h-16 w-16 rounded-full overflow-hidden"
            htmlFor="image"
          >
            <img
              className="h-full w-full object-cover"
              src={img ? img : user?.img}
              alt="profile-pict"
            />
            <input
              onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))}
              className="hidden"
              type="file"
              name="image"
              id="image"
            />
          </label>
          <div className="flex flex-col gap-1">
            <label htmlFor="full_name">Full Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="p-2 border border-gray-300 rounded-lg placeholder:text-black"
              name="full_name"
              type="text"
              placeholder={user?.full_name}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="location">Location</label>
            <input
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              className="p-2 border border-gray-300 rounded-lg placeholder:text-black"
              name="location"
              type="text"
              placeholder={user?.address || "Unknown address"}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="location">Bio</label>
            <textarea
              onChange={(e) => setBio(e.target.value)}
              value={bio}
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
            type="submit"
            className="py-2 px-4 rounded-lg text-white bg-primary cursor-pointer hover:opacity-80"
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

export default ProfileModal;
