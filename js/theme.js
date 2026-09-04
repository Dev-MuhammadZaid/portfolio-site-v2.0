document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".theme-toggle");
  if (localStorage.getItem("portfolio-theme") === "light") document.body.classList.add("light");

  function updateIcon() {
    if (button) button.textContent = document.body.classList.contains("light") ? "☀" : "☾";
  }
  updateIcon();
  button?.addEventListener("click", () => {
    document.body.classList.toggle("light");
    localStorage.setItem("portfolio-theme", document.body.classList.contains("light") ? "light" : "dark");
    updateIcon();
  });
});
