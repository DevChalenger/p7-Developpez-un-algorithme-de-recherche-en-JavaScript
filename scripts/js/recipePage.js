async function getRecipe() {
  const recipesData = recipes;
  return {
    recipesData: [...recipesData],
  };
}
async function displayRecipe(recipesData) {
  const recipeSection = document.getElementById("recipe-section");

  recipesData.forEach((recipe) => {
    const recipeModel = recipeFactory(recipe);
    const recipeCardDom = recipeModel.recipeCardDom();
    recipeSection.appendChild(recipeCardDom);
  });
}
async function initRecipe() {
  const { recipesData } = await getRecipe();
  displayRecipe(recipesData);
  mainSearch(recipesData);
  sortCategeories(recipesData);
}
initRecipe();
