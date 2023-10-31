let slider = document.querySelector(".toggle-slider");
let thumb = document.querySelector(".toggle-thumb");
let leftSection = document.querySelector(".left-section");
let wrapper = document.querySelector(".wrapper");

let timeBox = document.querySelector(".time");
let spaceBox = document.querySelector(".space");


slider.addEventListener("click", toggle);
thumb.addEventListener("click", toggle);

function toggle() {
  thumb.classList.toggle("toggle-on");
  wrapper.classList.toggle("dark-theme");
  leftSection.classList.toggle("left-section-dark");
  sortingWindow.classList.toggle("sorting-window-dark");
  timeBox.classList.toggle("time-dark");
  spaceBox.classList.toggle("space-dark");
}
