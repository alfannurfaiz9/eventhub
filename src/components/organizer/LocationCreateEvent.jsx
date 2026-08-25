import moment from "moment";
import { useState } from "react";

const LocationCreateEvent = ({ setNewEvent, setStep }) => {
  const [loc, setLoc] = useState("Offline");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setNewEvent((prev) => {
      return {
        ...prev,
        date: moment(e.target.date.value).format("MMMM DD,YYYY"),
        time: e.target.start.value,
        start_time: e.target.start.value,
        end_time: e.target.end.value,
        location: loc === "Online" ? "Online Event" : address,
        capacity: Number(e.target.capacity.value),
      };
    });

    setStep((step) => step + 1);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="py-4 px-6 lg:px-58 bg-gray grid gap-6 text-dark-gray"
    >
      <div>
        <p className="text-xl font-bold text-black">
          Date, Location & Capacity
        </p>
        <p className="text-xs">When and where is your event?</p>
      </div>
      <div className="grid gap-2">
        <label htmlFor="date" className="text-sm text-black/70 font-semibold">
          Event Date
        </label>
        <input
          className="p-2 bg-white rounded-lg text-xs border border-gray-300"
          type="date"
          name="date"
          required
        />
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="grid gap-2">
          <label
            htmlFor="start"
            className="text-sm text-black/70 font-semibold"
          >
            Start Time
          </label>
          <input
            className="p-2 bg-white rounded-lg text-xs border border-gray-300"
            type="time"
            name="start"
            required
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="end" className="text-sm text-black/70 font-semibold">
            End Time
          </label>
          <input
            className="p-2 bg-white rounded-lg text-xs border border-gray-300"
            type="time"
            name="end"
            required
          />
        </div>
      </div>
      <div className="flex gap-2 p-1 bg-gray-200/40 w-fit text-xs rounded-lg">
        <button
          type="button"
          onClick={() => setLoc("Offline")}
          className={
            loc === "Offline"
              ? "bg-white py-2 px-4 rounded-lg shadow-lg cursor-pointer text-black/80 font-semibold"
              : "py-2 px-4 rounded-lg cursor-pointer font-semibold"
          }
        >
          📍 In person
        </button>
        <button
          type="button"
          onClick={() => setLoc("Online")}
          className={
            loc === "Online"
              ? "bg-white py-2 px-4 rounded-lg shadow-lg cursor-pointer text-black/80 font-semibold"
              : "py-2 px-4 rounded-lg cursor-pointer font-semibold"
          }
        >
          💻 Online
        </button>
      </div>
      <div className="grid gap-2">
        <label
          htmlFor="location"
          className="text-sm text-black/70 font-semibold"
        >
          Location
        </label>
        <input
          onChange={(e) => setAddress(e.target.value)}
          className="p-2 bg-white rounded-lg text-xs border border-gray-300 placeholder:text-black/80 disabled:placeholder:text-dark-gray"
          type="text"
          name="location"
          placeholder={loc === "Offline" ? "Legenda wisata" : "Online"}
          required
          disabled={loc === "Online"}
          value={loc === "Online" ? loc : address}
        />
      </div>
      <div className="grid gap-2">
        <label
          htmlFor="location"
          className="text-sm text-black/70 font-semibold"
        >
          Capacity
        </label>
        <input
          className="p-2 bg-white rounded-lg text-xs border border-gray-300 placeholder:text-black/80"
          type="number"
          name="capacity"
          placeholder="400"
          required
        />
      </div>
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
          className="py-2 px-4 rounded-lg bg-primary text-white hover:opacity-80 cursor-pointer"
        >
          Continue →
        </button>
      </div>
    </form>
  );
};

export default LocationCreateEvent;
