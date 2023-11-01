let sliders = document.getElementsByClassName("slider");
for (let slider of sliders) {
  const val = slider.value;
  console.log(slider.value);
  const min = slider.min;
  const max = slider.max;
  //   slider.computedStyleMap.backgroundSize =
  //     ((val - min) / (max - min)) * 100 + "% 100%";
}
