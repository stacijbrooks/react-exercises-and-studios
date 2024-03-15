import recipedata from './recipe.json';
import './styling.css';

function AuthorInfo() {

  let recipeAuthor = recipedata.map(recipe => {
    return <div key={recipe.name}>{recipe.author}</div>; // Added parentheses and fixed the key attribute
  });

  let recipeAuthorImage = recipedata.map(recipe => {
    return (
      <div key={recipe.name}> {/* Added parentheses and fixed the key attribute */}
        <img src={recipe.authorImage} alt={recipe.author} className="authorImage" />
      </div>
    );
  });

  return (
    <div>
      {recipeAuthor}
      {recipeAuthorImage} {/* Added the image output */}
    </div>
  );
}

export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 