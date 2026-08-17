import CommunitiesCard from "../components/CommunitiesCard.jsx";
import Modal from "../components/Modal.jsx";

import { categories } from "../utils/datas.js";
import { communities } from "../utils/datas.js";
import { useSearchParams } from "react-router";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { getJoinedCommunity, getUser } from "../utils/getDatas.js";

const Communities = () => {
  const [joinedCommunity, setJoinedEvent] = useState(null);
  const [activeLink, setActiveLink] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterParams, setFilterParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  const status = filterParams.get("status") || "";

  const [showModal, setShowModal] = useState(false);

  const filteredCategory = () => {
    const user = getUser();

    return communities.filter((community) => {
      const searchFilter = search.length
        ? community.name.toLowerCase().includes(search)
        : community;

      const catId = categories.filter(
        (cat) => cat.name.toLowerCase() === category,
      )[0]?.id;

      const categoryFilter = category.length
        ? community.categories.includes(catId)
        : community;

      const joinedEvent = user?.community_id?.includes(community.id);

      const notJoinedEvent = !user?.community_id?.includes(community.id);

      let statusFilter;

      if (status === "joined") {
        statusFilter = joinedEvent;
      } else if (status === "not-joined") {
        statusFilter = notJoinedEvent;
      } else {
        statusFilter = community;
      }

      return searchFilter && categoryFilter && statusFilter;
    });
  };

  const handleUserFilter = (e) => {
    const newParams = new URLSearchParams(filterParams);

    if (e === "all") {
      newParams.delete("status");
    }

    if (e === "joined") {
      newParams.set("status", "joined");
    } else if (e === "not-joined") {
      newParams.set("status", "not-joined");
    }

    if (status === e) {
      newParams.delete("status");
    }

    setFilterParams(newParams);
  };

  const renderCommunity = () => {
    const event = communities.filter((event) => {
      return getJoinedCommunity(event.id);
    });

    setJoinedEvent(event);
  };

  return (
    <>
      <div className={showModal ? "block" : "hidden"}>
        <Modal setShowModal={setShowModal} />
      </div>
      <section className="grid gap-2 justify-center text-center bg-black text-white px-4 py-10">
        <h2 className="font-bold text-4xl">Explore Communities</h2>
        <p className="text-xs text-dark-gray">
          Join communities that match your interests and get personalized event
          recommendations.
        </p>
        <div className="flex mt-4 p-2 gap-2 bg-white rounded-lg">
          <CiSearch className="text-lg m-auto text-dark-gray" />
          <input
            onChange={(e) => {
              const newParams = new URLSearchParams(searchParams);

              if (e.target.value) {
                newParams.set("search", e.target.value);
              } else {
                newParams.delete("search");
              }

              setSearchParams(newParams);
            }}
            value={search}
            className="text-black w-full focus:outline-none"
            type="text"
            name="search-communitites"
            id="search-communitites"
            placeholder="Search communities..."
          />
        </div>
      </section>
      <section className="py-6 px-4 lg:px-14">
        <div className="flex gap-4 flex-col items-start lg:flex-row lg:items-center pb-4">
          <div className="p-1 border border-gray-300 w-fit rounded-lg flex gap-2">
            <button
              onClick={() => handleUserFilter("all")}
              className="py-2 px-3 lg:py-1 lg:px-2 text-xs bg-primary text-white rounded-lg cursor-pointer hover:opacity-90"
            >
              All
            </button>
            <button
              onClick={() => handleUserFilter("joined")}
              className="py-2 px-3 lg:py-1 lg:px-2 text-xs text-dark-gray rounded-lg cursor-pointer hover:opacity-80"
            >
              Joined
            </button>
            <button
              onClick={() => handleUserFilter("not-joined")}
              className="py-2 px-3 lg:py-1 lg:px-2 text-xs text-dark-gray rounded-lg cursor-pointer hover:opacity-80"
            >
              Not Joined
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => {
                const newParams = new URLSearchParams(searchParams);

                newParams.delete("category");
                setSearchParams(newParams);
                setActiveLink("");
              }}
              className={`${activeLink ? "text-dark-gray border border-gray-300" : "bg-primary text-white"} py-1 lg:py-2 px-3 lg:px-4 text-xs rounded-lg cursor-pointer hover:opacity-90`}
            >
              All Categories
            </button>
            {categories.map((cat, idx) => (
              <button
                onClick={() => {
                  const newParams = new URLSearchParams(searchParams);

                  if (category === cat.name.toLowerCase()) {
                    newParams.delete("category");
                    setActiveLink("");
                  } else {
                    newParams.set("category", cat.name.toLowerCase());
                    setActiveLink(cat.name);
                  }

                  setSearchParams(newParams);
                }}
                key={`${cat.id}-${idx}`}
                className={`${activeLink === cat.name && "bg-primary text-white"} py-1 lg:py-2 px-3 lg:px-4 text-xs text-dark-gray rounded-lg cursor-pointer border border-gray-300 hover:opacity-80`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
        <div className="py-6 bg-med-gray">
          <p className="text-sm text-dark-gray">
            <span className="font-bold text-black mr-2">
              {filteredCategory().length}
            </span>
            communites found
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-4 my-6 gap-4">
            {filteredCategory().map((community, idx) => (
              <CommunitiesCard
                key={`c-${community.id}-${idx}`}
                id={community.id}
                img={community.img}
                name={community.name}
                desc={community.desc}
                cat={community.categories}
                member={community.member}
                upcoming_event={community.upcoming_event}
                setShowModal={setShowModal}
                renderCommunity={renderCommunity}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Communities;
