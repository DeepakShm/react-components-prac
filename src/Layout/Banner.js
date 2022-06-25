import React from 'react'
import {Link} from 'react-router-dom'

const Banner = () => {
  return (
    <div className='banner' >
      <div className='banner-content'>
        <h1>New Arrival</h1>
        <Link to="/shop">
         <button>Buy Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Banner