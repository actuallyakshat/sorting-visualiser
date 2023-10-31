function bubbleSort(arr) {
  var swapped = true;
  const moves = [];
  while (swapped) {
    swapped = false;
    for (let i = 1; i < arr.length; i++) {
      moves.push({indicies:[i - 1, i], type:"comp"});
      if (arr[i - 1] > arr[i]) {
        swapped = true;
        moves.push({indicies:[i - 1, i], type:"swap"});
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
      }
    }
  }
  return moves;
}

function playBubble() {
  disableButtons();
  const copyArray = [...arr];
  updateBubbleTime();
  updateBubbleSpace();
  const moves = bubbleSort(copyArray);
  animateBubbleSort(moves, animationSpeed);
}

function animateBubbleSort(moves, speed) {
  if (moves.length == 0) {
    showBars();
    enableButtons();
    return;
  }
  const move = moves.shift();
  const [i,j] = move.indicies;
  if(move.type == "swap"){
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  showBars(move);
  setTimeout(function () {
    animateBubbleSort(moves, speed);
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
