import React from 'react'

const Feature = ({name,desc,icon}) => {
  return (
    <div className='feature'>
        <div className='feature-icon'>
            {icon}
        </div>
        <div>
            <h3>{name}</h3>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default Feature