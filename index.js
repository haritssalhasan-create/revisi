

const btn = document.getElementById("dropdownBtn");
const menu = document.getElementById("dropdownMenu");
const icon = document.getElementById("dropdownIcon");

btn.addEventListener("click", (e) => {
  e.stopPropagation();
  const open = menu.classList.contains("opacity-100");

  if (open) {
    menu.classList.remove("opacity-100", "scale-100", "pointer-events-auto");
    menu.classList.add("opacity-0", "scale-95", "pointer-events-none");
    icon.classList.remove("rotate-180");
  } else {
    menu.classList.remove("opacity-0", "scale-95", "pointer-events-none");
    menu.classList.add("opacity-100", "scale-100", "pointer-events-auto");
    icon.classList.add("rotate-180");
  }
});

document.addEventListener("click", () => {
  menu.classList.remove("opacity-100", "scale-100", "pointer-events-auto");
  menu.classList.add("opacity-0", "scale-95", "pointer-events-none");
  icon.classList.remove("rotate-180");
});



const hamburger = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  mobileMenu.classList.toggle("hidden");
});

document.addEventListener("click", () => {
  if (!mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.add("hidden");
  }
});
