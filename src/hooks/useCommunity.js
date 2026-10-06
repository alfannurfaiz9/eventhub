import { useEffect, useState } from "react";

const useCommunity = () => {
  const [communities, setCommunities] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetch("http://localhost:9000/communities");
        const res = await data.json();

        setCommunities(res.Data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return communities;
};

export default useCommunity;
