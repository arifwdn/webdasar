const test = document.getElementById("bars");

test.addEventListener("click", () => {
  let nav = document.querySelector("header");
  nav.getAttribute("class") === ""
    ? nav.setAttribute("class", "toggle-open")
    : nav.setAttribute("class", "");
});

const scrollBtn = document.getElementById("scrollup");
window.addEventListener("scroll", () => {
  window.scrollY > 700
    ? (scrollBtn.style.transform = "scale(1)")
    : (scrollBtn.style.transform = "scale(0)");
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
