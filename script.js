// MOBILE NAV TOGGLE

const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// SMOOTH SCROLLING

document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });

    navLinks.classList.remove("active");
  });
});

// ACTIVE LINK ON SCROLL

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  links.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === "#" + current) {
      a.classList.add("active");
    }
  });
});

// CONTACT FORM VALIDATION

const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    msg.textContent = "Please fill all fields.";
    msg.style.color = "red";
    return;
  }

  if (!email.includes("@")) {
    msg.textContent = "Please enter a valid email.";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "Message sent successfully!";
  msg.style.color = "green";
  form.reset();
});
