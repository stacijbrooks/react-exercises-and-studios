import recipedata from "./recipe.json";

function RecipeName() {
  let recipeName = recipedata.map(recipe => {
    return<h1 key={recipe.name}>{receipe.name}</h1>;
  })
  return {
    <div>
    {receipeName}
    <div />
  }
}

export default RecipeName;

//import return the name of the recipe as a level 1 header