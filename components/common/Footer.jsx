import Image from 'next/image'
import Link from 'next/link'
import { IoLocationOutline , IoCallOutline} from "react-icons/io5";
import { IoTime } from "react-icons/io5";
import Logo from '../../public/logo.png'
import { FaFacebookF, FaTwitter , FaLinkedinIn, FaInstagram, FaYoutube   } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#01173C]'>
   <div className='container mx-auto'>
    <div className='flex flex-wrap  lg:flex-row justify-between items-start gap-4 pt-14 pb-8 '>
        <div className='flex flex-1 flex-col justify-center items-start gap-3'>
            <div>
                <Image src={Logo}  alt='' className='object-contain'/>
            </div>
            <h1 className="text-[14px] text-white font-medium tracking-wider">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h1>
           

        </div>
        <div className='flex flex-1 flex-col justify-center items-start gap-3'>
            <h4 className='text-[24px] font-medium text-white'>Quick Links</h4>
            <ul className='flex flex-col justify-center items-start gap-2'>
                <Link href={'/'} className='text-[14px] text-white hover:text-primary duration-500 '>About Us</Link>
                <Link href={'/'} className='text-[14px] text-white hover:text-primary duration-500 '>Services</Link>
                <Link href={'/'} className='text-[14px] text-white hover:text-primary duration-500 '>Booking</Link>
                <Link href={'/'} className='text-[14px] text-white hover:text-primary duration-500 '>Packages</Link>
                <Link href={'/'} className='text-[14px] text-white hover:text-primary duration-500 '>Contact</Link>


            </ul>
        </div>
        <div className='flex flex-1 flex-col justify-center items-start gap-3'>
            <h4 className='text-[24px] font-medium text-white'>Useful Links</h4>
            <ul className='flex flex-col justify-center items-start gap-2'>
                <Link href={`/`} className='text-[14px] text-white hover:text-primary duration-500'>Privacy Policy</Link>
                <Link href={`/`} className='text-[14px] text-white hover:text-primary duration-500'>Terms and Conditions</Link>
                <Link href={`/`} className='text-[14px] text-white hover:text-primary duration-500'>Disclaimer</Link>
                <Link href={`/`} className='text-[14px] text-white hover:text-primary duration-500'>Support</Link>
                <Link href={`/`} className='text-[14px] text-white hover:text-primary duration-500'>FAQ</Link>


            </ul>
        </div>
        <div className='flex flex-1 flex-col text-white justify-center items-start gap-4'>
            <h4 className='text-[24px] font-medium text-white'>Opening Hours</h4>
          <div className='flex justify-center items-start gap-5'>
            <span>Monday - Friday</span>
            <div className='flex justify-center items-center gap-3'><IoTime/>   <span>11:00 AM - 16:00 PM</span></div>
         
          </div>
        </div>
    </div>
    <hr/>
 <div className='flex flex-col lg:flex-row justify-between lg:items-center items-start py-7 '>
    <span className='text-white'>Water & Amusement Park Template Kit by Jegtheme </span>
    <span className='text-white cursor-pointer '>Copyright © 2024. All rights reserved.</span>
 </div>

   </div>
    </div>
  )
}

export default Footer
