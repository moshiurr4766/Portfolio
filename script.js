// Navigation menu toggle for mobile
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (navLinks.classList.contains("active") && 
      !e.target.closest(".nav-links") && 
      !e.target.closest(".menu-toggle")) {
    navLinks.classList.remove("active");
  }
});

// Smooth scroll highlight active link
const links = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === entry.target.id) {
          link.classList.add("active");
        }
      });
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// Skills animation on scroll
const skillBars = document.querySelectorAll(".bar div");
const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.parentElement.parentElement.querySelector("span").textContent.includes("Basic") ? "55%" : "85%";
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => skillsObserver.observe(bar));

// Contact form handling
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const submitBtn = contactForm.querySelector("button[type='submit']");
  const originalText = submitBtn.textContent;
  submitBtn.textContent = "Sending...";
  submitBtn.disabled = true;

  // Simulate form submission (replace with actual API endpoint)
  try {
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Show success message
    const successMessage = document.createElement("div");
    successMessage.className = "form-message success";
    successMessage.textContent = "Thank you! Your message has been sent successfully.";
    contactForm.appendChild(successMessage);
    
    // Reset form
    contactForm.reset();
    
    // Remove success message after 5 seconds
    setTimeout(() => successMessage.remove(), 5000);
  } catch (error) {
    // Show error message
    const errorMessage = document.createElement("div");
    errorMessage.className = "form-message error";
    errorMessage.textContent = "Oops! Something went wrong. Please try again.";
    contactForm.appendChild(errorMessage);
    
    // Remove error message after 5 seconds
    setTimeout(() => errorMessage.remove(), 5000);
  } finally {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
});

// Add some CSS for form messages
const style = document.createElement("style");
style.textContent = `
  .form-message {
    padding: 10px;
    border-radius: 8px;
    margin-top: 15px;
    text-align: center;
  }
  .form-message.success {
    background: #059669;
    color: white;
  }
  .form-message.error {
    background: #dc2626;
    color: white;
  }
`;
document.head.appendChild(style);
