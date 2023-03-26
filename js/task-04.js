const counterValue = document.querySelector("#value");
let currentValue = 0;

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.action === "increment") {
      currentValue++;
    } else if (button.dataset.action === "decrement") {
      currentValue--;
    }
    counterValue.textContent = currentValue;
  });
});
