async function merge(ele, l, m, h) {
  const n1 = m - l + 1;
  const n2 = h - m;
  let left = new Array(n1);
  let right = new Array(n2);

  //Left Side of the Array
  for (let i = 0; i < n1; ++i) {
    await waitforme(animationSpeed);

    ele[l + i].style.background = "rgb(255, 0, 0)"; //Red
    left[i] = ele[l + i].style.height;
  }

  //Right Side of the Array
  for (let i = 0; i < n2; ++i) {
    await waitforme(animationSpeed);
    ele[m + 1 + i].style.background = "yellow"; //Yellow
    await shallWePause();
    right[i] = ele[m + 1 + i].style.height;
  }

  await waitforme(animationSpeed);
  let i = 0;
  j = 0;
  k = l;

  while (i < n1 && j < n2) {
    await shallWePause();
    await waitforme(animationSpeed);

    if (n1 + n2 === ele.length) {
      ele[k].style.background = "rgb(5, 250, 30)"; //Lightgreen
    }
    //To add color if the element is temporarily sorted
    else {
      ele[k].style.background = "rgb(77, 250, 77)"; //OffGreen
    }

    if (parseInt(left[i]) <= parseInt(right[j])) {
      ele[k].style.height = left[i];
      ++i;
    } else {
      ele[k].style.height = right[j];
      ++j;
    }
    ++k;
  }
  //To copy the remaining elements of left array
  while (i < n1) {
    await shallWePause();
    await waitforme(animationSpeed);
    //To add color if the element is at its actual position after sorting
    if (n1 + n2 === ele.length) {
      ele[k].style.background = "rgb(5, 250, 30)"; //LightGreen
    }
    //To add color if the element is temporarily sorted
    else {
      ele[k].style.background = "rgb(77, 250, 77)"; //OffGreen
    }
    ele[k].style.height = left[i];
    ++i;
    ++k;
  }
  //To copy the remaining elements of right array
  while (j < n2) {
    await shallWePause();
    await waitforme(animationSpeed);
    //To add color if the element is at its actual position after sorting
    if (n1 + n2 === ele.length) {
      ele[k].style.background = "rgb(5, 250, 30)"; //Lightgreen
    }
    //To add color if the element is temporarily sorted
    else {
      ele[k].style.background = "rgb(77, 250, 77)"; //Offgreen
    }
    ele[k].style.height = right[j];
    ++j;
    ++k;
  }
}

async function mergeSort(ele, l, r) {
  if (l >= r) {
    return;
  }
  const m = l + Math.floor((r - l) / 2);
  await shallWePause();
  await mergeSort(ele, l, m);
  await mergeSort(ele, m + 1, r);
  await merge(ele, l, m, r);
}

const mergeSortbtn = document.querySelector(".merge");
mergeSortbtn.addEventListener("click", async function () {
  const ele = document.querySelectorAll(".bar");
  let l = 0;
  let r = parseInt(ele.length) - 1;
  playMerge();
  playSorting();
  disableButtons();
  await mergeSort(ele, l, r);
  enableButtons();
});

function playMerge() {
  updateMergeTime();
  updateMergeSpace();
  updateMergeSortDetails();
}

function updateMergeSortDetails() {
  let data = document.querySelector(".sort-desc");
  data.style.opacity = "1";
  data.innerText =
    "Merge sort is an out-of-place and stable sorting algorithm.";
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
