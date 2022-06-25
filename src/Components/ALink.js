import React from 'react';
import {NavLink} from 'react-router-dom';

const ALink = ({linkName,children}) => {
  return (
    <div className='nav-link' >
      <NavLink to={"/"+linkName} end className={({isActive})=>isActive?"routerActive":undefined} >
        {linkName}
        {/* <a href="http://" target="_blank" rel="noopener noreferrer">{linkName}</a> */}
      </NavLink>
        {children}
    </div>
  )
}

export default ALink