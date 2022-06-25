import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Card from '../Components/Card';
import { Loading } from '../Components/Loading';

const ProductList = ({limit,category}) => {
  if(limit===undefined){
    limit = 30;
  }

  const [data,setData] = useState([]);

  const getProducts = async (limit)=>{
    try {
      const data = (await axios.get(`https://api.escuelajs.co/api/v1/products?offset=1&limit=${limit}`)).data;
      setData(data);
    } catch (error) {
      console.log(error.message); 
    }
  };

  const getProductsByCategory= async (category)=>{
    try {
      const data = (await axios.get(`https://api.escuelajs.co/api/v1/categories/${category}/products?offset=1&limit=${limit}`)).data;
      setData(data);
    } catch (error) {
      console.log(error.message); 
    } 
  }


  useEffect(()=>{
    setData([]);
    if(category===undefined)
      getProducts(limit);
    else
      getProductsByCategory(category);
  },[category]);

  return (
    <div className='below-cta'>
        {
          data.length == 0 ? <Loading/> : (
          <div className='card-list'>
              {
                data.map(pl=>{
                  return (
                      <Card key={pl.id}  product={pl}/>
                  )
                })
              }
          </div>
          )
        }
    </div>
  )
}

export default ProductList