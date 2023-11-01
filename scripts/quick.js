async function part(ele, l, h) {
  let i = l - 1;
  ele[h].style.background = "red";
  for (let j = l; j <= h - 1; ++j) {
    ele[j].style.background = "rgb(242, 255, 3)"; //Yellow
    await waitforme(animationSpeed);
    await waitforme(animationSpeed);
    if (parseInt(ele[j].style.height) < parseInt(ele[h].style.height)) {
      ++i;
      swap(ele[i], ele[j]);
      ele[i].style.background = "rgb(255, 115, 3)"; //Orange
      if (i != j) ele[j].style.background = "salmon"; //Cyan------>Salmon

      await waitforme(animationSpeed);
    } else {
      //To color if current element is greater than pivot
      ele[j].style.background = "salmon";
    }
  }
  ++i;
  await waitforme(animationSpeed);
  //Pivot at its actual position
  swap(ele[i], ele[h]);
  ele[h].style.background = "salmon";
  ele[i].style.background = "rgb(5, 250, 30)"; //Lightgreen
  await waitforme(animationSpeed);
  for (let j = 0; j < ele.length; ++j) {
    if (ele[j].style.background != "rgb(5, 250, 30)")
      //LightGreen
      ele[j].style.background = "rgb(0, 255, 255)"; //Cyan
  }

  return i;
}

async function quickSort(ele, l, h) {
  if (l < h) {
    let pi = await part(ele, l, h);

    await quickSort(ele, l, pi - 1);
    await quickSort(ele, pi + 1, h);
  } else {
    if (l >= 0 && h >= 0 && l < ele.length && h < ele.length) {
      ele[h].style.background = "rgb(5, 250, 30)";
      ele[l].style.background = "rgb(5, 250, 30)";
    }
  }
}

const quickSortbtn = document.querySelector(".quick");
quickSortbtn.addEventListener("click", async function () {
  let ele = document.querySelectorAll(".bar");
  let l = 0;
  let h = ele.length - 1;
  playQuick();
  disableButtons();
  await quickSort(ele, l, h);
  enableButtons();
});

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
