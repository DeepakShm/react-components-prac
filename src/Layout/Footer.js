import React from 'react'
import InputGroup from '../Components/InputGroup'
import SignUpButton from '../Components/SignUpButton'
import ALink from '../Components/ALink';
import Socials from '../Components/Socials';

export const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer'>
      <div className='footer-group '>
          <h4>Services</h4>
          <ul>
            <li>1on1 Coaching</li>
            <li>Company Review</li>
            <li>Account Review</li>
          </ul>
        </div>
        <div className='footer-group '>
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Meet Team</li>
            <li>History</li>
          </ul>
        </div>
        <div className='footer-group '>
          <h4>Helful Links</h4>
          <ul>
            <li>Contact</li>
            <li>FAQs</li>
            <li>Live Chat</li>
          </ul>
        </div>
      <div className='footer-group'>
            <div className='email-cta'>
              <InputGroup />
              <SignUpButton />
            </div>
      <Socials />

        </div>
      </div>
    </div>
  )
}
