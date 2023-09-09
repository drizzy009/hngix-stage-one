const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const getCurrentDay = () => {
  const currentDate = new Date();
  const options = { weekday: "long", timeZone: "Africa/Lagos" };
  return new Intl.DateTimeFormat("en-US", options).format(currentDate);
};

const updateCurrentTime = () => {
  const currentDate = new Date();
  const options = { timeZone: "Africa/Lagos", hour12: false };
  const currentTime = currentDate.toLocaleTimeString("en-US", options);
  document.querySelector("[data-testid='currentUTCTime']").textContent =
    currentTime;
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("[data-testid='currentDayOfTheWeek']").textContent =
    getCurrentDay();
  updateCurrentTime();
  setInterval(updateCurrentTime, 1000);
});
