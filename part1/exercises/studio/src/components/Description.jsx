import styles from './Description.module.css';
import React from 'react';

let recipeTitle = "Cauliflower Tacos";
let recipeShortDescription = "Crispy Breaded Cauliflower Tacos";

const RecipeAuthor = () => {
    let authorLink = "https://www.acouplecooks.com/crispy-cauliflower-tacos/#tasty-recipes-27372-jump-target";
    let authorPhoto = "https://www.acouplecooks.com/wp-content/uploads/2021/06/bio.jpg" ;
    let authorName = "Sonja Overhiser";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = {authorName} className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>A Couple Cooks</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component {
    render () {
        return (
        <div> 
            <div>
                <h1>{recipeTitle}</h1>
                <p>{recipeShortDescription}</p>
            </div>
            <RecipeAuthor />
            </div>
        );
    }
}

export default RecipeDescription;