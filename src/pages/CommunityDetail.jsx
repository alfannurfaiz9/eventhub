import { useParams } from "react-router";

import EventsCard from "../components/EventsCard.jsx";

import { getCategories } from "../utils/getDatas.js";
import { useSelector } from "react-redux";
import { useState } from "react";
import Modal from "../components/Modal.jsx";

const CommunityDetail = () => {
  const { id } = useParams();

  const events = useSelector((state) => state.eventsState.events);
  const getEvent = events.filter((e) => e.community_id === Number(id));

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={showModal ? "block" : "hidden"}>
        <Modal setShowModal={setShowModal} />
      </div>
      <p className="font-semibold text-sm text-dark-gray">UPCOMING</p>
      <div className="grid lg:grid-cols-3 gap-4">
        {getEvent?.map((event, idx) => (
          <EventsCard
            key={`${event?.id}-${idx}`}
            id={event?.id}
            img={event?.img}
            cat={getCategories(event)}
            title={event?.title}
            date={event?.date}
            time={event?.time}
            location={event?.location}
            attendees={event?.attendees}
            capacity={event?.capacity}
            setShowModal={setShowModal}
          />
        ))}
      </div>
    </>
  );
};

export default CommunityDetail;
