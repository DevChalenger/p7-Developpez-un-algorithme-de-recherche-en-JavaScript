class filterFactory {
  constructor(ingredient, ustensil, appliance) {
    new filterDom();

    new ingredientDom(ingredient);

    new ustensilDom(ustensil);

    new applianceDom(appliance);
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
      filterSearch.placeholder = `Recherchez un ${titleText[i].toLowerCase()}`;
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
          filterSearch.type = "text";
          titleFilter.textContent = "";
        } else {
          iconOpen.classList.remove("button-hidden");
          content[i].classList.remove("show-content");
          blockFilter[i].classList.remove("filter-sort-open");
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
  constructor(ingredients) {
    const blockIngredient = document.getElementById("ingredient-content");
    const searchIngredient = document.getElementById("Ingredients-search");
    const tagBlock = document.getElementById("block-tag");
    blockIngredient.innerHTML = "";
    searchIngredient.addEventListener("keyup", () => {
      const input = searchIngredient.value.toLowerCase();

      ingredients
        .filter((ingredient) => {
          blockIngredient.innerHTML = "";

          return ingredient.includes(input);
        })
        .forEach((element) => {
          let capitalize = element.charAt(0).toUpperCase() + element.slice(1);
          console.log(capitalize);
          const text = document.createElement("p");
          text.textContent = capitalize;
          text.addEventListener("click", () => {
            alert(text.textContent);
          });
          blockIngredient.appendChild(text);
        });
    });
    for (let i = 0; i < ingredients.length; i++) {
      const element = ingredients[i];
      const capitalize = element.charAt(0).toUpperCase() + element.slice(1);
      const text = document.createElement("p");
      text.textContent = capitalize;
      text.addEventListener("click", () => {
        const ingredientTag = document.createElement("div");
        const ingredientTagText = document.createElement("span");
        ingredientTagText.textContent = capitalize;
      });
      blockIngredient.appendChild(text);
    }
  }
}
class applianceDom {
  constructor(appliances) {
    const blockAplliance = document.getElementById("appliance-content");
    const searchAplliance = document.getElementById("Appareils-search");
    const tagBlock = document.getElementById("block-tag");

    blockAplliance.innerHTML = "";
    searchAplliance.addEventListener("keyup", () => {
      const input = searchAplliance.value.toLowerCase();
      appliances
        .filter((appliance) => {
          blockAplliance.innerHTML = "";

          return appliance.includes(input);
        })
        .forEach((element) => {
          let capitalize = element.charAt(0).toUpperCase() + element.slice(1);
          const text = document.createElement("p");

          text.textContent = capitalize;
          blockAplliance.appendChild(text);
        });
    });
    appliances.forEach((element) => {
      let capitalize = element.charAt(0).toUpperCase() + element.slice(1);
      const text = document.createElement("p");
      text.textContent = capitalize;
      blockAplliance.appendChild(text);
    });
  }
}
class ustensilDom {
  constructor(ustensils) {
    const blockUstensil = document.getElementById("ustensiles-content");
    const searchUstensil = document.getElementById("Ustensiles-search");
    const tagBlock = document.getElementById("block-tag");

    blockUstensil.innerHTML = "";
    searchUstensil.addEventListener("keyup", () => {
      const input = searchUstensil.value.toLowerCase();
      ustensils
        .filter((ustensil) => {
          blockUstensil.innerHTML = "";

          return ustensil.includes(input);
        })
        .forEach((element) => {
          let capitalize = element.charAt(0).toUpperCase() + element.slice(1);
          const text = document.createElement("p");
          text.textContent = capitalize;
          blockUstensil.appendChild(text);
        });
    });
    ustensils.forEach((element) => {
      let capitalize = element.charAt(0).toUpperCase() + element.slice(1);
      const text = document.createElement("p");
      text.textContent = capitalize;
      blockUstensil.appendChild(text);
    });
  }
}
