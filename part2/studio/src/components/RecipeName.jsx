import recipedata from "./recipe.json";

function RecipeName(props) {
  let recipeNames = recipedata.map(recipe => {
    return <h1 key={recipe.name}>{recipe.name}</h1>;
  });

  return (
    <div>
      {recipeName}
    </div>
    
  );
}


export default RecipeName;

//import return the name of the recipe as a level 1 header