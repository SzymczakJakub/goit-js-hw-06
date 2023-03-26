const list = document.querySelector("#ingredients");

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.forEach((ingredient) => {
  let element = document.createElement("li");
  element.textContent = ingredient;
  element.classList.add("item");
  list.appendChild(element);
});
