// Mobile menu toggle
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle?.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// Dropdown menus
document.querySelectorAll(".dd").forEach(dd => {
  dd.querySelector(".dd__btn")?.addEventListener("click", e => {
    e.stopPropagation();
    dd.classList.toggle("open");
  });
});

// Close dropdowns on outside click
document.addEventListener("click", () => {
  document.querySelectorAll(".dd.open").forEach(x => x.classList.remove("open"));
});

// Footer year
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();
