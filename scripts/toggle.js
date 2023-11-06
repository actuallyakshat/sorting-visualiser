let slider = document.querySelector(".toggle-slider");
let thumb = document.querySelector(".toggle-thumb");
let sun = document.querySelector("span .sun-s");
let moon = document.querySelector("span .moon-s");
let leftSection = document.querySelector(".left-section");
let wrapper = document.querySelector(".wrapper");
let timeBox = document.querySelector(".time");
let timeTop = document.querySelector(".time-top");
let spaceTop = document.querySelector(".space-top");
let spaceBox = document.querySelector(".space");
let tableCells = document.querySelectorAll(".cell");

slider.addEventListener("click", toggle);
thumb.addEventListener("click", toggle);
sun.addEventListener("click", toggleSun);
moon.addEventListener("click", toggleMoon);

// Check the time and enable dark mode after 7 PM
function checkIfNight() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  if (currentHour >= 18 || currentHour <= 6) {
    toggle();
  }
}
function toggleSun() {
  sun.style.display = "none";
  moon.style.display = "inline-block";
  toggle();
}
function toggleMoon() {
  moon.style.display = "none";
  sun.style.display = "inline-block";
  toggle();
}
function toggle() {
  console.log("Hi");
  thumb.classList.toggle("toggle-on");
  wrapper.classList.toggle("dark-theme");
  pauseStatus.classList.toggle("dark-theme");
  leftSection.classList.toggle("left-section-dark");
  sortingWindow.classList.toggle("sorting-window-dark");
  timeTop.classList.toggle("time-top-dark");
  spaceTop.classList.toggle("space-top-dark");
  tableCells.forEach((element) => {
    element.classList.toggle("dark-borders");
  });
}
if (window.innerWidth < 768) {
  if (thumb.classList.contains("toggle-on")) {
    sun.style.display = "inline-block";
  } else {
    moon.style.display = "inline-block";
  }
}
checkIfNight();
