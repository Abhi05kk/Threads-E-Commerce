import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/Context';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {

  const {products} = useContext(Context);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => (item.bestSeller));
    setBestSeller(products.slice(0, 5))
}, [products])

return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLERS'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Our best sellers are customer favorites that consistently deliver on style, comfort, and quality,making them a must-have in any wardrobe.
            </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                bestSeller.map((item, index) => (
                   <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                ))
            }
        </div>
        
    </div>
);
}

export default BestSeller;
