const categoriesList = document.querySelector("#categories");
const categoriesItems = categoriesList.querySelectorAll("li.item");
console.log(`Liczba kategorii: ${categoriesItems.length}`);

categoriesItems.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const categoryElement = item.querySelectorAll("li");

  console.log(`Category: ${categoryName}, 
Elements: ${categoryElement.length}`);
});
