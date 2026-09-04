const form = document.querySelector("#contact-form");
const status = document.querySelector(".form-status");

form?.addEventListener("submit", async event => {
    try {
  event.preventDefault();
  if (!form.checkValidity()) { status.textContent = "Please fill in all fields correctly."; form.reportValidity(); return; }
  const response = await fetch("components/thank-you-popup.html");
  document.querySelector("#thank-you-slot").innerHTML = await response.text();
  const popup = document.querySelector("#thank-you-popup");
  popup.hidden = false;
  popup.querySelector(".thank-you-close").onclick = () => popup.hidden = true;
  popup.querySelector(".thank-you-back").onclick = () => popup.hidden = true;
  status.textContent = "";
  form.reset();
    } catch (error) {
        console.error(error);
        if (status) status.textContent = "Something went wrong. Please try again.";
    }
});
