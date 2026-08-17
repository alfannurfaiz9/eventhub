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
  const event = events.filter((event) => event.community_id === community?.id);

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

export const getAllUsers = () => {
  const users = JSON.parse(localStorage.getItem("users"));

  return users;
};

export const getUser = () => {
  const id = localStorage.getItem("isLogin");

  const allUsers = getAllUsers();

  const user = allUsers?.find((user) => user?.id?.toString() === id);

  return user;
};

export const joinEvent = (id) => {
  const allUsers = getAllUsers();
  const user = getUser();

  const userCurrentEvent = user.event_id;
  const updatedEvent = userCurrentEvent && [...userCurrentEvent, id];

  const deletedEvent = userCurrentEvent.includes(id);
  const undeletedEvent = userCurrentEvent.filter((event) => event !== id);

  const updateUser = {
    ...user,
    event_id: deletedEvent ? undeletedEvent : updatedEvent,
  };
  const anotherUser = allUsers.filter((u) => u.id !== user.id);

  const updatedLocalStorage = anotherUser && [updateUser, ...anotherUser];

  localStorage.setItem("users", JSON.stringify(updatedLocalStorage));
};

export const getJoinedEvent = (id) => {
  const user = getUser();

  if (!user) {
    return;
  }

  return user.event_id.includes(Number(id));
};

export const joinCommunity = (id) => {
  const allUsers = getAllUsers();
  const user = getUser();

  const userCurrentCommunity = user.community_id;
  const updatedCommunity = userCurrentCommunity && [
    ...userCurrentCommunity,
    id,
  ];

  const deletedCommunity = userCurrentCommunity.includes(id);
  const undeletedCommunity = userCurrentCommunity.filter(
    (community) => community !== id,
  );

  const updateUser = {
    ...user,
    community_id: deletedCommunity ? undeletedCommunity : updatedCommunity,
  };
  const anotherUser = allUsers.filter((u) => u.id !== user.id);

  const updatedLocalStorage = anotherUser && [updateUser, ...anotherUser];

  localStorage.setItem("users", JSON.stringify(updatedLocalStorage));
};

export const getJoinedCommunity = (id) => {
  const user = getUser();

  if (!user) {
    return;
  }

  return user.community_id.includes(Number(id));
};

export const saveEvent = (id) => {
  const allUsers = getAllUsers();
  const user = getUser();

  const userCurrentSavedEvent = user.saved_event_id;
  const updatedSavedEvent = userCurrentSavedEvent && [
    ...userCurrentSavedEvent,
    id,
  ];

  const deletedEvent = userCurrentSavedEvent.includes(id);
  const undeletedEvent = userCurrentSavedEvent.filter((event) => event !== id);

  const updateUser = {
    ...user,
    saved_event_id: deletedEvent ? undeletedEvent : updatedSavedEvent,
  };
  const anotherUser = allUsers.filter((u) => u.id !== user.id);

  const updatedLocalStorage = anotherUser && [updateUser, ...anotherUser];

  localStorage.setItem("users", JSON.stringify(updatedLocalStorage));
};

export const getSavedEvent = (id) => {
  const user = getUser();

  if (!user) {
    return;
  }

  return user.saved_event_id.includes(Number(id));
};
