import React from 'react'
import Card from '../Components/Card'

const BelowCTA = () => {
  return (
    <div className='below-cta'>
        <h2>Below the fold CTA</h2>
        <div className='card-list'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}

export default BelowCTA