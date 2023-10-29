const sortingWindow = document.querySelector(".sorting-window");
let determineSpeed = document.querySelector(".speed-slider").value;
let n = document.querySelector(".size-slider").value;


const arr = [];

generateArray();
updateSpeed();
document
  .querySelector(".size-slider")
  .addEventListener("input", updateArraySize);

document.querySelector(".speed-slider").addEventListener("input", updateSpeed);

function updateSpeed() {
  determineSpeed = document.querySelector(".speed-slider").value;
  switch (determineSpeed) {
    case "1":
      animationSpeed = 100;
      break;
    case "2":
      animationSpeed = 80;
      break;
    case "3":
      animationSpeed = 60;
      break;
    case "4":
      animationSpeed = 40;
      break;
    case "5":
      animationSpeed = 20;
      break;
  }
}

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

function showBars(indicies) {
  sortingWindow.innerHTML = "";
  for (let i = 0; i < n; i++) {
    const bar = document.createElement("div");
    bar.style.height = arr[i] * 100 + "%";
    bar.classList.add("bar");
    if(indicies && indicies.includes(i)){
      bar.style.backgroundColor = "red";
    }
    sortingWindow.appendChild(bar);
  }
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
  const copyArray = [...arr];
  const swaps = bubbleSort(copyArray);
  animateBubbleSort(swaps, animationSpeed);
}

function animateBubbleSort(swaps, speed) {
  if (swaps.length == 0){
    showBars(); 
    return;
  }

  const [i, j] = swaps.shift();
  [arr[i], arr[j]] = [arr[j], arr[i]];
  showBars([i,j]);
  setTimeout(function () {
    animateBubbleSort(swaps, speed);
  }, speed);
}

//bubble sort section ends

//insertion sort section starts

//insertion sort section ends

//selection sort section starts

//selection sort section ends

// merge sort section starts

// merge sort section ends

// merge sort section starts

// quick sort section ends

/* testing the sorting algorithm's logic
let akshat = [12, 44, 1, 13, 15, 18, 12, 13, 2, 6];
bubbleSort(akshat);
console.log(akshat);
*/
