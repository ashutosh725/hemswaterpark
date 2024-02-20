import React from 'react'
import Banner1 from "../../public/banner1.jpg"
import Link from 'next/link'
import Counter from './Counter'
const Banner = () => {
  return (
    <div  className=" relative bg-cover bg-center h-[400px] mb-20" style={{ backgroundImage: `url(${Banner1.src})` }}>
     <div className='container mx-auto'>
        <div className='flex justify-between items-center pt-28'>
<div className='flex flex-col justify-start items-start gap-3 w-1/2'> 
               <h2 className='text-white text-[32px] font-Fjalla font-bold tracking-wide'>SPEND YOUR HOLIDAY IN WATERBOOM</h2>
            <p className='text-[16px] text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='flex flex-col justify-start items-start gap-3'>
            <button className='bg-primary text-white px-6 py-3 text-[16px] font-bold tracking-wide'>BOOK NOW</button>
            <Link href={'/'} className='text-[16px] font-Fjalla font-bold tracking-wide text-white'>
GET INFORMATION</Link>
            </div>
        </div>
        <Counter/>
        
     </div>
    </div>
  )
}

export default Banner
