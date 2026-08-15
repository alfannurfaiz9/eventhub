import Navbar from "../components/Navbar";
import CommunitiesCard from "../components/CommunitiesCard.jsx";

import { categories } from "../utils/datas.js";
import { communities } from "../utils/datas.js";
import { Link, useSearchParams } from "react-router";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

const Communities = () => {
  const [activeLink, setActiveLink] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const category = searchParams.get("filter") || "";

  const filteredCategory = () => {
    return communities.filter((community) => {
      if (!search && !category) {
        return community;
      }

      const searchFilter = community.name.toLowerCase().includes(search);

      if (!category) {
        return searchFilter;
      }

      const catId = categories.filter(
        (cat) => cat.name.toLowerCase() === category,
      )[0].id;

      const categoryFilter = community.categories.includes(catId);

      return searchFilter && categoryFilter;
    });
  };

  return (
    <>
      <Navbar />
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
        <div className="flex gap-4 flex-col items-start lg:flex-row lg:items-center">
          <div className="p-1 border border-gray-300 w-fit rounded-lg flex gap-2">
            <button className="py-2 px-3 lg:py-1 lg:px-2 text-xs bg-primary text-white rounded-lg cursor-pointer hover:opacity-90">
              All
            </button>
            <button className="py-2 px-3 lg:py-1 lg:px-2 text-xs text-dark-gray rounded-lg cursor-pointer hover:opacity-80">
              Joined
            </button>
            <button className="py-2 px-3 lg:py-1 lg:px-2 text-xs text-dark-gray rounded-lg cursor-pointer hover:opacity-80">
              Not Joined
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => {
                const newParams = new URLSearchParams(searchParams);

                newParams.delete("filter");
                setSearchParams(newParams);
                setActiveLink("")
              }}
              className={`${activeLink ? "text-dark-gray border border-gray-300" : "bg-primary text-white"} py-2 px-4 text-xs rounded-lg cursor-pointer hover:opacity-90`}
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button
                onClick={() => {
                  const newParams = new URLSearchParams(searchParams);

                  if (category === cat.name.toLowerCase()) {
                    newParams.delete("filter");
                    setActiveLink("");
                  } else {
                    newParams.set("filter", cat.name.toLowerCase());
                    setActiveLink(cat.name);
                  }

                  setSearchParams(newParams);
                }}
                key={cat.id}
                className={`${activeLink === cat.name && "bg-primary text-white"} py-2 px-4 text-xs text-dark-gray rounded-lg cursor-pointer border border-gray-300 hover:opacity-80`}
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
              <Link
                to={`/communities/${community.id}`}
                key={`${community.id}-${idx}`}
              >
                <CommunitiesCard
                  img={community.img}
                  name={community.name}
                  desc={community.desc}
                  cat={community.categories}
                  member={community.member}
                  upcoming_event={community.upcoming_event}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Communities;
