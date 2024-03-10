export default function BookList() {
   let books = "shrug";
   let book1 = "https://m.media-amazon.com/images/I/41LavpbFAzL._SY445_SX342_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/61ZWycJRKEL._SY466_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/41au-1JYjWL._SX342_SY445_.jpg";

   return (
      <div>
         <h3>{books}</h3>
         <img src={book1} alt="How Dogs Love Us" />
         <img src={book2} alt="The Complete Book of Dogs" />
         <img src={book3} alt="The Art of Training Your Dog" />
      </div>      
   );
}