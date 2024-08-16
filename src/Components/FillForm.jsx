import React, { useState} from 'react'
import axios from 'axios'

function FillForm() {
    
    return (
        <div>

        <div className='flex flex-col'>
            <form className='my-8 mx-8 box-border flex flex-col gap-5 max-w-[25rem]'>
                <div className='font-bold text-2xl'>Contact Us</div>
                <input type="text" placeholder='Name' className='min-h-11 w-[100%] px-2 shadow-lg outline-none border' onChange={(e)=> setName(e.target.value)} />

                <input type="Email" placeholder='Email' className='min-h-11 w-[100%] px-2 shadow-lg outline-none border'onChange={(e)=> setEmail(e.target.value)} />

                <input type="number" placeholder='Phone Number' className='min-h-11 w-[100%] px-2 shadow-lg outline-none border' maxLength={10} minLength={9} onChange={(e)=>setNumber(e.target.value)}/>

                <select className='min-h-11 w-[100%] shadow-lg outline-none border px-2 text-gray-400' onChange={(e)=>setServicereq(e.target.value)}  >
                    <option selected disabled>Service Required</option>
                    <option className='text-black'>Web Design</option>
                    <option className='text-black'>Web Development</option>
                    <option className='text-black'>Graphic Design</option>
                    <option className='text-black'>App Development</option>
                </select> 
                <div >
                    <button className='px-4 py-3 bg-[#24285b] text-white font-semibold w-[100%] hover:bg-blue-950' type="submit">Send</button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default FillForm
