import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import BasicCreateEvent from "../../components/organizer/BasicCreateEvent.jsx";
import LocationCreateEvent from "../../components/organizer/LocationCreateEvent.jsx";
import SpeakersCreateEvent from "../../components/organizer/SpeakersCreateEvent.jsx";
import FinishCreateEvent from "../../components/organizer/FinishCreateEvent.jsx";

const CreateEvent = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [finish, setFinish] = useState(false);

  const [newEvent, setNewEvent] = useState(null);

  useEffect(() => {
    (() => {
      setTimeout(() => {
        finish && navigate("/dashboard");
      }, 3000);
    })();
  }, [finish, navigate]);

  return (
    <>
      <section className="flex items-center justify-between bg-white py-4 px-6 lg:px-58 border-b border-b-gray shadow-xs">
        <div>
          <Link
            to="/events"
            className="w-fit flex items-center gap-2 text-dark-gray text-sm cursor-pointer hover:opacity-60 hover:underline"
          >
            <FaArrowLeft />
            <p>
              Back <span className="font-bold text-black">Create Event</span>
            </p>
          </Link>
        </div>
        <div className="flex gap-2 text-xs items-center">
          {[1, 2, 3].map((n) => (
            <div key={n} className="flex items-center gap-2">
              <div
                className={`${n <= step && "bg-primary text-white"} h-6 w-6 rounded-full flex items-center justify-center bg-gray text-dark-gray`}
              >
                <p>{n >= step ? n : "✓"}</p>
              </div>
              {n < 3 && (
                <div
                  className={`${n < step && "bg-primary"} w-6 h-0.5 bg-gray-300 rounded-full`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </section>
      {step === 1 && (
        <BasicCreateEvent setNewEvent={setNewEvent} setStep={setStep} />
      )}
      {step === 2 && (
        <LocationCreateEvent
          newEvent={newEvent}
          setNewEvent={setNewEvent}
          setStep={setStep}
        />
      )}
      {step === 3 && (
        <SpeakersCreateEvent
          newEvent={newEvent}
          setNewEvent={setNewEvent}
          setFinish={setFinish}
          setStep={setStep}
        />
      )}
      {finish && <FinishCreateEvent />}
    </>
  );
};

export default CreateEvent;
