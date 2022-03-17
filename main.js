// Hamburger Menu
const hamburger = document.querySelector(".hamburger-container");
let toggle = false;





hamburger.addEventListener("click", function () {
    const hamburger = document.querySelector(".hamburger");
    const navList = document.querySelector(".nav-list");
    const navBar = document.querySelector(".navbar");
    toggle = !toggle;
    let srcHam = "./images/icon-menu.png";
    let srcClose = "./images/icon-close.png";
    hamburger.src = toggle ? srcClose : srcHam;
    navList.classList.toggle("active");
    navBar.classList.toggle("active");
    logoContainer.classList.toggle('active');
  
  
    //below code will stop body from scrolling when menu is open
    document.body.style.position = toggle ? 'fixed' :'static';
  
  
  });