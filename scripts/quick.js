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