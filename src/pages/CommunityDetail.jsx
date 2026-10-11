import { useParams } from "react-router";

import EventsCard from "../components/EventsCard.jsx";

import { useEffect, useState } from "react";
import Modal from "../components/Modal.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getCommunityEventsThunk } from "../redux/slices/communitiesSlice.js";
import moment from "moment/moment.js";

const CommunityDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const events = useSelector((state) => state.communitiesState.events);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(getCommunityEventsThunk({ id }));
  }, [dispatch, id]);

  return (
    <>
      <div className={showModal ? "block" : "hidden"}>
        <Modal setShowModal={setShowModal} />
      </div>
      <p className="font-semibold text-sm text-dark-gray">UPCOMING</p>
      <div className="grid lg:grid-cols-3 gap-4">
        {events?.map((event, idx) => (
          <EventsCard
            key={`${event?.id}-${idx}`}
            id={event.id}
            img={`${import.meta.env.VITE_API_URL}/events/img/${event.img_url}`}
            cat={event.category.split(",")}
            title={event.title}
            date={moment(event.start_at).add(1, "year").format("LL")}
            time={
              moment(event.start_at).add(1, "day").format("LLL").split(" ")[3]
            }
            location={event.location}
            attendees={event.total_attendee}
            capacity={event.capacity}
            setShowModal={setShowModal}
          />
        ))}
      </div>
    </>
  );
};

export default CommunityDetail;
