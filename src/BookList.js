import React from "react";
import Book from "./Book";
import books from  './books.json'
// const book1 = {
//   image:
//     "https://m.media-amazon.com/images/I/41v8uTm5GSL._AC_SR400,600_AGcontrast_.jpg",
//   title: "Forge Your Future",
//   publisher: "APJ Abdul Kalam",
//   price: "200",
// };

// const book2 = {
//   image: "https://m.media-amazon.com/images/I/71sBtM3Yi5L._SY342_.jpg",
//   title: "The Power of Your Subconscious Mind",
//   publisher: "Joseph Murphy",
//   price: "200",
// };


const BookList = () => {
  return (
    <div>
    {books.map((ele)=>{
       return <Book
        image={ele.image}
        title={ele.title}
        publiser={ele.publisher}
        price={ele.price}
      />
    })}
    
    </div>
  );
};

export default BookList;
