function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Add event listeners once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get all tab buttons and add click event listeners
  var tabs = document.querySelectorAll('.tablinks');
  tabs.forEach(tab => {
      tab.addEventListener('click', function(event) {
          openTab(event, tab.getAttribute('onclick').split("'")[1]);
      });
  });

  // Automatically click the first tab to load it by default
  if (tabs.length > 0) {
      tabs[0].click();
  }
});

// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const buttonLinks = document.querySelectorAll('.button-link');
    
    buttonLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // You can add any JavaScript functionality here if needed
            console.log('Button link clicked:', link.textContent);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const videoLinks = document.querySelectorAll('.video-link');
    
    videoLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // You can add any JavaScript functionality here if needed
            console.log('Video link clicked:', link.querySelector('.video-button').textContent);
        });
    });
});


