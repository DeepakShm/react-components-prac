import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import CartContext from '../Context/CartContext'
import Card from './Card';

export const Cart = () => {

    const {cartTotal} = useContext(CartContext);
    
    useEffect(()=>{
        console.log(cartTotal);
    },[cartTotal])

  return (
    <div className='my-cart'>
        <h2>My Cart</h2>
        <div className='cart-list'>
            {
                cartTotal.map(pl=>{
                  return (
                      <Card key={pl.id} type="cart"  product={pl}/>
                  )
                })
            }
        </div>
    </div>
  )
}
