import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import data from '../Database/data'

const OurServices = () => {
  const [selectedCompany, setSelectedCompany] = useState('ALL')
  const [sortOrder, setSortOrder] = useState('higest')

  const [products, setProducts] = useState([])
  const [dateList, setDateList] =useState('newest')

  useEffect(() => {
    setProducts(data)
    
    // for Dates
    

    // for company
    let filteredProducts = selectedCompany === 'ALL' 
      ? [...data] 
      : data.filter(product => product.company === selectedCompany)

    // for Higest to lowest
      filteredProducts.sort((a, b) => {
        return sortOrder === 'lowest' 
          ? a.price.localeCompare(b.price, undefined, { numeric: true })
          : b.price.localeCompare(a.price, undefined, { numeric: true });
      });
    



    setProducts(filteredProducts)
  }, [selectedCompany, sortOrder])

  const handleCompanyClick = (company) => {
    setSelectedCompany(company)
  }

  const handleSortChange = (e) => {
    setSortOrder(e.target.value)
  }



  return (
    <div>
      {/* Company filter buttons */}
      <div className='flex mt-5 w-[65%] m-auto gap-4'>
        {['ALL', 'Nike', 'Adidas', 'Under Armor', 'Air Jordan'].map(company => (
          <button
            key={company}
            className={`border px-5 py-1 font-semibold rounded-2xl ${selectedCompany === company ? 'bg-[#24285b] text-white' : 'bg-white text-[#24285b]'}`}
            onClick={() => handleCompanyClick(company)}>
            {company}
          </button>
        ))}
      </div>

      {/* Sorting dropdown */}
      <div className='w-[65%] m-auto mt-5'>
        <select
          className='border px-5 py-1 font-semibold rounded-2xl text-[#24285b] mr-5'
          value={sortOrder}
          onChange={handleSortChange}
        >
          <option value="highest">Highest Price</option>
          <option value="lowest">Lowest Price</option>
        </select>
        
        <select
          className='border px-5 py-1 font-semibold rounded-2xl text-[#24285b] '
          // value={sortOrder}
          // onChange={handleSortChange}
        >
          <option value="highest">Newest</option>
          <option value="lowest">Oldest</option> 
        </select>
      </div>

      {/* Product list */}
      <div className='md:grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-x-1 gap-y-0 flex flex-col items-center w-[70%] m-auto'>
        {products.map((product, index) => (
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

export default OurServices