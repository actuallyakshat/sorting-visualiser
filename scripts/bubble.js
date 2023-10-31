async function bubble(){
  console.log('In Bubble()');
  const ele = document.querySelectorAll('.bar');
  for(let i=0; i<ele.length-1; ++i){
      console.log(`In ${i}th loop`);
      for(let j=0; j<ele.length-i-1;++j){
      console.log('In jth loop');
      ele[j].style.background= 'rgb(242, 255, 3)';                        //yellow
      ele[j+1].style.background= 'rgb(242, 255, 3)';                      //yellow
      await waitforme(delay+60);


      if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
          console.log('In if condition');
          swap(ele[j], ele[j+1]);
      }
      ele[j].style.background = 'rgb(0, 255, 255)';                          //cyan
      ele[j+1].style.background = 'rgb(0, 255, 255)';                        //cyan
      }
      ele[ele.length-i-1].style.background = 'rgb(5, 250, 30)';               //lightgreen
  }
  ele[0].style.background = 'rgb(5, 250, 30)';                                //lightgreen
}

const bubbleBtn = document.querySelector('.bubble');
bubbleBtn.addEventListener('click', async function(){
    disableButtons();
    await bubble();
    enableButtons();
});

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
