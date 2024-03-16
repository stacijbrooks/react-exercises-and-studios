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
      <>
         <ul>
            {listItem}
         </ul>
         <Button />
      </>
   );
}

export default Profile;