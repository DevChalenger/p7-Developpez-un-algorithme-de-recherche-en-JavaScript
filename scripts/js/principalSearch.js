function mainSearch(data) {
  const recipeList = data;
  const form = document.getElementById("block-search");
  const searchField = document.getElementById("main-search");
  const recipeSection = document.getElementById("recipe-section");
  const errorBlock = document.getElementById("no-content-recipe");

  searchField.addEventListener("keyup", (event) => {
    event.preventDefault();
    const input = event.target.value.toLowerCase();
    console.log(input);
    const result = recipeList.filter((element) => {
      return (
        element.description.toLowerCase().includes(input) ||
        element.appliance.toLowerCase().includes(input) ||
        element.name.toLowerCase().startsWith(input) ||
        element.ingredients.some((ingredient) =>
          ingredient.ingredient.toLowerCase().includes(input)
        ) ||
        element.ustensils.some((ustensil) =>
          ustensil.toLowerCase().includes(input)
        )
      );
    });

    if (input.length >= 3) {
      document.querySelector(".recipe-section").innerHTML = "";
      console.log(result);
      displayRecipe(result);
      sortCategeories(result);
      console.log(result);
      searchField.removeEventListener("keyup", () => {});
    }
    if (input.length < 3) {
      document.querySelector(".recipe-section").innerHTML = "";

      displayRecipe(recipeList);
      sortCategeories(recipeList);
    }
    /*  if (input.length < 1) {
      document.getElementById("block-tag").innerHTML = "";
    } */
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
