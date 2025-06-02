const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".hotel__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".steps__card", {
  ...scrollRevealOption,
  interval: 500,
});

const inspiration = document.querySelector(".inspiration__wrapper");
const inspirationImages = Array.from(inspiration.children);

inspirationImages.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  inspiration.appendChild(duplicateNode);
});

ScrollReveal().reveal(".property__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".trip__card", {
  ...scrollRevealOption,
  interval: 500,
});


  const modal = document.getElementById("loginModal");
const loginBtn = document.getElementById("loginBtn");
const closeBtn = document.getElementById("closeModal");

// Show Modal
loginBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Hide Modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Hide Modal on Outside Click
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Handle Login Form Submit
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (username.length < 3) {
        alert("Username must be at least 3 characters");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    alert(`Logged in as ${username}`);
    modal.style.display = "none"; // Close modal
});
