const sortingButtons = document.querySelectorAll(".btn"); //fetching to disable and enable all buttons
let arr = []; //we will work on this array
let determineSpeed = document.querySelector(".speed-slider").value; //value from speed slider
let determineSize = document.querySelector(".size-slider").value; //value from size slider
const sortingWindow = document.querySelector(".sorting-window");

generateArray();
updateSpeed();

//changing sliders automatically calls the updation functions
document
  .querySelector(".size-slider")
  .addEventListener("input", updateArraySize);
document.querySelector(".speed-slider").addEventListener("input", updateSpeed);

//swap function
function swap(ele1, ele2) {
  console.log("In swap()");

  let temp = ele1.style.height;
  ele1.style.height = ele2.style.height;
  ele2.style.height = temp;
}

//generate array function
function generateArray() {
  arr = [];
  sortingWindow.innerHTML = "";
  determineSize = document.querySelector(".size-slider").value;
  for (let i = 0; i < determineSize; i++) {
    arr[i] = Math.random();
  }
  const bars = document.querySelector('#bars');

  // creating multiple div elements using loop and adding multiple class
  for(let i=0; i<determineSize; ++i){
      const bar = document.createElement("div");

      bar.style.height = arr[i] * 100 + "%";
      bar.classList.add('bar');
      bar.classList.add('bar-style');
      bar.classList.add(`barNo${i}`);
      bars.appendChild(bar);    
  }
}

//update array size function
function updateArraySize() {
  determineSize = document.querySelector(".size-slider").value;
  generateArray();
}
//update speed function
function updateSpeed() {
  determineSpeed = document.querySelector(".speed-slider").value;
  switch (determineSpeed) {
    case "1":
      animationSpeed = 120;
      break;
    case "2":
      animationSpeed = 80;
      break;
    case "3":
      animationSpeed = 50;
      break;
    case "4":
      animationSpeed = 30;
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
  document.querySelector(".speed-slider").disabled = true;
}

function enableButtons() {
  sortingButtons.forEach((button) => {
    button.disabled = false;
    button.classList.remove("btn-disable");
  });
  document.querySelector(".size-slider").disabled = false;
  document.querySelector(".speed-slider").disabled = false;
}








































// ----------------------------------------------------------------------------
//bubble sort section starts

//bubble sort section ends

//insertion sort section starts
function playInsertion() {
  updateInsertionTime();
  updateInsertionSpace();
}

function updateInsertionTime() {
  let data = document.getElementsByClassName("time-details");
  data[0].innerHTML = "O(N)";
  data[1].innerHTML = "O(N<sup>2</sup>)";
  data[2].innerHTML = "O(N<sup>2</sup>)";
}

function updateInsertionSpace() {
  let data = document.getElementsByClassName("space-details");
  data[0].innerHTML = "O(1)";
  data[1].innerHTML = "O(1)";
  data[2].innerHTML = "O(1)";
}
//insertion sort section ends

//selection sort section starts
function playSelection() {
  updateSelectionTime();
  updateSelectionSpace();
}

function updateSelectionTime() {
  let data = document.getElementsByClassName("time-details");
  data[0].innerHTML = "O(N<sup>2</sup>)";
  data[1].innerHTML = "O(N<sup>2</sup>)";
  data[2].innerHTML = "O(N<sup>2</sup>)";
}

function updateSelectionSpace() {
  let data = document.getElementsByClassName("space-details");
  data[0].innerHTML = "O(1)";
  data[1].innerHTML = "O(1)";
  data[2].innerHTML = "O(1)";
}
//selection sort section ends

// merge sort section starts
function playMerge() {
  updateMergeTime();
  updateMergeSpace();
}

function updateMergeTime() {
  let data = document.getElementsByClassName("time-details");
  data[0].innerHTML = "O(N x LogN)";
  data[1].innerHTML = "O(N x LogN)";
  data[2].innerHTML = "O(N x LogN)";
}

function updateMergeSpace() {
  let data = document.getElementsByClassName("space-details");
  data[0].innerHTML = "O(N)";
  data[1].innerHTML = "O(N)";
  data[2].innerHTML = "O(N)";
}
// merge sort section ends

// quick sort section starts
function playQuick() {
  updateQuickTime();
  updateQuickSpace();
}

function updateQuickTime() {
  let data = document.getElementsByClassName("time-details");
  data[0].innerHTML = "O(N x LogN)";
  data[1].innerHTML = "O(N x LogN)";
  data[2].innerHTML = "O(N x LogN)";
}

function updateQuickSpace() {
  let data = document.getElementsByClassName("space-details");
  data[0].innerHTML = "O(N)";
  data[1].innerHTML = "O(N)";
  data[2].innerHTML = "O(N)";
}
// quick sort section ends

/* testing the sorting algorithm's logic
let akshat = [12, 44, 1, 13, 15, 18, 12, 13, 2, 6];
bubbleSort(akshat);
console.log(akshat);
*/
