import { BsFilterRight } from "react-icons/bs";

import Navbar from "../components/Navbar";
import EventsCard from "../components/EventsCard";
import EventsModal from "../components/EventsModal.jsx";

import { categories, communities, events } from "../utils/datas.js";
import { getAllLocations, getCategories } from "../utils/getDatas.js";
import { Link, useSearchParams } from "react-router";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Movies = () => {
  const [activeLink, setActiveLink] = useState({ category: "", location: "" });
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState(false);
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  const location = searchParams.get("location") || "";

  const filteredEvents = () => {
    return events.filter((event) => {
      if (!search && !category) {
        return event;
      }

      const searchFilter = event.title.toLowerCase().includes(search);

      if (!category) {
        return searchFilter;
      }

      const catId = categories.filter(
        (cat) => cat.name.toLowerCase() === category,
      )[0].id;

      const comms = communities.filter(
        (com) => com.id === event.community_id,
      )[0];

      const categoryFilter = comms.categories.includes(catId);

      return searchFilter && categoryFilter;
    });
  };

  return (
    <>
      <Navbar />
      {/* <EventsModal /> */}
      <section>
        <div className="py-3 px-6 flex gap-4 border-b border-gray">
          <div className="p-2 flex gap-2 bg-gray rounded-lg w-full">
            <CiSearch className="text-lg m-auto text-dark-gray" />
            <input
              value={search}
              onChange={(e) => {
                const newParams = new URLSearchParams(searchParams);

                if (e.target.value) {
                  newParams.set("search", e.target.value);
                } else {
                  newParams.delete("search");
                }

                setSearchParams(newParams);
              }}
              className="w-full focus:outline-none"
              type="text"
              name="search-events"
              id="search-events"
              placeholder="Search events..."
            />
          </div>
          <button
            onClick={() => {
              setActiveFilter(!activeFilter);
            }}
            className={`w-fit flex items-center gap-2 py-2 px-4 border border-gray rounded-lg cursor-pointer ${activeFilter && "text-primary border-primary"}`}
          >
            <BsFilterRight className="text-xl" />
            <span className="text-sm hidden lg:block">Filters</span>
          </button>
        </div>
        <div
          className={`${!activeFilter && "hidden"} py-3 px-6 text-sm grid gap-2 border-b border-gray text-dark-gray`}
        >
          <p className="font-semibold">CATEGORY</p>
          <div className="flex flex-wrap gap-2 text-sm">
            <button
              onClick={() => {
                const newParams = new URLSearchParams(searchParams);

                newParams.delete("category");
                setSearchParams(newParams);

                setActiveLink((prev) => {
                  return {
                    ...prev,
                    category: "",
                  };
                });
              }}
              className={`hover:opacity-70 cursor-pointer py-1 px-2  rounded-md border border-gray-300 ${activeLink.category ? "bg-white text-dark-gray" : "bg-primary text-white"}`}
            >
              All
            </button>
            {categories.map((cat, idx) => (
              <button
                onClick={() => {
                  const newParams = new URLSearchParams(searchParams);

                  if (category === cat.name.toLowerCase()) {
                    newParams.delete("category");
                    
                    setActiveLink((prev) => {
                      return {
                        ...prev,
                        category: "",
                      };
                    });
                  } else {
                    newParams.set("category", cat.name.toLowerCase());

                    setActiveLink((prev) => {
                      return {
                        ...prev,
                        category: cat.name,
                      };
                    });
                  }

                  setSearchParams(newParams);
                }}
                key={`${cat.id}-${idx}`}
                className={`hover:opacity-70 cursor-pointer py-1 px-2 rounded-md border border-gray-300 ${activeLink.category === cat.name && "bg-primary text-white"}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
        <div className={`${!activeFilter && "hidden"} grid lg:grid-cols-2`}>
          <div className="py-3 px-6 text-sm grid gap-2 border-b border-gray text-dark-gray">
            <p className="font-semibold">LOCATION</p>
            <div className="flex flex-wrap gap-2 text-sm">
              <button
                onClick={() => {
                  const newParams = new URLSearchParams(searchParams);

                  newParams.delete("location");
                  setSearchParams(newParams);

                  setActiveLink((prev) => {
                    return {
                      ...prev,
                      location: "",
                    };
                  });
                }}
                className={`cursor-pointer hover:opacity-70 py-1 px-2 ${!activeLink.location ? "bg-primary text-white" : "bg-white text-dark-gray"} rounded-md border border-gray-300`}
              >
                All locations
              </button>
              {getAllLocations().map((loc) => (
                <button
                  onClick={() => {
                    const newParams = new URLSearchParams(searchParams);

                    newParams.set("location", loc.toLowerCase());

                    setActiveLink((prev) => {
                      return {
                        ...prev,
                        location: loc.toLowerCase(),
                      };
                    });

                    if (location === loc.toLowerCase()) {
                      newParams.delete("location");
                      setActiveLink((prev) => {
                        return {
                          ...prev,
                          location: "",
                        };
                      });
                    }

                    setSearchParams(newParams);
                  }}
                  className={`${activeLink.location === loc.toLowerCase() && "bg-primary text-white"} cursor-pointer hover:opacity-70 py-1 px-2 rounded-md border border-gray-300`}
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>
          <div className="py-3 px-6 text-sm grid gap-2 border-b border-gray text-dark-gray">
            <p className="font-semibold">SORT BY</p>
            <div className="flex flex-wrap gap-2 text-sm">
              <button className="cursor-pointer hover:opacity-70 py-1 px-2 bg-primary text-white rounded-md border border-gray-300">
                Upcoming
              </button>
              {["Most popular", "Almost full", "Recently added"].map(
                (status) => (
                  <button className="cursor-pointer hover:opacity-70 py-1 px-2 rounded-md border border-gray-300">
                    {status}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
        <div className="py-6 px-6 lg:px-12 bg-med-gray">
          <p className="text-sm text-dark-gray">
            <span className="font-bold text-black mr-2">
              {filteredEvents().length}
            </span>
            events found
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 my-6 gap-4">
            {filteredEvents().map((event) => (
              <Link to={`/events/${event.id}`} key={event.id}>
                <EventsCard
                  img={event.img}
                  cat={getCategories(event)}
                  title={event.title}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  attendees={event.attendees}
                  capacity={event.capacity}
                />
              </Link>
            ))}
          </div>
          <div className="w-fit mx-auto">
            <button className="py-2 px-4 font-medium text-black rounded-xl border border-gray-300 cursor-pointer hover:opacity-60">
              Load more events
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Movies;
