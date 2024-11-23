const header = document.querySelector("header#header");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header#header ul.menu-horizontal li a");
const sangkarBesiCard = document.getElementById("sangkar-besi");
const sangkarBesiCardImage = sangkarBesiCard.querySelector("img");
const sangkarBesiColorOptions = sangkarBesiCard.querySelectorAll("ul li");
const sangkarKayuCard = document.getElementById("sangkar-kayu");
const sangkarKayuCardImage = sangkarKayuCard.querySelector("img");
const sangkarKayuColorOptions = sangkarKayuCard.querySelectorAll("ul li");

// Add or remove the 'header-scrolled' class based on scroll position
document.addEventListener("scroll", () => {
  if (window.scrollY > 75) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});

// Create the IntersectionObserver
const options = {
  root: null, // viewport as root
  threshold: 0.2, // 20% of the section should be visible to consider it active
};

let currentSectionId = "";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const sectionId = entry.target.getAttribute("id");

      console.log("Current Section ID:", sectionId);

      if (currentSectionId !== sectionId) {
        currentSectionId = sectionId;

        // Remove 'text-primary' class from all nav links
        navLinks.forEach((link) => link.classList.remove("text-primary"));

        // Add 'text-primary' class to the active nav link
        const activeLink = document.querySelector(`header#header ul.menu-horizontal li a[href="/#${sectionId}"]`);

        if (activeLink) {
          activeLink.classList.add("text-primary");
        }
      }
    }
  });
}, options);

// Observe each section
sections.forEach((section) => observer.observe(section));

// Add event listeners to the color options
sangkarBesiColorOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const imageSrc = option.className;

    sangkarBesiCardImage.src = `./assets/images/${imageSrc}.jpg`;
  });
});

console.log(sangkarKayuColorOptions);

sangkarKayuColorOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const imageSrc = option.className;

    console.log(imageSrc);

    sangkarKayuCardImage.src = `./assets/images/${imageSrc}.jpg`;
  });
});
