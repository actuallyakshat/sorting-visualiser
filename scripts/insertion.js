async function insertion() {
  const ele = document.querySelectorAll(".bar");
  await shallWePause();
  ele[0].style.background = "rgb(5, 250, 30)"; //light green

  for (let i = 1; i < ele.length; ++i) {
    let j = i - 1;
    let key = ele[i].style.height;

    shallWePause();
    ele[i].style.background = "rgb(255, 0, 0)"; //red

    await waitforme(animationSpeed);
    await waitforme(animationSpeed);

    while (j >= 0 && parseInt(ele[j].style.height) > parseInt(key)) {
      await shallWePause();
      ele[j].style.background = "yellow"; //yellow
      ele[j].style.background = "yellow";
      ele[j + 1].style.height = ele[j].style.height;
      --j;

      await waitforme(animationSpeed);
      await waitforme(animationSpeed);

      for (let k = i - 1; k >= 0; --k) {
        await shallWePause();
        ele[k].style.background = "rgb(5, 250, 30)"; //lightgreen
      }
    }
    await shallWePause();
    await waitforme(animationSpeed);
    ele[j + 1].style.height = key;
    ele[i].style.background = "rgb(5, 250, 30)"; //lightgreen
  }
}

const inSortbtn = document.querySelector(".insertion");
inSortbtn.addEventListener("click", async function () {
  playInsertion();
  playSorting();
  disableButtons();
  await insertion();
  enableButtons();
});

function playInsertion() {
  updateInsertionTime();
  updateInsertionSpace();
  updateInsertionSortDetails();
}

function updateInsertionSortDetails() {
  let data = document.querySelector(".sort-desc");
  data.style.opacity = "1";
  data.innerText =
    "Insertion sort is an in-place and stable sorting algorithm.";
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
