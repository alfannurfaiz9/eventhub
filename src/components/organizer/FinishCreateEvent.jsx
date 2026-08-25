import { IoCheckmark } from "react-icons/io5";

const FinishCreateEvent = () => {
  return (
    <div className="fixed bg-white top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center">
      <div className="w-14 h-14 rounded-full bg-light-green flex items-center justify-center">
        <IoCheckmark className="text-green text-4xl" />
      </div>
      <p className="text-xl font-semibold">Event created</p>
      <p className="text-dark-gray text-sm">Redirecting to your dashboard...</p>
    </div>
  );
};

export default FinishCreateEvent;
