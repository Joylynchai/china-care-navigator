const header = document.querySelector(".site-header");
const form = document.querySelector("#intake-form");
const status = document.querySelector("#form-status");

const updateHeader = () => {
  header.dataset.elevated = window.scrollY > 12 ? "true" : "false";
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    status.textContent = "Please complete the required fields before requesting a plan.";
    form.reportValidity();
    return;
  }

  const formData = new FormData(form);
  const name = String(formData.get("name") || "").trim().split(" ")[0] || "there";
  status.textContent = `Thanks, ${name}. This demo form is ready to connect to a CRM or email workflow.`;
  form.reset();
});
