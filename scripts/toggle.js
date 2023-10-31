let slider = document.querySelector(".toggle-slider");
let thumb = document.querySelector(".toggle-thumb");
let leftSection = document.querySelector(".left-section");
let wrapper = document.querySelector(".wrapper");

slider.addEventListener("click", toggle);
thumb.addEventListener("click", toggle);

function toggle() {
  thumb.classList.toggle("toggle-on");
  wrapper.classList.toggle("dark-theme");
  leftSection.classList.toggle("left-section-dark");
  sortingWindow.classList.toggle("sorting-window-dark");
}
