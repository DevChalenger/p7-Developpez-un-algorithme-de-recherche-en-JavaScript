function sortCategeories(data, initialData) {
  const recipeList = data;
  const ingredientCategories = [];
  const appliancesCatgeories = [];
  const ustensileCategories = [];
  recipeList.forEach((recipe) => {
    recipe.ingredients.forEach((currentIngredient) => {
      ingredientCategories.push(currentIngredient.ingredient.toLowerCase());
    });
    appliancesCatgeories.push(recipe.appliance.toLowerCase());
    recipe.ustensils.forEach((currentUstensil) => {
      ustensileCategories.push(currentUstensil.toLowerCase());
    });
  });
  const stringUstensiles = [...new Set(ustensileCategories)];
  const stringIngredients = [...new Set(ingredientCategories)];
  const stringAppliances = [...new Set(appliancesCatgeories)];

  new filterFactory(
    stringIngredients,
    stringUstensiles,
    stringAppliances,
    initialData
  );

  disableTag(recipeList);
}
