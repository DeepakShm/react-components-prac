import React from 'react'
import InputGroup from '../Components/InputGroup'
import SignUpButton from '../Components/SignUpButton'
import NavLink from '../Components/NavLink';
import Socials from '../Components/Socials';

export const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer'>
      <div className='footer-group'>
            <SignUpButton />
            <div className='email-cta'>
              <InputGroup />
              <SignUpButton />
            </div>
        </div>
        <div className='footer-group '>
          <NavLink />
          <NavLink />
          <NavLink />
        </div>
        <div className='footer-group '>
          <NavLink />
          <NavLink />
          <NavLink />
        </div>
        <div className='footer-group '>
          <NavLink />
          <NavLink />
          <NavLink />
        </div>
      </div>
      <Socials />
    </div>
  )
}
