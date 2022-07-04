import {Link} from 'react-router-dom';
import { addToCart, removeFromCart, removeProduct } from '../Store/Slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useState } from 'react';
import { showToast } from '../App';
import {BiTrash} from 'react-icons/bi';


const Card = ({type,product}) => {

  const dispatch = useDispatch();
  const cart = useSelector((state)=>state.cart.value);
  
  const idx = cart.findIndex(ct=>ct.id===product.id)
  if(idx >= 0)
    product = cart[idx];
  
  
  const [quantity,setQuantity] = useState(product.quantity || 0);
  
  const addQuantity = ()=>{
    dispatch(addToCart({...product,quantity}));
    setQuantity(prev=>prev+1);
    showToast("Product added to cart");
  }

  const removeQuantity = ()=>{
    dispatch(removeFromCart(product.id));
    setQuantity(prev=>prev-1);
    showToast("Product removed from cart");
  }

  const removeItem = ()=>{
    dispatch(removeProduct(product.id));
    setQuantity(0);
    showToast("Product removed from cart");
  }

  return (
    <div className='card'>
      <Link to={`/shop/${product.id}`} quantity={0}>
        <div className='card-img'>
            <img src={product.images[0]} alt="product" />
          <div className='card-body'>
            <span>{product.category.name}</span>
            <h4>{product.title}</h4>
            <p>Rs {product.price} </p>
            <div className='cart-details'>
              {/* <p>Quantity : {quantity}</p> */}
            { type === "cart" &&
                <p>Total Price : Rs { product.price*product.quantity}</p>
              }
              </div>
        </div>
        </div>
      </Link>
      <div>
        {
          quantity==0 ?
          <button className='btn outline-btn' onClick={addQuantity} >Add To Cart</button> :
          <div className='add-sub'>
            <button className='btn outline-btn' onClick={removeQuantity}>-</button>
              <p>{quantity}</p>
            <button className='btn outline-btn' onClick={addQuantity}>+</button>
            {
              type === "cart" &&
              <button className='btn outline-btn btn-red' onClick={removeItem} ><BiTrash/></button>
            }
          </div>
        }
      </div>
    </div>
  )
}

export default Card