import {React} from 'react';
import NavLink from '../Components/NavLink';
import { BiCart } from 'react-icons/bi';


const Header = ({cartTotal}) => {

  const navLinks = ["Home","Shop","Portfolio","Blog","Elements"];
  const navBtns = ["Log in","Sign up"];

  // const {cartTotal} = useContext(CartContext);

  return (
    <header className='header'>
        <div>
          <div className='logo' >
            <h4>Axeno</h4>
          </div>
        </div>
        <div className='nav'>
          {
            navLinks.map((nl)=>{
              return <NavLink linkName={nl} />
            })
          }
        </div>
        <div className='nav nav-btn'>
          {
            navBtns.map((nl)=>{
              return <NavLink linkName={nl} />
            })
          }
          <div className='cart'>
            <BiCart size='20px'/>
            <span className='cart-count' >{cartTotal}</span>
          </div>
        </div>
    </header>
  )
}

export default Header