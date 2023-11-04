async function bubbleSort() {
  const ele = document.querySelectorAll(".bar");
  const n = ele.length;

  for (let i = 0; i < n - 1; ++i) {
    for (let j = 0; j < n - i - 1; ++j) {
      ele[j].style.background = "red";
      ele[j + 1].style.background = "yellow";

      await shallWePause();

      await waitforme(animationSpeed);
      await waitforme(animationSpeed);
      await waitforme(animationSpeed);

      const height1 = parseInt(ele[j].style.height);
      const height2 = parseInt(ele[j + 1].style.height);

      if (height1 > height2) {
        await shallWePause();
        swap(ele[j], ele[j + 1]);
      }
      await shallWePause();
      ele[j].style.background = "rgb(255, 255, 255)";
      ele[j + 1].style.background = "rgb(255, 255, 255)";
    }

    ele[n - i - 1].style.background = "rgb(5, 250, 30)";
  }
  ele[0].style.background = "rgb(5, 250, 30)";
}

const bubbleBtn = document.querySelector(".bubble");
bubbleBtn.addEventListener("click", async function () {
  playBubble();
  playSorting();
  disableButtons();
  await bubbleSort();
  enableButtons();
});

function playBubble() {
  updateBubbleTime();
  updateBubbleSpace();
  updateBubbleSortDetails();
}

function updateBubbleSortDetails(){
  let data = document.querySelector(".sort-desc");
  data.style.opacity = "1";
  data.innerText = "Bubble sort is an in-place and stable sorting algorithm."
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