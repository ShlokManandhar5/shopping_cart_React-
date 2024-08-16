import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import data from '../Database/data'

const OurServices = () => {   
 
  return (
    <div className='md:grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-x-1 gap-y-0 flex flex-col items-center w-[70%] m-auto'>
      
      {data.map((product, index) => (
        <ProductCard
          key={index}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          img={product.img}
        />

      ))}
    </div>
  )
}

export default OurServices
