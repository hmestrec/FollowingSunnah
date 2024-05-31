function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Set the default tab to be open
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("Videos").style.display = "block";
    document.querySelector(".tablinks").className += " active";
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

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Set the default tab to be open
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("Videos").style.display = "block";
    document.querySelector(".tablinks").className += " active";
});

// Function to hide tab contents when home button is clicked
function hideTabs() {
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
}

// Add event listener to the home button
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("homeButton").addEventListener("click", hideTabs);
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


document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const logo = document.querySelector('.logo');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { // Adjust the scroll distance as needed
            header.classList.add('header-scrolled');
            logo.classList.add('logo-scrolled');
        } else {
            header.classList.remove('header-scrolled');
            logo.classList.remove('logo-scrolled');
        }
    });
});