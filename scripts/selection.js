async function selection(){
    console.log('In Selection');
    const ele = document.querySelectorAll('.bar');
    for(let i=0;i<ele.length;++i){
        console.log(`In ${i}th loop`);
        let min_index=i;
        ele[i].style.background = 'rgb(255, 115, 3)';               //Orange
        for(let j=i+1;j<ele.length;++j){
            console.log('In jth loop');
            ele[j].style.background = 'rgb(242, 255, 3)';           //Yellow

            await waitforme(animationSpeed);
            await waitforme(animationSpeed);
            if(parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)){
                if(min_index !== i){
                    // new min_index is found so change prev min_index color back to normal
                    ele[min_index].style.background = 'rgb(255, 255, 255)';                  //Cyan
                }
                min_index = j;
            } 
            else{
                // if the current comparison is more than min_index; change back to normal
                ele[j].style.background = 'rgb(255, 255, 255)';                              //Cyan
            }   
        }
        await waitforme(animationSpeed);
        swap(ele[min_index], ele[i]);
        // change the min element index back to normal as it is swapped 
        ele[min_index].style.background = 'rgb(255, 255, 255)';                              //Cyan
        // change the sorted element's color to green
        ele[i].style.background = 'rgb(5, 250, 30)';                                        //Lightgreen
    }
}

const selectionSortbtn = document.querySelector(".selection");
selectionSortbtn.addEventListener('click', async function(){
    playSelection();
    disableButtons();
    await selection();
    enableButtons();
});

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