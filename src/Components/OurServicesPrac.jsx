import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import data from '../Database/data'

const OurServicesPrac = () => {

  const [productData, setProductData] = useState()

  useEffect(() => {
    setProductData(data)
  },)

  return (
    <div>
      data
      <div>
        {productData.map((product, index) => (
          <ProductCard
            key={index}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            img={product.img}
            date={product.date}
          />
        ))}
      </div>
    </div>
  )
}

export default OurServicesPrac;
