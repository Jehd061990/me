/*----------------------------------------*/
/*----------------------------------------*/
/*---------------HERO PAGE---------------*/
/*----------------------------------------*/
/*----------------------------------------*/

const mainBanner = document.querySelector(".banners .main-banner");
const cssBanner = document.querySelector(".banners .css-banner");
const jsBanner = document.querySelector(".banners .js-banner");
const htmlBanner = document.querySelector(".banners .html-banner");
const reactBanner = document.querySelector(".banners .react-banner");

// hover on css logo
const cssImg = document.getElementById("cssImage");
const cssBg = document.querySelector(".css-bg");
const heroBody = document.querySelector("body");

// Select the css root element
const styleRoot = document.documentElement;

cssImg.addEventListener("mouseenter", () => {
  cssBg.classList.add("bg-effect");
  cssBg.classList.add("item-none-blur");
  cssBg.classList.remove("item-blur");
  styleRoot.style.setProperty("--grey", "#336dfd");
  styleRoot.style.setProperty("--white", "#fdc333");
  // banners transition
  mainBanner.classList.add("fade-in");
  mainBanner.classList.remove("fade-out");
  cssBanner.style.display = "block";
  cssBanner.classList.add("fade-out");
  cssBanner.classList.remove("fade-in");
  htmlBanner.classList.remove("fade-out");
  jsBanner.classList.remove("fade-out");
  reactBanner.classList.remove("fade-out");
});

cssImg.addEventListener("mouseleave", () => {
  cssBg.classList.remove("bg-effect");
  cssBg.classList.remove("item-none-blur");
  cssBg.classList.add("item-blur");
  styleRoot.style.setProperty("--grey", "#585858");
  styleRoot.style.setProperty("--white", "#fff");
  // banners transition
  mainBanner.classList.remove("fade-in");
  mainBanner.classList.add("fade-out");
  cssBanner.classList.add("fade-in");
  cssBanner.classList.remove("fade-out");
});

// hover on js logo
const jsImg = document.getElementById("jsImage");
const jsBg = document.querySelector(".js-bg");

jsImg.addEventListener("mouseenter", () => {
  jsBg.classList.add("bg-effect");
  jsBg.classList.add("item-none-blur");
  jsBg.classList.remove("item-blur");
  styleRoot.style.setProperty("--orange", "#B33CFD");
  styleRoot.style.setProperty("--grey", "#5D0D59");
  styleRoot.style.setProperty("--black", "#fff");
  styleRoot.style.setProperty("--white", "#B33CFD");

  // banners transition
  mainBanner.classList.add("fade-in");
  mainBanner.classList.remove("fade-out");
  jsBanner.style.display = "block";
  jsBanner.classList.add("fade-out");
  jsBanner.classList.remove("fade-in");
  cssBanner.classList.remove("fade-out");
  htmlBanner.classList.remove("fade-out");
  reactBanner.classList.remove("fade-out");
});

jsImg.addEventListener("mouseleave", () => {
  jsBg.classList.remove("bg-effect");
  jsBg.classList.remove("item-none-blur");
  jsBg.classList.add("item-blur");
  styleRoot.style.setProperty("--orange", "#fdc333");
  styleRoot.style.setProperty("--grey", "#585858");
  styleRoot.style.setProperty("--black", "#000000");
  styleRoot.style.setProperty("--white", "#fff");

  // banners trnasition
  mainBanner.classList.remove("fade-in");
  mainBanner.classList.add("fade-out");
  jsBanner.classList.add("fade-in");
  jsBanner.classList.remove("fade-out");
});

// hover on html logo
const htmlImg = document.getElementById("htmlImage");
const htmlBg = document.querySelector(".html-bg");

htmlImg.addEventListener("mouseenter", () => {
  htmlBg.classList.add("bg-effect");
  htmlBg.classList.add("item-none-blur");
  htmlBg.classList.remove("item-blur");
  // styleRoot.style.setProperty("--grey", "#FF5722");
  styleRoot.style.setProperty("--orange", "#FF5722");
  styleRoot.style.setProperty("--white", "#FF5722");
  styleRoot.style.setProperty("--grey", "#75240A");
  // styleRoot.style.setProperty("--black", "#fff");

  // banners transition
  mainBanner.classList.add("fade-in");
  mainBanner.classList.remove("fade-out");
  htmlBanner.style.display = "block";
  htmlBanner.classList.add("fade-out");
  htmlBanner.classList.remove("fade-in");
  cssBanner.classList.remove("fade-out");
  jsBanner.classList.remove("fade-out");
  reactBanner.classList.remove("fade-out");
});

htmlImg.addEventListener("mouseleave", () => {
  htmlBg.classList.remove("bg-effect");
  htmlBg.classList.remove("item-none-blur");
  htmlBg.classList.add("item-blur");
  styleRoot.style.setProperty("--grey", "#585858");
  styleRoot.style.setProperty("--orange", "#fdc333");
  styleRoot.style.setProperty("--white", "#fff");
  // styleRoot.style.setProperty("--grey", "#585858");
  // styleRoot.style.setProperty("--black", "#000000");
  // banners transition
  mainBanner.classList.remove("fade-in");
  mainBanner.classList.add("fade-out");
  htmlBanner.classList.add("fade-in");
  htmlBanner.classList.remove("fade-out");
});

// hover on react logo
const reactImg = document.getElementById("reactImage");
const reactBg = document.querySelector(".react-bg");

reactImg.addEventListener("mouseenter", () => {
  reactBg.classList.add("bg-effect");
  reactBg.classList.add("item-none-blur");
  reactBg.classList.remove("item-blur");
  styleRoot.style.setProperty("--grey", "#027272");
  styleRoot.style.setProperty("--orange", "#02FBA1");
  styleRoot.style.setProperty("--white", "#02FBA1");

  // banners transition
  mainBanner.classList.add("fade-in");
  mainBanner.classList.remove("fade-out");
  reactBanner.style.display = "block";
  reactBanner.classList.add("fade-out");
  reactBanner.classList.remove("fade-in");
  cssBanner.classList.remove("fade-out");
  htmlBanner.classList.remove("fade-out");
  jsBanner.classList.remove("fade-out");
});

reactImg.addEventListener("mouseleave", () => {
  reactBg.classList.remove("bg-effect");
  reactBg.classList.remove("item-none-blur");
  reactBg.classList.add("item-blur");
  styleRoot.style.setProperty("--grey", "#585858");
  styleRoot.style.setProperty("--orange", "#fdc333");
  styleRoot.style.setProperty("--white", "#fff");

  // banners trnasition
  mainBanner.classList.remove("fade-in");
  mainBanner.classList.add("fade-out");
  reactBanner.classList.add("fade-in");
  reactBanner.classList.remove("fade-out");
});

// hover on rotate class name
const reactRotate = document.querySelector(".rotate");
const reactFirstMoveUp = document.querySelector(
  ".code-bg-container img:nth-child(1)"
);

const reactSecondMoveUp = document.querySelector(
  ".code-bg-container img:nth-child(2)"
);

reactRotate.addEventListener("mouseenter", () => {
  reactFirstMoveUp.classList.add("first-move-up");
  reactSecondMoveUp.classList.add("second-move-up");
});

reactRotate.addEventListener("mouseleave", () => {
  reactFirstMoveUp.classList.remove("first-move-up");
  reactSecondMoveUp.classList.remove("second-move-up");
});
