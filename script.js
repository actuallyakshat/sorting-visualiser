const sortingWindow = document.querySelector(".sorting-window");
const sortingButtons = document.querySelectorAll(".btn");
const arr = [];
let determineSpeed = document.querySelector(".speed-slider").value;
let n = document.querySelector(".size-slider").value;
generateArray();
updateSpeed();
document
  .querySelector(".size-slider")
  .addEventListener("input", updateArraySize);

document.querySelector(".speed-slider").addEventListener("input", updateSpeed);



function generateArray() {
  sortingWindow.innerHTML = "";
  n = document.querySelector(".size-slider").value;
  for (let i = 0; i < n; i++) {
    arr[i] = Math.random();
  }
  showBars();
}

function updateArraySize() {
  n = document.querySelector(".size-slider").value;
  generateArray();
}

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

function showBars(indicies) {
  sortingWindow.innerHTML = "";
  for (let i = 0; i < n; i++) {
    const bar = document.createElement("div");
    bar.style.height = arr[i] * 100 + "%";
    bar.classList.add("bar");
    if (indicies && indicies.includes(i)) {
      bar.style.backgroundColor = "red";
    }
    sortingWindow.appendChild(bar);
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

//bubble sort section starts
function bubbleSort(arr) {
  var swapped = true;
  const swaps = [];
  while (swapped) {
    swapped = false;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        swaps.push([i - 1, i]);
        swapped = true;
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
      }
    }
  }
  return swaps;
}

function playBubble() {
  disableButtons();
  const copyArray = [...arr];
  updateBubbleTime();
  updateBubbleSpace();
  const swaps = bubbleSort(copyArray);
  animateBubbleSort(swaps, animationSpeed);
}

function animateBubbleSort(swaps, speed) {
  if (swaps.length == 0) {
    showBars();
    enableButtons();
  }

  const [i, j] = swaps.shift();
  [arr[i], arr[j]] = [arr[j], arr[i]];
  showBars([i, j]);
  setTimeout(function () {
    animateBubbleSort(swaps, speed);
  }, speed);
}

function updateBubbleTime() {
  let data = document.getElementsByClassName("time-details");
  data[0].innerHTML = "O(N)";
  data[1].innerHTML = "O(N<sup>2</sup>)";
  data[2].innerHTML = "O(N<sup>2</sup>)";
}

function updateBubbleSpace() {
  let data = document.getElementsByClassName("space-details");
  data[0].innerHTML = "O(1)";
  data[1].innerHTML = "O(1)";
  data[2].innerHTML = "O(1)";
}
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
