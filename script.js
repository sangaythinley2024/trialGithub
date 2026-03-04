document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const toggle = document.getElementById("togglePassword");

  toggle.addEventListener("click", function () {
    const type = password.type === "password" ? "text" : "password";
    password.type = type;
    toggle.textContent = type === "password" ? "Show" : "Hide";
    toggle.setAttribute(
      "aria-label",
      type === "password" ? "Show password" : "Hide password",
    );
  });

  function validate() {
    let ok = true;
    emailError.textContent = "";
    passwordError.textContent = "";

    if (!email.value) {
      emailError.textContent = "Please enter your email.";
      ok = false;
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
      emailError.textContent = "Please enter a valid email address.";
      ok = false;
    }

    if (!password.value) {
      passwordError.textContent = "Please enter your password.";
      ok = false;
    } else if (password.value.length < 6) {
      passwordError.textContent = "Password must be at least 6 characters.";
      ok = false;
    }

    return ok;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!validate()) return;

    // Example: replace with real submission (fetch/AJAX) in production
    alert("Form looks valid — implement server submission.");
    form.reset();
  });
});
