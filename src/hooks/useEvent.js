import { useEffect, useState } from "react";

const useEvent = () => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetch("http://localhost:9000/events");
        const res = await data.json();

        setEvents(res.Data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return events;
};

export default useEvent;
