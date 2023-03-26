const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", function () {
  const expectedLength = validationInput.getAttribute("data-length");

  if (validationInput.value.length === parseInt(expectedLength)) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
