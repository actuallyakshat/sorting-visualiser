let slider = document.querySelector(".toggle-slider");
let thumb = document.querySelector(".toggle-thumb");
slider.addEventListener("click", toggle);
thumb.addEventListener("click", toggle);
function toggle() {
  thumb.classList.toggle("toggle-on");
  document.body.classList.toggle("dark-theme");
}
