// var navScrolled = document.querySelector("nav");
// var navBg = document.getElementById("nav-bg");
// var ulAbout = document.querySelectorAll(".about-page nav ul li .tab");

// window.onscroll = function () {
//   if (window.pageYOffset > 0) {
//     console.log("paged down");
//     navScrolled.classList.add("scrolled-down");
//     navScrolled.classList.remove("scrolled-up");
//     navBg.classList.add("scrolled-down");
//     navBg.classList.remove("scrolled-up");
//     ulAbout[0].style.color = "white";
//     ulAbout[1].style.color = "white";
//     ulAbout[2].style.color = "white";
//   } else if (window.pageYOffset < 10) {
//     console.log("page up");
//     navScrolled.classList.remove("scrolled-down");
//     navScrolled.classList.add("scrolled-up");
//     navBg.classList.remove("scrolled-down");
//     navBg.classList.add("scrolled-up");
//     ulAbout[0].style.color = "black";
//     ulAbout[1].style.color = "black";
//     ulAbout[2].style.color = "black";
//   }
// };

var navScrolled = document.querySelector("nav");
var navBg = document.getElementById("nav-bg");
var ulAbout = document.querySelectorAll(".about-page nav ul li .tab");

window.onscroll = function () {
  if (window.pageYOffset > 0) {
    console.log("paged down");
    navScrolled.classList.add("scrolled-down");
    navScrolled.classList.remove("scrolled-up");
    navBg.classList.add("scrolled-down");
    navBg.classList.remove("scrolled-up");
    ulAbout.forEach(function (tab) {
      tab.style.color = "white";
    });
  } else if (window.pageYOffset < 10) {
    console.log("page up");
    navScrolled.classList.remove("scrolled-down");
    navScrolled.classList.add("scrolled-up");
    navBg.classList.remove("scrolled-down");
    navBg.classList.add("scrolled-up");

    ulAbout.forEach(function (tab) {
      tab.style.color = "black";
    });
  }
};
