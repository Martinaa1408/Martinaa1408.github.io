// Year
document.addEventListener("DOMContentLoaded", () => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});

// Mobile nav toggle
(() => {
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Close menu when clicking a link (mobile)
  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => menu.classList.remove("open"));
  });
})();

// Dropdowns: click to open, click outside to close
(() => {
  const dds = document.querySelectorAll(".dd");
  if (!dds.length) return;

  dds.forEach(dd => {
    const btn = dd.querySelector(".dd__btn");
    if (!btn) return;

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      // close others
      dds.forEach(x => { if (x !== dd) x.classList.remove("open"); });
      dd.classList.toggle("open");
    });
  });

  document.addEventListener("click", () => {
    dds.forEach(dd => dd.classList.remove("open"));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") dds.forEach(dd => dd.classList.remove("open"));
  });
})();
