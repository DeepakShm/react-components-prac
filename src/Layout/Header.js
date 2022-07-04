import React from 'react';
import ALink from '../Components/ALink';
import { BiCart } from 'react-icons/bi';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const navLinks = ["Shop","Log in","Sign up"];
  const cart = useSelector((state)=>state.cart.value);


  const getCartTotal=()=>{
    if(cart.length===0)
      return 0;

    let totalItems = 0;
    cart.forEach(ct => {
      totalItems += ct.quantity;
    });
    return totalItems;
  }

  return (
    <header className='header'>
        <div>
          <div className='logo' >
            <Link to="/"><h4>Axeno</h4></Link> 
          </div>
        </div>
        <div className='nav'>
          {
            navLinks.map((nl)=>{
              return <ALink key={nl} linkName={nl} />
            })
          }
          <Link to="/cart">
            <div className='cart'>
              <BiCart size='20px'/>
              <span className='cart-count' >{getCartTotal()}</span>
            </div>
          </Link>
        </div>
    </header>
  )
}

export default Header