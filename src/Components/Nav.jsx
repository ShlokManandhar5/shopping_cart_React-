import React from 'react'
import {Link} from "react-router-dom"
function Navbar() {
    
    return (
        <div>
        <div className='bg-[#f5f6f8]'>
        <nav className="flex justify-between lg:max-w-[80%] max-w-[91%] m-auto font-serif md:min-h-[10vh] lg:min-h-[12vh] min-h-[9vh] items-center ">
            <div className='font-extrabold md:text-2xl lg:text-3xl text-xl cursor-pointer text-[#2f3479]'>
                SNEAKER NEPAL
            </div>
            <div className='md:static absolute md:min-h-fit min-h-[20vh] top-[-450px] left-0 md:w-auto w-full flex items-center sm:px-11 px-8 py-3 bg-[#f5f6f8]'>
            <ul className="flex md:flex-row flex-col items-start md:gap-[4vw] gap-8 lg:text-base text-sm ">
                <li>
                    <Link to="/" className='text-gray-500 hover:text-black' >Home</Link>
                </li>
                <li>
                    <a href=""className='text-gray-500 hover:text-black'>Featurs</a>
                </li>
                <li>
                    <Link to="/shoes"className='text-gray-500 hover:text-black'>Shoes</Link>
                </li>
                <li>
                    <Link to="/contact" className='text-gray-500 hover:text-black'>Contact Us</Link>
                </li>
            </ul>
            </div>

            <div>
                <a href="" className='md:px-3 md:py-2 lg:px-4 lg:py-3 px-1.5 py-1.5 bg-[#24285b] text-white md:font-medium md:text-base text-sm '>Inquiry</a>
                
            </div>
        </nav>
        </div>
        </div>
         
  )
}

export default Navbar
