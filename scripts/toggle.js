let slider = document.querySelector(".toggle-slider");
let thumb = document.querySelector(".toggle-thumb");
let leftSection = document.querySelector(".left-section");
let wrapper = document.querySelector(".wrapper");
let timeBox = document.querySelector(".time");
let spaceBox = document.querySelector(".space");

slider.addEventListener("click", toggle);
thumb.addEventListener("click", toggle);

// Check the time and enable dark mode after 7 PM
function checkIfNight() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  if (currentHour >= 18) {
    toggle();
  }
}

function toggle() {
  console.log("Hi");
  thumb.classList.toggle("toggle-on");
  wrapper.classList.toggle("dark-theme");
  leftSection.classList.toggle("left-section-dark");
  sortingWindow.classList.toggle("sorting-window-dark");
  timeBox.classList.toggle("time-dark");
  spaceBox.classList.toggle("space-dark");
}

checkIfNight();
setInterval(checkIfNight, 60000);
