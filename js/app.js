/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navBar = document.getElementById('navbar__list');
const headers = document.querySelectorAll('.landing__container');
const link = document.querySelectorAll('.menu__link');
const topHead = document.querySelector('.main__hero');
const topButton = document.getElementById('topButton');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


// Scroll to section function


const toSection = function(section) {
    const position = section.getBoundingClientRect();
    document.body.scrollTop = position.top;
    document.documentElement.scrollTop =  position.top;
}

// Create navigation list

for(let i = 0; i < headers.length; i++) {
  
    var item = document.createElement('li');
    item.innerHTML = `<a onclick = "toSection(headers[${i}])" class = "menu__link">${headers[i].parentElement.getAttribute('data-nav')}</a>`;
    navBar.appendChild(item);
    }
 
    /*-- Check object visibility tutorial link: https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport --*/
const checkVisibility = function(obj) {
    const dims = obj.getBoundingClientRect();
    if(dims.top >=0 && dims.left >= 0 && dims.right <= (window.innerWidth || document.documentElement.clientWidth) && dims.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        return true; 
    } else {
        return false;
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

/*-- Wait for stop scrolling before hiding (Updated) --*/


document.addEventListener('scroll', function(event) {
    event.preventDefault();
    if(checkVisibility(topHead)) {
        navBar.style.display = 'block';
        topButton.style.display = 'none';
    } else { 
        navBar.style.display = 'block';  
        topButton.style.display = 'block'; 
        setTimeout(function() {
        navBar.style.display = 'none';
        topButton.style.display = 'none';
            }, 2500)}
})


// build the nav


// Add class 'active' to section when near top of viewport

document.addEventListener('scroll', function() {
    for(let i = 0; i < headers.length; i++) {
        if(checkVisibility(headers[i])) {
            headers[i].parentElement.classList.add('your-active-class');
        } else {
            headers[i].parentElement.classList.remove('your-active-class'); 
        }
    }
})       
 


// Scroll to top
const toTop = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Set sections as active


