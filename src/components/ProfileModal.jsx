import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineLoading3Quarters } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import useUser from "../hooks/useUser";
import { changeUserProfile } from "../redux/slices/userSlice";
import useAuth from "../hooks/useAuth";

const ProfileModal = ({ setShowModal = "" }) => {
  const dispatch = useDispatch();

  const token = useAuth();
  const user = useUser();

  const loading = useSelector((state) => state.userState.isPending);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [bio, setBio] = useState("");
  const [img, setImg] = useState("");
  const [imgUpload, setImgUpload] = useState("");

  const handleClose = () => {
    setShowModal(false);
  };

  const hanldeSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (name.length) {
      formData.append("full_name", name);
    }
    if (imgUpload) {
      formData.append("img_url", imgUpload);
    }
    if (address.length) {
      formData.append("address", address);
    }

    if (bio.length) {
      formData.append("bio", bio);
    }

    dispatch(
      changeUserProfile({
        token: token,
        data: formData,
      }),
    );
  };

  useEffect(() => {
    !loading && setShowModal(false);
  }, [loading, setShowModal]);

  return (
    <div className="fixed top-0 left-0 min-w-screen min-h-screen z-50 bg-[#000000b2] flex items-start lg:items-center justify-center">
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
            {user?.img_url || img ? (
              <img
                className="h-full w-full object-cover"
                src={
                  img
                    ? img
                    : `${import.meta.env.VITE_API_URL}/user/img/${user?.img_url}`
                }
                alt="profile-pict"
              />
            ) : (
              <div className="h-full w-full object-cover bg-purple text-white flex items-center justify-center text-lg">
                <p>{`${user?.full_name[0].toUpperCase()}${user?.full_name[1].toUpperCase()}`}</p>
              </div>
            )}
            <input
              onChange={(e) => {
                setImg(URL.createObjectURL(e.target.files[0]));
                setImgUpload(e.target.files[0]);
              }}
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
              className="p-2 border border-gray-300 rounded-lg placeholder:text-dark-gray"
              name="full_name"
              type="text"
              placeholder="Your new name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="location">Location</label>
            <input
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              className="p-2 border border-gray-300 rounded-lg placeholder:text-dark-gray"
              name="location"
              type="text"
              placeholder="Your new address"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="location">Bio</label>
            <textarea
              onChange={(e) => setBio(e.target.value)}
              value={bio}
              className="p-2 border border-gray-300 rounded-lg text-black"
              name="location"
              type="text"
              placeholder="Tell the community a little about yourself..."
            />
          </div>
        </div>
        <div className="p-4 flex gap-2 justify-end text-sm">
          <button
            type="button"
            onClick={handleClose}
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

export default ProfileModal;
