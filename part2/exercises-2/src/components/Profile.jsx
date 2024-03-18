import './styles.css';
import Button from './Button';
import oceans from './oceans.json';

let listItem = oceans.map(ocean =>
   (
      <div key={ocean.id} className="profile">
         <img src={ocean.image} alt={ocean.name} className="img" />
      </div>
   )
);

function Profile() {
   return (
      <div>
         {oceans.map(ocean => (
            <div key={ocean.id} className={`${ocean.fishCheck === "true" ? "isAFish" : "profile"}`}>
               <h2>{ocean.name}</h2>
               <img src={ocean.image} alt={ocean.name} />
               <h3>Fun Facts</h3>
               <ul>
                  <li>{ocean.fact1}</li>
                  <li>{ocean.fact2}</li>
                  <li>{ocean.fact3}</li>
               </ul>
               <Button />
            </div>
         ))}
      </div>
   );
}

export default Profile;