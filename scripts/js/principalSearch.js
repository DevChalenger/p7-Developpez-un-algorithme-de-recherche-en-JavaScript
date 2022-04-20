function mainSearch(data) {
  const recipeList = data;
  const form = document.getElementById("block-search");
  const searchField = document.getElementById("main-search");
  const recipeSection = document.getElementById("recipe-section");
  const errorBlock = document.getElementById("no-content-recipe");
  console.log(recipeSection);
  searchField.addEventListener("keyup", (event) => {
    event.preventDefault();
    const input = searchField.value.toLowerCase();
    const result = recipeList.filter((element) => {
      return (
        element.name.toLowerCase().includes(input) ||
        element.description.toLowerCase().includes(input) ||
        element.appliance.toLowerCase().includes(input) ||
        element.ingredients.forEach((ingredients) => {
          ingredients.ingredient.toLowerCase().includes(input);
        }) ||
        element.ustensils.forEach((ustensil) => {
          ustensil.toLowerCase().includes(input);
        })
      );
    });

    if (input.length >= 3) {
      console.log(result);
      document.querySelector(".recipe-section").innerHTML = "";
      displayRecipe(result);
      searchField.removeEventListener("keyup", () => {});
    }
    if (input.length < 3) {
      document.querySelector(".recipe-section").innerHTML = "";
      displayRecipe(recipeList);
    }
    if (recipeSection.childNodes.length == 0) {
      errorBlock.style.display = "block";
    } else {
      errorBlock.style.display = "none";
    }
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
}
