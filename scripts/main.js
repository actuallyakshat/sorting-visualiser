const sortingButtons = document.querySelectorAll(".btn"); //fetching to disable and enable all buttons
const playAndPause = document.querySelector(".toggle-play");
let arr = []; //we will work on this array
let determineSpeed = document.querySelector(".speed-slider").value; //value from speed slider
let arraySize = document.querySelector(".size-slider").value; //value from size slider
const sortingWindow = document.querySelector(".sorting-window");
const pauseButton = document.querySelector(".pause");
const playButton = document.querySelector(".play");
const pauseStatus = document.querySelector(".pause-status");
const mobileMenu = document.querySelector(".left-section");
const rightSection = document.querySelector(".right-section");
const disappearMenu = document.querySelector(".mobile-menu");
const hamBurgerMenu = document.querySelector(".hamburger");

checkIfMobile();
generateArray();
updateSpeed();
let isSortingPaused = false; // Variable to track whether sorting is paused

console.log(hamBurgerMenu);

hamBurgerMenu.addEventListener("click", openMenu);

let isMenuOpen = false;
function openMenu() {
  mobileMenu.classList.toggle("left-active"); 
  disappearMenu.classList.toggle("menu-active"); 
  hamBurgerMenu.classList.toggle("hamburger-visible");
  disappearMenu.addEventListener("click", closeMenu);
  isMenuOpen = true;
}

function closeMenu() {
  if (isMenuOpen) {
    mobileMenu.classList.toggle("left-active");
    disappearMenu.classList.toggle("menu-active");
    isMenuOpen = false;
    rightSection.removeEventListener("click", closeMenu);

  }
}

function checkIfMobile(){
  if (window.innerWidth <= 800) {
    hamBurgerMenu.classList.toggle("hamburger-active");
    sortingWindow.addEventListener("click", pauseOnMobile);
  }
  else{
    hamBurgerMenu.hidden = true;
    console.log("you reached else");
  }
}

// Function to handle the pause button click
function pauseSorting() {
  pauseButton.style.backgroundColor = "#3d3d3d";
  isSortingPaused = true;
  pauseStatus.innerText = "Paused...";
}

function pauseOnMobile() {
  if (isSortingPaused) {
    playSorting();
  } else pauseSorting();
}

// Function to handle the play button click
function playSorting() {
  pauseButton.style.backgroundColor = "#F0F0F0";
  pauseStatus.innerText = "";
  isSortingPaused = false;
  // Resume your sorting algorithm or animation logic here
}

async function shallWePause() {
  if (isSortingPaused) {
    // If sorting is paused, wait until it's unpaused
    while (isSortingPaused) {
      await new Promise((resolve) => setTimeout(resolve, 100)); // Adjust the delay as needed
    }
  }
}

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
  enableButtons();
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
      animationSpeed = 170;
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
  playAndPause.classList.add("active");
  sortingButtons.forEach((button) => {
    button.classList.add("btn-disable");
    button.disabled = true;
    if (window.innerWidth <= 800) {
      button.addEventListener("click", toggleMenu);
    }
  });

  document.querySelector(".size-slider").disabled = true;
}

function enableButtons() {
  playAndPause.classList.remove("active");
  sortingButtons.forEach((button) => {
    button.disabled = false;
    button.classList.remove("btn-disable");
        if (window.innerWidth <= 800) {
      button.addEventListener("click", toggleMenu);
    }
  });
  document.querySelector(".size-slider").disabled = false;
}

window.onkeydown = function (event) {
  if (event.keyCode === 32) {
    event.preventDefault();
    if (isSortingPaused) {
      document.querySelector(".play").click();
    } else {
      document.querySelector(".pause").click();
    }
  }
};
