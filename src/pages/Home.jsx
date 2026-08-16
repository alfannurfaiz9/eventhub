import { Link, useSearchParams } from "react-router";

import Navbar from "../components/Navbar.jsx";
import EventsCard from "../components/EventsCard.jsx";
import CommunitiesCard from "../components/CommunitiesCard.jsx";
import TestimonialsCard from "../components/TestimonialsCard.jsx";
import EventsModal from "../components/EventsModal.jsx";

import { events } from "../utils/datas.js";
import { communities } from "../utils/datas.js";
import { reviews } from "../utils/datas.js";
import { categories } from "../utils/datas.js";
import { getCategories } from "../utils/getDatas.js";

import { BsStars } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

const Homepage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputSearch, setInputSearch] = useState("");
  const search = searchParams.get("search") || "";

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar />
      <div className={showModal ? "block" : "hidden"}>
        <EventsModal setShowModal={setShowModal} />
      </div>
      <section className="bg-black py-24 px-5 lg:py-16 lg:px-72 text-center">
        <div className="grid gap-8">
          <div className="grid gap-8">
            <div className="bg-light-primary flex gap-1 py-1 px-4 text-xs w-fit justify-self-center rounded-full border-t border-b border-primary">
              <BsStars className="text-primary" />
              <p className="text-primary">Discover · Connect · Participate</p>
            </div>
            <h2 className="font-extrabold text-4xl lg:text-6xl text-white">
              Find events that{" "}
              <span className="text-primary">actually matter</span> to you
            </h2>
            <div className="lg:px-8">
              <p className="text-dark-gray text-sm lg:text-lg">
                Join workshops, conferences, and meetups in Indonesia's best
                tech communities — or create your own.
              </p>
            </div>
          </div>
          <div className="grid gap-2">
            <div className="p-2 text-dark-gray bg-white w-full lg:w-10/12 mx-auto rounded-xl flex justify-between gap-2">
              <CiSearch className="text-xl m-auto" />
              <input
                value={inputSearch}
                onChange={(e) => {
                  setInputSearch(e.target.value);
                }}
                className="w-full focus:outline-none text-xs lg:text-sm"
                type="text"
                name="search-explore"
                id="search-explore"
                placeholder="Search events, topics, or locations..."
              />
              <button
                onClick={() => {
                  const newParams = new URLSearchParams(searchParams);

                  if (inputSearch) {
                    newParams.set("search", inputSearch);
                  } else {
                    newParams.delete("search");
                  }

                  setSearchParams(newParams);
                }}
                className="text-sm bg-primary text-white py-1.5 px-4 rounded-lg cursor-pointer hover:opacity-90"
              >
                Search
              </button>
            </div>
          </div>
          <div className="text-xs lg:text-sm flex flex-wrap gap-3 text-dark-gray justify-center">
            {categories.map((cat) => (
              <p
                key={cat.id}
                className="py-1 px-2 border-t border-b border-dark-gray text-xs rounded-full"
              >
                {cat.name}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className="py-6 px-6 lg:px-12 bg-med-gray">
        <div className="flex items-center justify-between">
          <div className="w-10/12">
            <p className="text-xl font-bold text-black">
              Discover events that interest you
            </p>
          </div>
          <Link
            className="text-xs text-dark-gray hover:opacity-70 hover:underline"
            to="/events"
          >
            See all
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 my-6 gap-6 lg:gap-4">
          {events
            .filter((event) => event.title.toLowerCase().includes(search))
            .map((event, idx) => (
              <EventsCard
                id={event.id}
                img={event.img}
                cat={getCategories(event)}
                title={event.title}
                date={event.date}
                time={event.time}
                location={event.location}
                attendees={event.attendees}
                capacity={event.capacity}
                setShowModal={setShowModal}
              />
            ))}
        </div>
      </section>
      <section className="py-6 px-6 lg:px-12 bg-med-gray">
        <div className="flex items-center justify-between">
          <div className="w-8/12">
            <p className="text-xl font-bold text-black">Popular Communities</p>
          </div>
          <Link
            className="text-xs text-dark-gray hover:opacity-70 hover:underline"
            to="/communities"
          >
            See all
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 my-6 gap-6 lg:gap-4">
          {communities
            .filter((community) =>
              community.name.toLowerCase().includes(search),
            )
            .map((community, idx) => (
              <CommunitiesCard
                key={`${communities.id}-${idx}`}
                id={community.id}
                img={community.img}
                name={community.name}
                desc={community.desc}
                cat={community.categories}
                member={community.member}
                upcoming_event={community.upcoming_event}
                setShowModal={setShowModal}
              />
            ))}
        </div>
      </section>
      <section className="py-6 px-6 lg:px-12 bg-med-gray">
        <div className="w-8/12">
          <p className="text-xl font-bold text-black">
            What the community says
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 my-6 gap-4">
          {reviews.map((review) => (
            <TestimonialsCard
              desc={review.desc}
              name={review.name}
              role={review.role}
            />
          ))}
        </div>
      </section>
      <section className="py-6 px-6 lg:px-12 bg-med-gray">
        <div className="px-4 text-center bg-black py-12 grid gap-3 justify-items-center rounded-2xl">
          <div className="flex gap-2">
            <p className="py-1 px-2 text-xs bg-light-blue rounded-full text-blue">
              Technology
            </p>
            <p className="py-1 px-2 text-xs bg-light-blue rounded-full text-blue">
              AI
            </p>
            <p className="py-1 px-2 text-xs bg-light-purple rounded-full text-purple">
              Desgin
            </p>
          </div>
          <p className="text-white font-bold text-3xl">
            Ready to find your community?
          </p>
          <div className="lg:w-4/12 text-center mx-auto">
            <p className="text-dark-gray text-sm">
              Join thousands of developers, designers, and makers in Indonesia's
              most active tech communities.
            </p>
          </div>
          <div className="flex flex-col justify-center lg:flex-row gap-2">
            <Link
              to="/events"
              className="py-2 px-4 rounded-xl text-white bg-primary cursor-pointer hover:opacity-90"
            >
              Explore Events
            </Link>
            <Link
              to="/communities"
              className="py-2 px-4 rounded-xl text-dark-gray border border-dark-gray cursor-pointer hover:opacity-70"
            >
              Browse Communities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
