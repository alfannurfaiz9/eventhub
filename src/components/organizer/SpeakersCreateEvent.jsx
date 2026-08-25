import { useState } from "react";
import { categories } from "../../utils/datas";
import { useDispatch } from "react-redux";
import { addEventsThunk } from "../../redux/slices/eventsSlice.js";

const SpeakersCreateEvent = ({ newEvent, setStep, setFinish }) => {
  const dispatch = useDispatch();

  const [newSpeakers, setNewSpeakers] = useState([]);
  const [speakers, setSpeakers] = useState([]);

  const getCategories = categories.find(
    (cat) => cat.id === newEvent.category_id,
  );

  const handleAdd = () => {
    setSpeakers((prev) => {
      return [...prev, newSpeakers];
    });

    setNewSpeakers("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addEventsThunk({ ...newEvent, speakers }));

    setFinish(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="py-4 px-6 lg:px-58 bg-gray grid gap-6 text-dark-gray"
    >
      <div>
        <p className="text-xl font-bold text-black">Speakers & Review</p>
        <p className="text-xs">Add speakers and confirm your event details.</p>
      </div>
      <div className="grid gap-2">
        <div className="flex items-end gap-2">
          <div className="w-full">
            <label
              htmlFor="speakers"
              className="text-sm text-black/70 font-semibold"
            >
              Speakers (optional)
            </label>
            <input
              onChange={(e) => setNewSpeakers(e.target.value)}
              value={newSpeakers}
              className="p-2 w-full bg-white rounded-lg text-xs border border-gray-300"
              type="text"
              name="speakers"
              placeholder="Marianus"
            />
          </div>
          <button
            onClick={handleAdd}
            type="button"
            className="hover:opacity-70 text-black/80 cursor-pointer h-fit py-2 px-4 border border-gray-300 rounded-lg text-xs"
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {speakers?.map((s, idx) => (
            <div
              key={idx}
              className="flex gap-2 text-xs py-1 px-2 rounded-full bg-gray-200 w-fit text-black"
            >
              <p>{s}</p>
              <button
                onClick={() =>
                  setSpeakers((prev) => {
                    return prev.filter((p) => p !== s);
                  })
                }
                type="button"
                className="cursor-pointer text-dark-gray hover:text-red"
              >
                x
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-lg border border-gray-300 overflow-hidden">
        <div className="flex items-center justify-between text-xs border-b border-gray-200 p-2">
          <p>Title</p>
          <p className="text-black">{newEvent.title}</p>
        </div>
        <div className="flex items-center justify-between text-xs border-b border-gray-200 p-2">
          <p>Category</p>
          <p className="py-1 px-2 bg-gray text-dark-gray rounded-full text-[6px]">
            {getCategories?.name}
          </p>
        </div>
        <div className="flex items-center justify-between text-xs border-b border-gray-200 p-2">
          <p>Date</p>
          <p className="text-black">{newEvent.date}</p>
        </div>
        <div className="flex items-center justify-between text-xs border-b border-gray-200 p-2">
          <p>Time</p>
          <p className="text-black">
            {newEvent.start_time} – {newEvent.end_time} WIB
          </p>
        </div>
        <div className="flex items-center justify-between text-xs border-b border-gray-200 p-2">
          <p>Format</p>
          <p className="text-black">{newEvent.location}</p>
        </div>
        <div className="flex items-center justify-between text-xs border-b border-gray-200 p-2">
          <p>Capacity</p>
          <p className="text-black">{newEvent.capacity} attendees</p>
        </div>
        <div className="flex items-center justify-between text-xs border-b border-gray-200 p-2">
          <p>Speakers</p>
          <p className="text-black">{speakers.length} added</p>
        </div>
      </div>
      <div className="h-px w-full bg-gray-200"></div>
      <div className="flex items-center justify-between text-xs">
        <button
          onClick={() => {
            setStep((step) => step - 1);
          }}
          type="button"
          className="py-2 px-4 rounded-lg text-black/80 hover:opacity-80 cursor-pointer border border-gray-300"
        >
          Back
        </button>
        <button
          type="submit"
          className="py-2 px-4 rounded-lg bg-green text-white hover:opacity-80 cursor-pointer"
        >
          ✔ Publish Event
        </button>
      </div>
    </form>
  );
};

export default SpeakersCreateEvent;
