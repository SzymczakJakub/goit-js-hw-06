const list = document.querySelector("#ingredients");

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsContainer = document.createDocumentFragment();

ingredients.forEach((ingredient) => {
  let element = document.createElement("li");
  element.textContent = ingredient;
  element.classList.add("item");
  ingredientsContainer.appendChild(element);
});

list.appendChild(ingredientsContainer);
