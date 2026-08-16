import { communities, categories, events } from "./datas.js";

export const getCategories = (e, c) => {
  const community =
    e && communities.find((community) => community.id === e.community_id);

  const filteredCat = categories.filter((cat) =>
    e ? community.categories.includes(cat.id) : c.categories.includes(cat.id),
  );

  return filteredCat;
};

export const getRecommendations = (event) => {
  const eventCategories = getCategories(event).map((cat) => cat.id);
  const recommendations = events
    .filter(
      (event) =>
        event.id === eventCategories[0] || event.id === eventCategories[1],
    )
    .filter((e) => e.id !== event.id);

  return recommendations;
};

export const getEvent = (community) => {
  const event = events.filter((event) => event.community_id === community.id);

  return event;
};

export const getAllLocations = () => {
  const obj = {};

  events.map((event) => {
    if (!obj[event.location]) {
      obj[event.location] = "";
    }
  });

  return Object.keys(obj);
};

export const getCategoriesId = (param) => {
  const filterCategories = categories.filter(
    (category) => category.name.toLowerCase() === param,
  )[0];

  return filterCategories.id;
};

export const sortEventByPopularity = (events) => {
  return [...events].sort((a, b) => b.attendees - a.attendees);
};

export const sortEventByRemainingCap = (events) => {
  return [...events].sort(
    (a, b) => a.attendees - a.capacity - (b.attendees - b.capacity),
  );
};
