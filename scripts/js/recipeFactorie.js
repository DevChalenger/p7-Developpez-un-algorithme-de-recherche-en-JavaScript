function recipeFactory(data) {
  const {
    name,

    ingredients,
    time,
    description,
  } = data;
  function recipeCardDom() {
    const article = document.createElement("article");
    article.classList.add("recipe-container");
    //recipe picture empty//
    const recipeImg = document.createElement("div");
    recipeImg.classList.add("recipe-img");
    //recipe text field//
    const recipeText = document.createElement("div");
    recipeText.classList.add("recipe-text");
    //recipe header//
    const recipeHeader = document.createElement("div");
    recipeHeader.classList.add("recipe-header");
    recipeText.appendChild(recipeHeader);
    //recipe name title//
    const recipeName = document.createElement("h2");
    recipeName.textContent = name;
    recipeHeader.appendChild(recipeName);
    //recipe time block//
    const recipeTimeBlock = document.createElement("div");
    recipeTimeBlock.classList.add("recipe-time");
    const recipeTimer = document.createElement("p");
    recipeTimer.textContent = time + " min";
    const recipeTimerIcon = document.createElement("i");
    recipeTimerIcon.classList.add("fa-regular", "fa-clock");
    recipeTimeBlock.appendChild(recipeTimerIcon);
    recipeTimeBlock.appendChild(recipeTimer);
    recipeHeader.appendChild(recipeTimeBlock);
    //step block//
    const recipeStepBlock = document.createElement("div");
    recipeStepBlock.classList.add("recipe-step-block");

    const ingredientBlock = document.createElement("div");
    ingredientBlock.classList.add("ingredient-block");
    for (let i = 0; i < ingredients.length; i++) {
      const element = ingredients[i];
      const ingredientContent = document.createElement("p");

      const ingredientName = document.createElement("span");
      ingredientName.textContent = element.ingredient;
      ingredientName.style.fontWeight = "bold";
      if (element.unit && element.quantity) {
        ingredientContent.insertAdjacentElement("afterbegin", ingredientName);
        ingredientContent.insertAdjacentHTML(
          "beforeend",
          ": " + element.quantity + " " + element.unit
        );
      } else if (!element.quantity && !element.unit) {
        ingredientContent.insertAdjacentElement("afterbegin", ingredientName);
      } else if (!element.unit) {
        ingredientContent.insertAdjacentElement("afterbegin", ingredientName);
        ingredientContent.insertAdjacentHTML(
          "beforeend",
          ": " + element.quantity
        );
      }

      ingredientBlock.appendChild(ingredientContent);
    }
    const recipeSumaryBlock = document.createElement("div");
    recipeSumaryBlock.classList.add("summary-block");
    const recipeSumaryText = document.createElement("p");
    recipeSumaryText.textContent = description;
    recipeSumaryBlock.appendChild(recipeSumaryText);

    recipeStepBlock.appendChild(ingredientBlock);
    recipeStepBlock.appendChild(recipeSumaryBlock);
    recipeText.appendChild(recipeStepBlock);
    //Child elements//

    article.appendChild(recipeImg);
    article.appendChild(recipeText);
    return article;
  }
  return { recipeCardDom };
}
