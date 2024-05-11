let aboutPageSections = document.querySelectorAll(".section");

setTimeout(visible, 1500);

function visible() {
  for (let i = 0; i < aboutPageSections.length; i++) {
    aboutPageSections[i].classList.remove("invisible");
  }
}

// Intersection Observer for each section
const sections = document.querySelectorAll(".about-page .bellow");

const observeSection = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("seen", entry.isIntersecting);
      if (entry.isIntersecting) {
        observeSection.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.01,
  }
);

sections.forEach((section) => {
  observeSection.observe(section);
});

/*------------------------------------------*/
/*------------------------------------------*/
/*-- Observer for stakeholders pictures only--*/
/*------------------------------------------*/
/*------------------------------------------*/
// firstpicture
let fStkholders = document.querySelectorAll(
  ".about-page .fourth .stakeholders img:nth-child(1)"
);

const fStake = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("going-right", entry.isIntersecting);
      if (entry.isIntersecting) {
        fStake.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.01,
  }
);

fStkholders.forEach((fstkholder) => {
  fStake.observe(fstkholder);
});

// firstpicture
let sStkholders = document.querySelectorAll(
  ".about-page .fourth .stakeholders img:nth-child(2)"
);

const sStake = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("going-left", entry.isIntersecting);
      if (entry.isIntersecting) {
        sStake.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.01,
  }
);

sStkholders.forEach((fstkholder) => {
  sStake.observe(fstkholder);
});
