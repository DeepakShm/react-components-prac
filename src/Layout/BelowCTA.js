import React from 'react'
import Card from '../Components/Card'

const BelowCTA = ({setCartTotal}) => {
  const productList = [
    {
      title:"T-Shirt",
      img:"https://rukminim1.flixcart.com/image/300/300/kkfrjww0/t-shirt/w/2/w/m-t312-lmblwh-new-eyebogler-original-imafzs5kagnntn2p.jpeg?q=90",
      price:"$200",
    },
    {
      title:"Pants",
      img:"https://www.dmarge.com/wp-content/uploads/2021/04/best-mens-pants-tommy-john.jpg",
      price:"$100",
    },
    {
      title:"Hat",
      img:"https://4.imimg.com/data4/PH/KX/MY-32211768/men-s-hat-500x500.jpg",
      price:"$10",
    },
    {
      title:"Shoes",
      img:"https://i.pinimg.com/originals/11/1c/84/111c840193679d508e17017b218e7825.png",
      price:"$20",
    }
  ];



  return (
    <div className='below-cta'>
        <h1>Product List</h1>
        <div className='card-list'>
            {
              productList.map(pl=>{
                return <Card setCartTotal={setCartTotal} title={pl.title} img={pl.img} price={pl.price}/>
              })
            }
        </div>
    </div>
  )
}

export default BelowCTA