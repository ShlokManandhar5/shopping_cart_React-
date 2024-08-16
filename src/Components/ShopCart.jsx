import React, { useEffect, useState } from 'react';

const ShopCart = () => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("CartData")) || [];
    console.log("Cart Data:", data);
    setCartData(data);
  }, []);

  return (
    <div className="w-[90vw] lg:w-[80vw] m-auto mt-10">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-center">
        Your Shopping Cart
      </h1>
      
      {cartData.length > 0 ? (
        <div className="space-y-6 lg:space-y-8">
          {cartData.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
              <div className="w-full sm:w-1/3 h-48 sm:h-full flex-shrink-0">
                <img className="w-full h-full object-cover" src={item.img} alt={item.title} />
              </div>
              <div className="flex-1 p-4 sm:p-6">
                <div className="mb-2 sm:mb-4">
                  <span className="font-bold text-lg sm:text-lg lg:text-2xl">Name:</span> 
                  <span className="text-lg sm:text-lg lg:text-2xl"> {item.title}</span>
                </div>
                <div className="mb-2 sm:mb-4">
                  <span className="font-bold text-lg sm:text-lg lg:text-2xl">Price:</span> 
                  <span className="text-lg sm:text-lg lg:text-2xl"> {item.price}</span>
                </div>
                <button
                  className="bg-[#24285b] text-white px-1 py-1 lg:px-4 sm:py-2 rounded-lg hover:bg-blue-600 text-sm lg:text-lg"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-xl sm:text-2xl lg:text-3xl">
          Your cart is empty.
        </p>
      )}
    </div>
  );
};

export default ShopCart;
