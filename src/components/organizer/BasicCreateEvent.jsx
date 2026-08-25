import { IoCloudUploadOutline } from "react-icons/io5";
import { categories } from "../../utils/datas.js";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const BasicCreateEvent = ({ setNewEvent, setStep }) => {
  const [categoryId, setCategoryId] = useState("");
  const [communityId, setCommunityId] = useState("");
  const [img, setImg] = useState("");

  const events = useSelector((state) => state.eventsState.events);
  const communities = useSelector(
    (state) => state.communitiesState.communities,
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    setNewEvent({
      id: events.length + 1,
      community_id: Number(communityId),
      category_id: Number(categoryId),
      title: e.target.title.value,
      desc: e.target.desc.value,
      sub_desc: "",
      img,
      date: "",
      time: "",
      location: "",
      attendees: 0,
      capacity: 60,
      speakers: null,
    });

    setStep((step) => step + 1);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="py-4 px-6 lg:px-58 bg-gray grid gap-6 text-dark-gray"
    >
      <div>
        <p className="text-xl font-bold text-black">Basic Information</p>
        <p className="text-xs">Tell attendees what your event is about.</p>
      </div>
      <div className="grid gap-2">
        <p className="text-sm text-black/70 font-semibold">Cover Image</p>
        <label
          className="py-8 cursor-pointer flex flex-col gap-2 rounded-lg items-center justify-center border-2 border-dotted border-gray-300"
          htmlFor="image"
        >
          <IoCloudUploadOutline className="text-4xl" />
          <p className="text-xs">Click to upload or drag and drop</p>
          <p className="text-xs">PNG, JPG up to 10MB · 16:9 recommended</p>
          <input
            onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))}
            className="opacity-0 text-xs inline-block text-center"
            type="file"
            name="image"
            id="image"
          />
        </label>
        <div className={`${img ? "block" : "hidden"} h-60`}>
          <img
            className="w-full h-full object-cover"
            src={img}
            alt="preview-poster"
          />
        </div>
      </div>
      <div className="grid gap-2">
        <label htmlFor="title" className="text-sm text-black/70 font-semibold">
          Event Title
        </label>
        <input
          className="p-2 bg-white rounded-lg text-xs border border-gray-300 text-black"
          type="text"
          name="title"
          placeholder="Go Concurrency Workshop"
          required
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="desc" className="text-sm text-black/70 font-semibold">
          Description
        </label>
        <textarea
          className="p-2 bg-white rounded-lg text-xs border border-gray-300 text-black"
          rows={5}
          type="text"
          name="desc"
          placeholder="What will attendees learn or experience?"
          required
        />
      </div>
      <div className="grid gap-2">
        <label
          htmlFor="category"
          className="text-sm text-black/70 font-semibold"
        >
          Category
        </label>
        <select
          onChange={(e) => setCategoryId(e.target.value)}
          className="p-2 bg-white rounded-lg text-xs text-black border border-gray-300"
          name="category"
          defaultValue="Select a category"
        >
          <option disabled value="Select a category">
            Select a Category
          </option>
          {categories?.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid gap-2">
        <label
          htmlFor="community"
          className="text-sm text-black/70 font-semibold"
        >
          Community (optional)
        </label>
        <select
          onChange={(e) => setCommunityId(e.target.value)}
          defaultValue="no community"
          className="p-2 bg-white rounded-lg text-xs text-black border border-gray-300"
          name="community"
        >
          <option disabled value="no community">
            No Community
          </option>
          {communities?.map((comm) => (
            <option key={comm.id} value={comm.id}>
              {comm.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center justify-between text-xs">
        <Link
          to="/dashboard"
          className="py-2 px-4 rounded-lg text-black/80 hover:opacity-80 cursor-pointer border border-gray-300"
        >
          Cancel
        </Link>
        <button
          type="submit"
          className="py-2 px-4 rounded-lg bg-primary text-white hover:opacity-80 cursor-pointer"
        >
          Continue →
        </button>
      </div>
    </form>
  );
};

export default BasicCreateEvent;
