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
        filterSet(result);
      } else {
        document.querySelector(".recipe-section").innerHTML = "";
        displayRecipe(result);
        sortCategeories(result, result);
      }
    } else {
      document.querySelector(".recipe-section").innerHTML = "";
      keyTag.innerHTML = "";
      displayRecipe(recipeList);
      sortCategeories(recipeList, recipeList);
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
