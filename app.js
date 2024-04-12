function openTab(tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("content");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  document.querySelector('[onclick="openTab(\'' + tabName + '\')"]').className += " active";
}

document.addEventListener('DOMContentLoaded', () => {
  openTab('Home'); // Opens the Home tab by default
});
