import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import data from '../Database/data'

const OurServices = () => {
  const [selectedCompany, setSelectedCompany] = useState('ALL')
  const [sortOrder, setSortOrder] = useState('highest')
  const [products, setProducts] = useState(data)

  // Helper function to parse date strings
  const parseDate = (dateString) => {
    console.log("Parsing date:", dateString); // Log the date string
    // Try parsing with built-in Date.parse first
    const parsedDate = Date.parse(dateString);
    if (!isNaN(parsedDate)) {
      return new Date(parsedDate);
    }
    // If that fails, try manual parsing
    const parts = dateString.split('/');
    if (parts.length === 3) {
      const [month, day, year] = parts.map(Number);
      // Assume 20xx for two-digit years
      const fullYear = year < 100 ? 2000 + year : year;
      return new Date(fullYear, month - 1, day);
    }
    console.error("Failed to parse date:", dateString);
    return new Date(0); // Return a default date if parsing fails
  }

  useEffect(() => {
    let filteredProducts = selectedCompany === 'ALL'
      ? [...data]
      : data.filter(product => product.company === selectedCompany)

    filteredProducts.sort((a, b) => {
      if (sortOrder === 'newest' || sortOrder === 'oldest') {
        const dateA = parseDate(a.published);
        const dateB = parseDate(b.published);
        console.log("Comparing dates:", a.published, b.published, dateA, dateB);
        return sortOrder === 'newest'
          ? dateB.getTime() - dateA.getTime()
          : dateA.getTime() - dateB.getTime();
      } else {
        const priceA = parseFloat(a.price.replace(/[^\d.]/g, ''));
        const priceB = parseFloat(b.price.replace(/[^\d.]/g, ''));
        console.log("Comparing prices:", a.price, b.price, priceA, priceB);
        return sortOrder === 'lowest'
          ? priceA - priceB
          : priceB - priceA;
      }
    })

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
            onClick={() => handleCompanyClick(company)}
          >
            {company}
          </button>
        ))}
      </div>

      {/* Sorting dropdown */}
      <div className='w-[65%] m-auto mt-5'>
        <select
          className='border px-5 py-1 font-semibold rounded-2xl text-[#24285b]'
          value={sortOrder}
          onChange={handleSortChange}
        >
          <option value="highest">Highest Price</option>
          <option value="lowest">Lowest Price</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
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
            published={product.published}
          />
        ))}
      </div>
    </div>
  )
}

export default OurServices