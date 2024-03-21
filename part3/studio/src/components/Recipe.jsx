const RecipeAuthor = () => {
   let authorLink = "https://www.wellplated.com/flourless-chocolate-torte/#wprm-recipe-container-32996";
   let authorPhoto = "https://secure.gravatar.com/avatar/61f966c91c7744e98d39995df9e6ce45?s=96&r=g";
   let authorName = "Erin Clarke";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ['dark chocolate', 'butter', 'vanilla', 'eggs', 'sugar'];

   let ingedientListItems = ingredients.map((ingredient, index) => {
      return <li key={index}>{ingredient}</li>
   })
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            {ingedientListItems}
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Flourless Chocolate Torte</h1>
            <p></p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.wellplated.com/wp-content/uploads/2016/12/Flourless-Chocolate-Torte-recipe.jpg" alt="Chocolate Torte" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}