const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle?.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

document.querySelectorAll(".dd").forEach(dd => {
  dd.querySelector(".dd__btn")?.addEventListener("click", e => {
    e.stopPropagation();
    dd.classList.toggle("open");
  });
});

document.addEventListener("click", () => {
  document.querySelectorAll(".dd.open").forEach(x => x.classList.remove("open"));
});

const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();
