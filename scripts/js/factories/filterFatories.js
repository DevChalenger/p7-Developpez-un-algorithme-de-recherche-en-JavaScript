class filterFactory {
  constructor(ingredient, ustensil, appliance) {
    if (ingredient) {
      return new ingredientDom(ingredient, new filterDom());
    } else if (ustensil) {
      return new ustensilDom(ustensil, new filterDom());
    } else if (appliance) {
      return new applianceDom(appliance, new filterDom());
    }
  }
}
const blockIngredient = document.getElementById("ingredient-content");
const blockUstensil = document.getElementById("ustensiles-content");
const blockAplliance = document.getElementById("appliance-content");
class filterDom {
  constructor() {
    const blockFilter = document.createElement("div");
  }
}
class ingredientDom {
  constructor() {}
}
class applianceDom {
  constructor() {}
}
class ustensilDom {
  constructor() {}
}
