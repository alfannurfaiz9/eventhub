import { useEffect, useState } from "react";

const useTestimonies = () => {
  const [testimonies, setTestimonies] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/testimonies`);

        if (!response.ok) {
          throw new Error("failed fetching testimonies");
        }

        const data = await response.json();
        setTestimonies(data.Data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return testimonies;
};

export default useTestimonies;
