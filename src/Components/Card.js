import {React,useState} from 'react';


const Card = ({title,img,price,setCartTotal}) => {


  const [quantity, setquantity] = useState(0);

  const addQuantity = ()=>{
    setquantity(quantity+1);
    setCartTotal(prv=>prv+1);
  }

  return (
    <div className='card'>
        <div className='card-img'>
            <img src={img} alt="product" />
        </div>
        <div className='card-body'>
            <h4>{title}</h4>
            <p>{price} USD</p>
            <p>Quantity : <b>{quantity}</b></p>
            <button className='btn outline-btn' onClick={addQuantity} >Add To Cart</button>
        </div>
    </div>
  )
}

export default Card