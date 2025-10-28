// Navigation menu toggle for mobile
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth scroll highlight active link
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let fromTop = window.scrollY + 80;
  links.forEach(link => {
    const section = document.querySelector(link.getAttribute("href"));
    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    }
  });
});

// Simple contact form message
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you, your message has been sent!");
  e.target.reset();
});
