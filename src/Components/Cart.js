import Card from './Card';
import { useSelector } from 'react-redux';

export const Cart = () => {

    const cart = useSelector((state)=>state.cart.value);

  return (
    <div className='my-cart'>
      <div className='cart-head'>
        <h2>My Cart</h2>
          <h3>Total Items : {cart.length}</h3>
        <div>
          <button className='btn' >Checkout</button>
        </div>
      </div>
        
            {
              cart.length == 0? <h3>No Product added to cart</h3>  :
        <div className='cart-list'>
          {
                cart.map(pl=>{
                  return (
                      <Card key={pl.id} type="cart"  product={pl}/>
                      )
                    })
                  }
        </div>
            }
    </div>
  )
}
