const test = document.getElementById("bars");

test.addEventListener("click", () => {
  let nav = document.querySelector("header");
  nav.getAttribute("class") === ""
    ? nav.setAttribute("class", "toggle-open")
    : nav.setAttribute("class", "");
});
