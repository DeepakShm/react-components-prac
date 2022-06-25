import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { Loading } from './Loading';
import { useContext } from 'react';
import CartContext from '../Context/CartContext';

export const SingleProduct = () => {

    const {id} = useParams();
    // console.log(id); 
    const [product,setProduct] = useState(undefined);

    const {setCartTotal} = useContext(CartContext); 

    const getProduct=async(id)=>{
        try {
            const data = (await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)).data;
            // console.log(data);
            setProduct(data);
        } catch (error) {
            console.log(error.message); 
        }
    }

    const updateCart = ()=>{
        setCartTotal(prev=>{
            let plist = [...prev];
            const idx = plist.findIndex(p=>p.id==product.id);
            if(idx>-1){
              plist[idx].quantity += 1;
              return plist;
            }
            product.quantity = 1;
            return [...plist,product];
          });
    }

    useEffect(()=>{
        getProduct(id);
    },[]);

  return (
    <div className='product-display'>
        {
            product===undefined? <Loading/> : (
                <div className='product'>
                    <div className='p-img'>
                        <img src={product.images[0]} alt={product.title} />
                    </div>
                    <div className='p-body'>
                        <div>
                            <h2>{product.title}</h2>
                            <span>{product.category.name}</span>
                            <p className='price' > <b>Rs {product.price}</b> </p>
                            <hr />
                            <p className='desc' >{product.description}</p>
                        </div>
                        <div>
                            <button className='btn outline-btn' onClick={updateCart} >Add To Cart</button>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
  )
}
