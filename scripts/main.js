const sortingButtons = document.querySelectorAll(".btn"); //fetching to disable and enable all buttons
let arr = []; //we will work on this array
let determineSpeed = document.querySelector(".speed-slider").value; //value from speed slider
let arraySize = document.querySelector(".size-slider").value; //value from size slider
const sortingWindow = document.querySelector(".sorting-window");

generateArray();
updateSpeed();

//changing sliders automatically calls the updation functions
document.querySelector(".size-slider").addEventListener("input", generateArray);
document.querySelector(".speed-slider").addEventListener("input", updateSpeed);

//swap function
function swap(ele1, ele2) {
  let temp = ele1.style.height;
  ele1.style.height = ele2.style.height;
  ele2.style.height = temp;
}

function waitforme(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}

//generate array function
function generateArray() {
  arr = [];
  sortingWindow.innerHTML = "";
  arraySize = document.querySelector(".size-slider").value;
  for (let i = 0; i < arraySize; i++) {
    arr.push(Math.floor(Math.random() * 100 + 3));
  }

  // creating multiple div elements using loop and adding multiple class
  for (let i = 0; i < arraySize; ++i) {
    const bar = document.createElement("div");
    bar.style.height = arr[i] + "%";
    bar.classList.add("bar");
    bar.classList.add("bar-style");
    bar.classList.add(`barNo${i}`);
    sortingWindow.appendChild(bar);
  }
}

//update speed function
function updateSpeed() {
  determineSpeed = document.querySelector(".speed-slider").value;
  switch (determineSpeed) {
    case "1":
      animationSpeed = 200;
      break;
    case "2":
      animationSpeed = 90;
      break;
    case "3":
      animationSpeed = 150;
      break;
    case "4":
      animationSpeed = 70;
      break;
    case "5":
      animationSpeed = 10;
      break;
  }
}

function disableButtons() {
  sortingButtons.forEach((button) => {
    button.classList.add("btn-disable");
    button.disabled = true;
  });

  document.querySelector(".size-slider").disabled = true;
}

function enableButtons() {
  sortingButtons.forEach((button) => {
    button.disabled = false;
    button.classList.remove("btn-disable");
  });
  document.querySelector(".size-slider").disabled = false;
}
