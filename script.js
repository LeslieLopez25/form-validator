const form = document.getElementById("form");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;

function validateForm() {
  // USING CONSTRAINT API
  isValid = form.checkValidity();
  // STYLE MAIN MESSAGE FOR AN ERROR
  message.textContent = "Please fill out all fields.";
  message.style.color = "red";
  messageContainer.style.borderColor = "red";
}

function processFormData(e) {
  e.preventDefault();
  // VALIDATE FORM
  validateForm();
}

// EVENT LISTENER
form.addEventListener("submit", processFormData);
