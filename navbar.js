let navScrolled = document.querySelector("nav");
let navBg = document.getElementById("nav-bg");
let ulAbout = document.querySelectorAll(".about-page nav ul li .tab");
let navUl = document.querySelector("nav ul");
let navBrand = document.querySelector("nav .brand");
let mobileNavBtn = document.getElementById("toggleNav");
let scrollCheck;

// nav Expand Button
const expandNavBtn = document.querySelector("nav .nav-btn");
const expandNavTopBar = document.querySelector("nav .nav-btn .top");
const expandNavTopBarSpan = document.querySelector("nav .nav-btn .top span");
const expandNavMidBar = document.querySelector("nav .nav-btn .mid");
const expandNavBotBar = document.querySelector("nav .nav-btn .bot");
const expandNavBotBarSpan = document.querySelector("nav .nav-btn .bot span");

let enableScroll = function () {
  if (window.pageYOffset > 0) {
    // console.log("paged down");
    navScrolled.classList.add("scrolled-down");
    navScrolled.classList.remove("scrolled-up");
    navBg.classList.add("scrolled-down");
    navBg.classList.remove("scrolled-up");
    ulAbout.forEach(function (tab) {
      tab.style.color = "white";
    });

    scrollCheck = "1";
  } else {
    // console.log("page up");
    navScrolled.classList.remove("scrolled-down");
    navScrolled.classList.add("scrolled-up");
    navBg.classList.remove("scrolled-down");
    navBg.classList.add("scrolled-up");

    ulAbout.forEach(function (tab) {
      tab.style.color = "black";
    });
  }

  scrollCheck;
};

console.log(scrollCheck);

// check if you clicked burger button
function checkNavBtn(navUl, classNm) {
  [];
  return navUl.classList.contains(classNm);
}

// check if you click burger button while scrolled-down or scrolled-up
function checkScrolled(navScrolled, classNm) {
  return navScrolled.classList.contains(classNm);
}
//
// let scrollDisable = false
let scrollDisabled = false;

window.onscroll = enableScroll;

// Navbar Expand Button
function navBtn() {
  navScrolled.classList.toggle("clicked");
  navBg.classList.toggle("clicked");
  navBrand.classList.toggle("clicked");

  if (scrollDisabled) {
    console.log("disable");
    window.onscroll = enableScroll;
    expandNavTopBar.classList.remove("active");
    expandNavTopBarSpan.classList.remove("active");
    expandNavMidBar.classList.remove("active");
    expandNavBotBar.classList.remove("active");
    expandNavBotBarSpan.classList.remove("active");

    expandNavBtn.classList.remove("active");
    expandNavTopBarSpan.classList.add("deactive");
    expandNavMidBar.classList.add("deactive");
    expandNavBotBar.classList.add("deactive");
    expandNavBotBarSpan.classList.add("deactive");
  } else {
    console.log("enable");
    window.onscroll = null;

    expandNavTopBarSpan.classList.remove("deactive");
    expandNavMidBar.classList.remove("deactive");
    expandNavBotBar.classList.remove("deactive");
    expandNavBotBarSpan.classList.remove("deactive");

    expandNavBtn.classList.add("active");
    expandNavTopBar.classList.add("active");
    expandNavTopBarSpan.classList.add("active");
    expandNavMidBar.classList.add("active");
    expandNavBotBar.classList.add("active");
    expandNavBotBarSpan.classList.add("active");
  }

  scrollDisabled = !scrollDisabled;

  // window.onscroll = null;

  if (checkScrolled(navScrolled, "scrolled-down")) {
    navScrolled.classList.remove("scrolled-down");
  } else {
    navScrolled.classList.remove("scrolled-up");
  }

  if (checkNavBtn(navUl, "drop")) {
    navUl.classList.remove("drop");
    navUl.classList.add("lift");

    navBg.classList.remove("scrolled-down");
    navBg.classList.add("scrolled-up");
  } else {
    navUl.classList.add("drop");
    navUl.classList.remove("lift");
    navBg.classList.add("scrolled-down");
    navBg.classList.remove("scrolled-up");
  }
}
