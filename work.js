const worksWrap = document.querySelector(".work-section .works");
const workIndex = document.querySelector(".work-section .loader");

setTimeout(worksVisible, 1700);

function worksVisible() {
  worksWrap.classList.remove("invisible");
}

window.addEventListener("scroll", function () {
  // Get the current scroll position
  var scrollPosition = window.scrollY;

  // Get the height of the entire document
  var documentHeight = document.body.scrollHeight;

  // Get the height of the viewport
  var viewportHeight = window.innerHeight;

  // Calculate how far the user is from the bottom of the page
  var distanceToBottom = documentHeight - (scrollPosition + viewportHeight);

  // You can set a threshold if you want
  // For example, if the distance to the bottom is less than 100 pixels, consider it as scrolled to the bottom
  var threshold = 100;

  if (distanceToBottom <= threshold) {
    // User has scrolled to the bottom of the page
    console.log("You've reached the bottom of the page!");
    // You can perform any actions here, like loading more content
    workIndex.classList.add("backward");
    workIndex.classList.remove("forward");
  } else {
    workIndex.classList.remove("backward");
    workIndex.classList.add("forward");
  }
});
