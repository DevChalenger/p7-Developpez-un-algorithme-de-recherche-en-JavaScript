function mainSearch(data) {
  const recipeList = data;
  const form = document.getElementById("block-search");
  const searchField = document.getElementById("main-search");
  const recipeSection = document.getElementById("recipe-section");
  const errorBlock = document.getElementById("no-content-recipe");
  const keyTag = document.getElementById("block-tag");

  searchField.addEventListener("keyup", (event) => {
    event.preventDefault();
    const input = searchField.value.toLowerCase();
    let array = [];

    for (let i = 0; i < recipeList.length; i++) {
      let element = recipeList[i];

      const ingredient = () => {
        for (let g = 0; g < element.ingredients.length; g++) {
          const ingredients = element.ingredients[g];
          return ingredients.ingredient.toLowerCase().includes(input);
        }
      };

      const ustensil = () => {
        for (let g = 0; g < element.ustensils.length; g++) {
          const ustensils = element.ustensils[g];
          return ustensils.toLowerCase().includes(input);
        }
      };

      const name = element.name.toLowerCase().includes(input);
      const description = element.description.toLowerCase().includes(input);
      const appliance = element.appliance.toLowerCase().includes(input);
      if (name || description || appliance || ingredient() || ustensil()) {
        array.push(element);
      }
    }
    function filterSet(dataFilter) {
      let arrayFilter = [];
      arrayFilter = [];

      keyTag.childNodes.forEach((value) => {
        arrayFilter.push(value.firstChild.textContent.toLowerCase());
      });

      const arrayUnique = [...new Set(arrayFilter)];

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
      console.log(resultFilter);
      displayRecipe(resultFilter);
      sortCategories(resultFilter);
    }
    if (input.length >= 3) {
      if (keyTag.firstChild) {
        document.querySelector(".recipe-section").innerHTML = "";
        filterSet(array);
        console.log(test);
      } else {
        document.querySelector(".recipe-section").innerHTML = "";
        displayRecipe(array);
        sortCategories(array);
      }
    } else {
      if (keyTag.firstChild) {
        document.querySelector(".recipe-section").innerHTML = "";
        filterSet(recipeList);
      } else {
        document.querySelector(".recipe-section").innerHTML = "";
        displayRecipe(recipeList);
        sortCategories(recipeList);
      }
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
