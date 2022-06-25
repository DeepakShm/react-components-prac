import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import ProductList from '../Layout/ProductList';

export const Category = () => {

    const [categories, setCategories] = useState([]);
    const [activeCategory,setActiveCategory] = useState(undefined);

    const getCategories=async()=>{
        try {
            const data = (await axios.get(`https://api.escuelajs.co/api/v1/categories`)).data;
            setCategories(data);
          } catch (error) {
            console.log(error.message); 
          }
    }

    useEffect(()=>{
        getCategories();
    },[]);

  return (
    <div className='category'>
        <div className='select-category'>
            <div className='pos-sticky' >
            <h4>Choose Category </h4>
            <div className='category-list'>
                <ul>
                    {
                        categories.map(c=>{
                            return (
                                <li key={c.id}>
                                        <input type="radio" name="category" id={c.id} hidden onChange={()=>setActiveCategory(c.id)} />
                                        <label htmlFor={c.id}>
                                            <div>
                                                <p>{c.name}</p>
                                            </div>
                                        </label>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            </div>
        </div>
        <div className='product-list'>
            <h4 className='pos-sticky'>
                { activeCategory===undefined? "All" : categories[activeCategory-1].name} Products
            </h4>
            <div>
                <ProductList limit={undefined} category={activeCategory} />
            </div>
        </div>
    </div>
  )
}
