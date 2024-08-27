import React from 'react'
import { ShoppingCart } from 'lucide-react';
import {useNavigate} from 'react-router-dom'


const ProductCard = (props) => {
    const imgURL = props.img
    const navigate =useNavigate()

    const handleaddToCart=()=>{
        const productData ={
            id:props.id,
            title:props.title,
            price:props.price,
            description:props.description,
            img:props.img
        }
        
        try {
            let cart = JSON.parse(sessionStorage.getItem("CartData")) || [];

            const itemIndex = cart.findIndex(item => item.id === productData.id);

            if (itemIndex !== -1) {
                alert("Item already in Cart");
            } else {
                cart.push(productData);
                sessionStorage.setItem("CartData", JSON.stringify(cart));
                navigate("/shopcart");
            }
        } catch (err) {
            console.log(err);
        }
    }

    

    return (
        <div className='m-0 p-0 box-border'>
            <div id='container' className='bg-[#f5f6f8] m-7 border h-[365px] w-[241px] drop-shadow-lg' >

                <div id='product_card' className='bg-[#f5f6f8] h-[320px] w-[241px]'>

                    <div id='img' className='h-[52%] w-[95%] m-auto mt-1'> 
                        <img className='w-[100%] h-[100%] object-cover' src={imgURL} alt="..." />
                    </div>

                    <div id='title_price' className='flex flex-col h-[20%] w-[95%] m-auto justify-center' >
                        <div className='text-xl font-bold'>{props.title}</div>
                        <div className='text-md'>{props.price}</div>
                    </div>
                    <div id='description' className='h-[25%] w-[95%] m-auto'>
                        {props.description}
                        {props.date}
                    </div>
                    
                    <div id='addtocart' className='text-white bg-[#24285b] h-[12%] w-[95%] m-auto cursor-pointer'>
                        <div className='flex text-base font-medium gap-4 justify-center' onClick={handleaddToCart}>
                            <div className='pt-[6px]'>
                            <ShoppingCart strokeWidth={1} />
                            </div>
                            <div className='pt-[5px]'>Add to Cart</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
