import React from 'react'

const NavLink = ({linkName,children}) => {
  return (
    <div className='nav-link' >
        <a href="http://" target="_blank" rel="noopener noreferrer">{linkName}</a>
        {children}
    </div>
  )
}

export default NavLink