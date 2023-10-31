function playMerge() {
    updateMergeTime();
    updateMergeSpace();
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