import React from 'react'
import './Book.css'
const Book = (props) => {
    const {image ,title, publisher, price} = props
  return (
    <div className='book'>
    {console.log(props)}
     <div className="book-image">
     <img src={image} />
     </div>

   <div className='book-info'>
   <h2 >{title}</h2>
   <p className='book-author'>{publisher}</p>
      <p>${price}</p>
      <button>Add to Cart</button>
   </div>
    </div>
  )
}

export default Book
