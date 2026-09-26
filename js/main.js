"use strict";

// 1. Select HTML elements and respond to button click events.
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");
menuToggle.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "Close" : "Menu";
});
navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "Menu";
  });
});

// 2. Update content safely with textContent.
document.getElementById("welcomeBtn").addEventListener("click", () => {
  document.getElementById("welcomeMessage").textContent =
    "Welcome! This message was added by JavaScript. Try editing it in js/main.js.";
});
document.getElementById("year").textContent = new Date().getFullYear();

// 3. Toggle a CSS class and remember only the theme preference.
const themeToggle = document.getElementById("themeToggle");
function applyTheme(isDark) {
  document.body.classList.toggle("dark", isDark);
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
}
try {
  applyTheme(localStorage.getItem("website-starter-theme") === "dark");
} catch {
  applyTheme(false); // The website still works when browser storage is blocked.
}
themeToggle.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark");
  applyTheme(isDark);
  try {
    localStorage.setItem("website-starter-theme", isDark ? "dark" : "light");
  } catch { /* Saving a preference is optional. */ }
});

// 4. Filter cards using an input event and string matching.
const search = document.getElementById("courseSearch");
const cards = [...document.querySelectorAll("[data-course]")];
search.addEventListener("input", () => {
  const query = search.value.trim().toLowerCase();
  let count = 0;
  cards.forEach((card) => {
    const matches = card.dataset.course.includes(query);
    card.hidden = !matches;
    if (matches) count++;
  });
  document.getElementById("searchStatus").textContent = query
    ? (count ? `${count} course${count === 1 ? "" : "s"} found.` : "No courses found. Try web, CRM or Power Platform.")
    : "";
});

// 5. Validate a form. This demo does NOT send or store personal data.
const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
form.addEventListener("input", () => { formStatus.textContent = ""; });
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop the browser from reloading the page.
  const name = document.getElementById("name");
  const message = document.getElementById("message");
  if (!name.value.trim()) {
    formStatus.textContent = "Please enter your name, not just spaces.";
    name.focus();
    return;
  }
  if (message.value.trim().length < 10) {
    formStatus.textContent = "Please write a message with at least 10 characters, excluding outer spaces.";
    message.focus();
    return;
  }
  formStatus.textContent = `Thanks, ${name.value.trim()}! Your entries are valid. This is a demo; no message was sent.`;
});
