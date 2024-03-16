import './styles.css';

function Button() {

   function onLearnMore() {
      alert("Splish Splash");
   }

   return ( 
         <button> onClick={onLearnMore}>
            Learn More
         </button>
//The onClick attribute in this code snippet is used to assign the onLearnMore function as the event handler 
//for the click event on the button element. When the button is clicked, the onLearnMore function will be executed, 
//and an alert with the message "Splish Splash!" will be displayed.
   );
}



export default Button;