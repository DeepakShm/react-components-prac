import { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import { Loading } from './Loading';
import { addToCart, removeFromCart, removeProduct } from '../Store/Slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { showToast } from '../App';


export const SingleProduct = () => {
    const {id} = useParams();
    const [product,setProduct] = useState(undefined);

    const dispatch = useDispatch();
    const cart = useSelector((state)=>state.cart.value);
  
    const [quantity,setQuantity] = useState(0);
    
    const addQuantity = ()=>{
        dispatch(addToCart({...product,quantity}));
        setQuantity(prev=>prev+1);
        showToast("Product added to cart");
    }

    const removeQuantity = ()=>{
        dispatch(removeFromCart(product.id));
        setQuantity(prev=>prev-1);
        showToast("Product removed from cart");
    }


    const getProduct=async(id)=>{
        const idx = cart.findIndex(ct=>ct.id==id);
        if(idx >= 0){
            setProduct(cart[idx]);
            setQuantity(cart[idx].quantity)
            return;
        }
        try {
            const data = (await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)).data;
            setProduct(data);
        } catch (error) {
            showToast(error.message); 
        }
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
                            {
                            quantity==0 ?
                            <button className='btn outline-btn' onClick={addQuantity} >Add To Cart</button> :
                            <div className='add-sub'>
                                <button className='btn outline-btn' onClick={removeQuantity}>-</button>
                                <p>{quantity}</p>
                                <button className='btn outline-btn' onClick={addQuantity}>+</button>
                            </div>
                            }
                        </div>                            
                    </div>
                </div>
            )
        }
    </div>
  )
}
