import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/Context';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

  const { products } = useContext(Context);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products])
  

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
      <Title text1={'LATEST'} text2={'COLLECTIONS'} />
      <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Explore our latest collection, filled with fresh designs and on-trend styles. From casual to chic, there's something for everyone. <br />Shop now and refresh your wardrobe with the newest arrivals!
        </p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          latestProducts.map((item, index) => (
              <ProductItem  key={index} id={item._id} image={item.image} name={item.name} price={item.price}  />
          ))

        }
      </div>
    </div>
  );
}

export default LatestCollection;
