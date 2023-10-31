async function bubbleSort() {
  const ele = document.querySelectorAll('.bar');
  const n = ele.length;
  
  for (let i = 0; i < n - 1; ++i) {
    for (let j = 0; j < n - i - 1; ++j) {
      ele[j].style.background = 'red';
      ele[j + 1].style.background = 'red';

      await waitforme(animationSpeed);

      const height1 = parseInt(ele[j].style.height);
      const height2 = parseInt(ele[j + 1].style.height);

      if (height1 > height2) {
        swap(ele[j], ele[j + 1]);
      }

      ele[j].style.background = 'rgb(255, 255, 255)';
      ele[j + 1].style.background = 'rgb(255, 255, 255)';
    }

    ele[n - i - 1].style.background = 'rgb(5, 250, 30)';
  }
  ele[0].style.background = 'rgb(5, 250, 30)';
}

const bubbleBtn = document.querySelector('.bubble');
bubbleBtn.addEventListener('click', async function() {
  disableButtons();
  await bubbleSort();
  enableButtons();
});
