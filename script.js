// NAV TOGGLE

const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  toggle.setAttribute("aria-expanded", navLinks.classList.contains("active"));
});

// ESC CLOSE MENU

document.addEventListener("keydown", e => {
  if (e.key === "Escape") navLinks.classList.remove("active");
});

// SMOOTH SCROLL

document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
    navLinks.classList.remove("active");
  });
});

// ACTIVE LINK

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    if (pageYOffset >= section.offsetTop - 150) {
      current = section.id;
    }
  });

  links.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// SCROLL REVEAL

const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// DARK MODE

const darkToggle = document.getElementById("darkToggle");

if (
  localStorage.theme === "dark" ||
  (!localStorage.theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.body.classList.add("dark");
}

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.theme = document.body.classList.contains("dark") ? "dark" : "light";
});

// CONTACT FORM

const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      msg.textContent = "Please fill all fields.";
      msg.style.color = "#b91c1c";
      return;
    }

    if (!email.includes("@")) {
      msg.textContent = "Invalid email address.";
      msg.style.color = "#b91c1c";
      return;
    }

    msg.textContent = "Message sent successfully!";
    msg.style.color = "#1e3a8a";
    form.reset();
  });
}
