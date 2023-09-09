const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const getCurrentDay = () => {
  const currentDate = new Date();
  return daysOfWeek[currentDate.getDay()];
};

const updateCurrentTime = () => {
  const currentDate = new Date();
  const currentTime = currentDate.toUTCString();
  const currentDayElement = document.querySelector("[data-testid='currentDayOfTheWeek']");
  const currentUTCTimeElement = document.querySelector("[data-testid='currentUTCTime']");
  
  currentDayElement.innerHTML = `<strong>Current Day:</strong> ${getCurrentDay()}`;
  currentUTCTimeElement.innerHTML = `<strong>Current UTC Time:</strong> ${currentTime}`;
};

document.addEventListener("DOMContentLoaded", () => {
  updateCurrentTime();
  setInterval(updateCurrentTime, 1000);
});
