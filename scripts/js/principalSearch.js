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
      const keyTagText = document.querySelectorAll(".key-tag-text");
      const textTag = document.querySelectorAll(".text-tag");
      textTag.forEach((text) => {
        if (dataFilter.length == 1) {
          text.classList.add("disabled");
        } else {
          text.classList.remove("disabled");
        }
        keyTag.childNodes.forEach((value) => {
          if (value.firstChild.textContent == text.textContent) {
            text.classList.add("disabled");
          } else {
            text.classList.remove("disabled");
          }
        });
      });
      let array = Array.from(keyTagText);

      console.log(array);
      const resultFilter = dataFilter.filter((element) => {
        return array.every((filt) => {
          const filterText = filt.textContent.toLowerCase();

          return (
            element.ingredients.some((ingredients) => {
              return ingredients.ingredient.toLowerCase().includes(filterText);
            }) ||
            element.appliance.toLowerCase().includes(filterText) ||
            element.ustensils.some((ustensil) => {
              return ustensil.toLowerCase().includes(filterText);
            })
          );
        });
      });
      displayRecipe(resultFilter);
      sortCategeories(resultFilter, resultFilter);
    }
    if (input.length >= 3) {
      if (keyTag.firstChild) {
        document.querySelector(".recipe-section").innerHTML = "";
        filterSet(array);
      } else {
        document.querySelector(".recipe-section").innerHTML = "";
        displayRecipe(array);
        sortCategeories(array, array);
      }
    } else {
      document.querySelector(".recipe-section").innerHTML = "";
      keyTag.innerHTML = "";
      displayRecipe(recipeList);
      sortCategeories(recipeList, recipeList);
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
