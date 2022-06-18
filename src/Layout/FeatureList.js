import React from 'react'
import Feature from '../Components/Feature';
import { BiPaperPlane,BiUser,BiCreditCardAlt,BiRefresh } from "react-icons/bi";


const FeatureList = () => {

  const featureList = [
    {name:"Free Shipping",desc:"Oders over $99",icon:<BiPaperPlane size='30px'/>},
    {name:"30 Day Return",desc:"If goods have problem",icon:<BiRefresh size='30px'/>},
    {name:"Secure Payment",desc:"100% secure payment",icon:<BiCreditCardAlt size='30px'/>},
    {name:"24h Support",desc:"Dedicated support",icon:<BiUser size='30px'/>}
  ]

  return (
    <div className='card-list'>
      {
        featureList.map((fl)=><Feature name={fl.name} desc={fl.desc} icon={fl.icon}  />)
      }
    </div>
  )
}

export default FeatureList;