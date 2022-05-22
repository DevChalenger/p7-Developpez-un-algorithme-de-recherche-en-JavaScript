function mainSearch(data) {
  const recipeList = data;
  const form = document.getElementById("block-search");
  const searchField = document.getElementById("main-search");
  const recipeSection = document.getElementById("recipe-section");
  const errorBlock = document.getElementById("no-content-recipe");
  const keyTag = document.getElementById("block-tag");
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
    function filterSet(dataFilter) {
      let array = [];
      array = [];
      keyTag.childNodes.forEach((value) => {
        array.push(value.firstChild.textContent.toLowerCase());
      });
      const arrayUnique = [...new Set(array)];

      const resultFilter = dataFilter.filter((element) => {
        return (
          element.ingredients.some((ingredients) =>
            arrayUnique.includes(ingredients.ingredient.toLowerCase())
          ) ||
          arrayUnique.includes(element.appliance.toLowerCase()) ||
          element.ustensils.some((ustensil) =>
            arrayUnique.includes(ustensil.toLowerCase())
          )
        );
      });
      displayRecipe(resultFilter);
    }

    if (input.length >= 3) {
      document.querySelector(".recipe-section").innerHTML = "";
      displayRecipe(result);
      sortCategeories(result);
      if (keyTag.firstChild) {
        document.querySelector(".recipe-section").innerHTML = "";
        console.log("test");
        filterSet(result);
      }
    } else {
      document.querySelector(".recipe-section").innerHTML = "";
      displayRecipe(recipeList);
      sortCategeories(recipeList);
      if (keyTag.firstChild) {
        document.querySelector(".recipe-section").innerHTML = "";
        console.log("test");
        filterSet(recipeList);
      }
    }

    if (!recipeSection.childNodes.length) {
      errorBlock.style.display = "block";
    } else {
      errorBlock.style.display = "none";
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
}
