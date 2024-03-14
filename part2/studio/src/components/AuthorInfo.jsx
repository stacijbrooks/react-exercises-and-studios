import recipedata from './recipe.json';
import './styling.css';

function AuthorInfo() {

  let recipeAuthor = recipedata.map(recipe => {
    return <div> key={recipe.name}>{recipe.author}</div>
  })

   return 
 }
 //28.07 time on video
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 