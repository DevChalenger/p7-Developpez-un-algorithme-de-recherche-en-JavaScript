class filterFactory {
  constructor(ingredient, ustensil, appliance, data) {
    new filterDom();

    new ingredientDom(ingredient, data);

    new ustensilDom(ustensil, data);

    new applianceDom(appliance, data);

    filterTag(data);
  }
}

class filterDom {
  constructor() {
    const buttonFilter = document.querySelectorAll(".btn-filter");
    const blockFilter = document.querySelectorAll(".filter-sort");

    for (let i = 0; i < buttonFilter.length; i++) {
      const titleText = ["Ingredients", "Appareils", "Ustensiles"];
      const button = buttonFilter[i];
      button.innerHTML = "";
      const content = document.querySelectorAll(".content");

      const filterTitle = document.querySelectorAll(".filter-title");
      filterTitle[i].innerHTML = "";
      const iconOpen = document.createElement("i");
      iconOpen.classList.add("fa-solid", "fa-angle-down");
      const iconClose = document.createElement("i");
      iconClose.classList.add("fa-solid", "fa-angle-up");
      iconClose.classList.add("button-hidden");
      button.appendChild(iconOpen);
      button.appendChild(iconClose);
      const filterSearch = document.createElement("input");
      filterSearch.type = "hidden";
      filterSearch.classList.add("search-filter");

      filterSearch.setAttribute("id", `${titleText[i] + "-search"}`);
      const titleFilter = document.createElement("span");
      titleFilter.textContent = titleText[i];

      filterTitle[i].appendChild(filterSearch);
      filterTitle[i].appendChild(titleFilter);

      content[i].classList.add("hide-content");

      blockFilter[i].classList.add("filter-sort-close");
      if (iconOpen.classList.contains("button-hidden")) {
        blockFilter[i].classList.add("filter-sort-open");
        content[i].classList.add("show-content");
      } else {
        blockFilter[i].classList.remove("filter-sort-open");
        content[i].classList.remove("show-content");
      }
      button.addEventListener("click", () => {
        if (iconClose.classList.contains("button-hidden")) {
          iconClose.classList.remove("button-hidden");
          blockFilter[i].classList.remove("filter-sort-close");
          content[i].classList.remove("hide-content");
          iconOpen.classList.add("button-hidden");
          content[i].classList.add("show-content");
          blockFilter[i].classList.add("filter-sort-open");
          filterSearch.placeholder = `Recherchez un ${titleText[
            i
          ].toLowerCase()}`;
          filterSearch.type = "text";
          titleFilter.textContent = "";
        } else {
          iconOpen.classList.remove("button-hidden");
          content[i].classList.remove("show-content");
          blockFilter[i].classList.remove("filter-sort-open");
          filterSearch.removeAttribute("placeholder");
          iconClose.classList.add("button-hidden");
          content[i].classList.add("hide-content");

          blockFilter[i].classList.add("filter-sort-close");
          filterSearch.type = "hidden";
          titleFilter.textContent = titleText[i];
        }
      });
    }
  }
}
class ingredientDom {
  constructor(ingredients, data) {
    const blockIngredient = document.getElementById("ingredient-content");
    const searchIngredient = document.getElementById("Ingredients-search");
    const tagBlock = document.getElementById("block-tag");

    function ingredientCreate(element) {
      const capitalize = element.charAt(0).toUpperCase() + element.slice(1);
      const text = document.createElement("p");
      text.classList.add("text-tag");
      text.textContent = capitalize;

      text.addEventListener("click", () => {
        const ingredientTag = document.createElement("div");
        ingredientTag.classList.add("tag-block-key", "tag-block-ingredients");
        const ingredientTagText = document.createElement("span");
        ingredientTagText.classList.add("key-tag-text");
        const deleteTag = document.createElement("i");
        deleteTag.addEventListener("click", () => {
          ingredientTag.remove();
        });
        deleteTag.classList.add("fa-regular", "fa-circle-xmark", "delete-tag");
        ingredientTagText.textContent = capitalize;
        ingredientTag.appendChild(ingredientTagText);
        ingredientTag.appendChild(deleteTag);
        tagBlock.appendChild(ingredientTag);
      });

      blockIngredient.appendChild(text);
    }
    blockIngredient.innerHTML = "";
    searchIngredient.addEventListener("keyup", () => {
      const input = searchIngredient.value.toLowerCase();

      ingredients
        .filter((ingredient) => {
          blockIngredient.innerHTML = "";

          return ingredient.includes(input);
        })
        .forEach((element) => {
          ingredientCreate(element);
          disableTag(data);
        });
      filterTag(data);
    });
    ingredients.forEach((element) => {
      ingredientCreate(element);
    });
  }
}
class applianceDom {
  constructor(appliances, data) {
    const blockAplliance = document.getElementById("appliance-content");
    const searchAplliance = document.getElementById("Appareils-search");
    const tagBlock = document.getElementById("block-tag");

    function applianceCreate(element) {
      let capitalize = element.charAt(0).toUpperCase() + element.slice(1);
      const text = document.createElement("p");
      text.classList.add("text-tag");
      text.textContent = capitalize;
      text.addEventListener("click", () => {
        const applianceTag = document.createElement("div");
        applianceTag.classList.add("tag-block-key", "tag-block-appliances");
        const applianceTagText = document.createElement("span");
        applianceTagText.classList.add("key-tag-text");
        const deleteTag = document.createElement("i");
        deleteTag.classList.add("fa-regular", "fa-circle-xmark", "delete-tag");
        deleteTag.addEventListener("click", () => {
          applianceTag.remove();
        });

        applianceTagText.textContent = capitalize;
        applianceTag.appendChild(applianceTagText);
        applianceTag.appendChild(deleteTag);
        tagBlock.appendChild(applianceTag);
      });

      blockAplliance.appendChild(text);
    }
    blockAplliance.innerHTML = "";
    searchAplliance.addEventListener("keyup", () => {
      const input = searchAplliance.value.toLowerCase();
      appliances
        .filter((appliance) => {
          blockAplliance.innerHTML = "";

          return appliance.includes(input);
        })
        .forEach((element) => {
          applianceCreate(element);
          disableTag(data);
        });
      filterTag(data);
    });
    appliances.forEach((element) => {
      applianceCreate(element);
    });
  }
}
class ustensilDom {
  constructor(ustensils, data) {
    const blockUstensil = document.getElementById("ustensiles-content");
    const searchUstensil = document.getElementById("Ustensiles-search");
    const tagBlock = document.getElementById("block-tag");

    function ustensilCreate(element) {
      let capitalize = element.charAt(0).toUpperCase() + element.slice(1);
      const text = document.createElement("p");
      text.classList.add("text-tag");
      text.textContent = capitalize;
      text.addEventListener("click", () => {
        const ustensilTag = document.createElement("div");
        ustensilTag.classList.add("tag-block-key", "tag-block-ustensils");
        const ustensilTagText = document.createElement("span");
        ustensilTagText.classList.add("key-tag-text");
        const deleteTag = document.createElement("i");
        deleteTag.classList.add("fa-regular", "fa-circle-xmark", "delete-tag");
        deleteTag.addEventListener("click", () => {
          ustensilTag.remove();
        });
        ustensilTagText.textContent = capitalize;
        ustensilTag.appendChild(ustensilTagText);
        ustensilTag.appendChild(deleteTag);
        tagBlock.appendChild(ustensilTag);
      });
      blockUstensil.appendChild(text);
    }

    blockUstensil.innerHTML = "";
    searchUstensil.addEventListener("keyup", () => {
      blockUstensil.innerHTML = "";
      const input = searchUstensil.value.toLowerCase();
      ustensils
        .filter((ustensil) => {
          return ustensil.includes(input);
        })
        .forEach((element) => {
          ustensilCreate(element);
          disableTag(data);
        });
      filterTag(data);
    });

    ustensils.forEach((element) => {
      ustensilCreate(element);
    });
  }
}

function filterTag(data) {
  const recipeList = data;

  const textTag = document.querySelectorAll(".text-tag");

  textTag.forEach((text) => {
    text.addEventListener("click", () => {
      document.querySelector(".recipe-section").innerHTML = "";
      const keyTag = document.querySelectorAll(".key-tag-text");
      let array = Array.from(keyTag);

      const result = recipeList.filter((element) => {
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

      const deleteTag = document.querySelectorAll(".delete-tag");
      for (let i = 0; i < deleteTag.length; i++) {
        const tagDeleted = deleteTag[i];

        tagDeleted.addEventListener("click", (event) => {
          event.preventDefault();
          document.querySelector(".recipe-section").innerHTML = "";

          text.classList.remove("disabled");
          let selectValue = tagDeleted.parentNode.firstChild;
          let myIndex = array.indexOf(selectValue);

          if (myIndex !== -1) {
            array.splice(myIndex, 1);
          }

          const result = recipeList.filter((element) => {
            return array.every((filt) => {
              const filterText = filt.textContent.toLowerCase();

              return (
                element.ingredients.some((ingredients) => {
                  return ingredients.ingredient
                    .toLowerCase()
                    .includes(filterText);
                }) ||
                element.appliance.toLowerCase().includes(filterText) ||
                element.ustensils.some((ustensil) => {
                  return ustensil.toLowerCase().includes(filterText);
                })
              );
            });
          });

          if (!array.length) {
            array = [];
            displayRecipe(recipeList);
            sortCategeories(recipeList, recipeList);
          } else {
            displayRecipe(result);
            sortCategeories(result, recipeList);
          }
        });
      }
      if (recipeList.length == 1) {
        text.classList.add("disabled");
      } else {
        text.classList.remove("disabled");
      }
      displayRecipe(result);
      sortCategeories(result, recipeList);
    });
  });
}
function disableTag(data) {
  const recipeList = data;
  const keyTag = document.querySelectorAll(".key-tag-text");
  const textTag = document.querySelectorAll(".text-tag");
  let array = Array.from(keyTag);

  textTag.forEach((text) => {
    if (recipeList.length <= 1) {
      text.classList.add("disabled");
    } else {
      text.classList.remove("disabled");
    }
    console.log(text);
    array.map((filter) => {
      if (text.textContent == filter.textContent) {
        text.classList.add("disabled");
      }
    });
  });
}
