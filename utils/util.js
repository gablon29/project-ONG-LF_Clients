export const fetchEvents = (setEvents) => {
  fetch("http://localhost:4000/events")
    .then((res) => res.json())
    .then((data) => {
      if (data.message) {
        setEvents(data.events);
      }
    })
    .catch((err) => console.error(err));
};
