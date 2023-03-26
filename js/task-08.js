const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;

  if (email === "" || password === "") {
    alert("Wypełnij wszystkie pola!");
  } else {
    const formData = { email, password };
    console.log(formData);
    loginForm.reset();
  }
});
