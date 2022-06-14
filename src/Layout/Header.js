import React from 'react';
import Logo from '../Components/Logo';
import NavLink from '../Components/NavLink';
import Search from '../Components/Search';

const Header = () => {
  return (
    <header className='header'>
        <div>
            <Logo />
        </div>
        <div className='nav'>
            <NavLink />
            <NavLink />
            <NavLink />
            <Search />
        </div>
    </header>
  )
}

export default Header