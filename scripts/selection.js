async function selection() {
  const ele = document.querySelectorAll(".bar");
  for (let i = 0; i < ele.length; ++i) {
    let min_index = i;
    ele[i].style.background = "rgb(255, 0, 0)"; //Red
    for (let j = i + 1; j < ele.length; ++j) {
      ele[j].style.background = "rgb(242, 255, 3)"; //Yellow
      await waitforme(animationSpeed);
      await waitforme(animationSpeed);
      await shallWePause();
      if (
        parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)
      ) {
        if (min_index !== i) {
          ele[min_index].style.background = "rgb(255, 255, 255)";
        }
        min_index = j;
      } else {
        ele[j].style.background = "rgb(255, 255, 255)";
      }
    }
    await waitforme(animationSpeed);
    swap(ele[min_index], ele[i]);
    await shallWePause();
    ele[min_index].style.background = "rgb(255, 255, 255)";
    ele[i].style.background = "rgb(5, 250, 30)"; //Lightgreen
  }
}

const selectionSortbtn = document.querySelector(".selection");
selectionSortbtn.addEventListener("click", async function () {
  playSelection();
  playSorting();
  disableButtons();
  await selection();
  enableButtons();
});

function playSelection() {
  updateSelectionTime();
  updateSelectionSpace();
  updateSelectionSortDetails();
}

function updateSelectionSortDetails() {
  let data = document.querySelector(".sort-desc");
  data.style.opacity = "1";
  data.innerText =
    "Selection sort is an in-place and unstable sorting algorithm.";
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
