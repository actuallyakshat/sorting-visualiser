async function insertion(){
    const ele = document.querySelectorAll('.bar');
    ele[0].style.background = 'rgb(5, 250, 30)';                //light green

    for(let i=1;i<ele.length;++i){ 
        let j=i-1;
        let key=ele[i].style.height;

        ele[i].style.background = 'rgb(255, 115, 3)';           //orange

        await waitforme(animationSpeed);
        await waitforme(animationSpeed);

        while(j>=0 && (parseInt(ele[j].style.height)> parseInt(key))){
            ele[j].style.background = 'rgb(242, 255, 3)';       //yellow
            ele[j].style.background = 'yellow';
            ele[j+1].style.height = ele[j].style.height;
            --j;

            await waitforme(animationSpeed);
            await waitforme(animationSpeed);

            for(let k=i-1; k>=0;--k)
            ele[k].style.background = 'rgb(5, 250, 30)';            //lightgreen
        }
        await waitforme(animationSpeed);
        ele[j+1].style.height = key;
        ele[i].style.background = 'rgb(5, 250, 30)';                //lightgreen
    }
}

const inSortbtn = document.querySelector(".insertion");
inSortbtn.addEventListener('click', async function(){
    playInsertion();
    disableButtons();
    await insertion();
    enableButtons();
});

function playInsertion() {
    updateInsertionTime();
    updateInsertionSpace();
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