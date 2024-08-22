import React, { useState } from 'react'
import ProductCard from './ProductCard'
import data from '../Database/data'

const OurServices = () => {
  const [selectedCompany, setSelectedCompany] = useState('ALL')

  const filteredProducts = selectedCompany === 'ALL' 
    ? data 
    : data.filter(product => product.company === selectedCompany)

  const handleCompanyClick = (company) => {
    setSelectedCompany(company)
  }

  return (
    <div>
      <div className='flex mt-5 w-[65%] m-auto gap-4'>
        <button 
          className={`border px-5 py-1 font-semibold rounded-2xl ${selectedCompany === 'ALL' ? 'bg-[#24285b] text-white' : 'bg-white text-[#24285b]'}`}
          onClick={() => handleCompanyClick('ALL')}
        >
          ALL
        </button>
        <button 
          className={`border px-5 py-1 font-semibold rounded-2xl ${selectedCompany === 'Nike' ? 'bg-[#24285b] text-white' : 'bg-white text-[#24285b]'}`}
          onClick={() => handleCompanyClick('Nike')}
        >
          NIKE
        </button>
        <button 
          className={`border px-5 py-1 font-semibold rounded-2xl ${selectedCompany === 'Adidas' ? 'bg-[#24285b] text-white' : 'bg-white text-[#24285b]'}`}
          onClick={() => handleCompanyClick('Adidas')}
        >
          Adidas
        </button>
        <button 
          className={`border px-5 py-1 font-semibold rounded-2xl ${selectedCompany === 'Under Armor' ? 'bg-[#24285b] text-white' : 'bg-white text-[#24285b]'}`}
          onClick={() => handleCompanyClick('Under Armor')}
        >
          Under Armour
        </button>
        <button 
          className={`border px-5 py-1 font-semibold rounded-2xl ${selectedCompany === 'Air Jordan' ? 'bg-[#24285b] text-white' : 'bg-white text-[#24285b]'}`}
          onClick={() => handleCompanyClick('Air Jordan')}
        >
          Air Jordan
        </button>
      </div>
      <div className='md:grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-x-1 gap-y-0 flex flex-col items-center w-[70%] m-auto'>
        {filteredProducts.map((product, index) => (
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
    </div>
  )
}

export default OurServices