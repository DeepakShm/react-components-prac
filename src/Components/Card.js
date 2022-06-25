import {React,useState,useContext} from 'react';
import CartContext from '../Context/CartContext';
import {Link} from 'react-router-dom';

const Card = ({type,product}) => {

  const {setCartTotal} = useContext(CartContext);

  const addQuantity = ()=>{
    setCartTotal(prev=>{
      let plist = [...prev];
      const idx = plist.findIndex(p=>p.id==product.id);
      if(idx>-1){
        plist[idx].quantity += 1;
        return plist;
      }
      product.quantity = 1;
      return [...plist,product];
    });
  }

  return (
    <div className='card'>
        <Link to={`/shop/${product.id}`}>
        <div className='card-img'>
            <img src={product.images[0]} alt="product" />
          <div className='card-body'>
            <span>{product.category.name}</span>
            <h4>{product.title}</h4>
            <p>Rs {product.price} </p>
            { type === "cart" &&
              <div className='cart-details'>
                <p>Quantity : {product.quantity}</p>
                <p>Total Price : Rs { product.price*product.quantity}</p>
              </div>
            }
        </div>
        </div>
    </Link>
    {
      type !=="cart" &&
      <button className='btn outline-btn' onClick={addQuantity} >Add To Cart</button>
    }
    </div>
  )
}

export default Card