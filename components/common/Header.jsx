import Image from 'next/image'
import React from 'react'
import Logo from '../../public/logo.png'
import Link from 'next/link'
import { FaFacebookF ,FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <div className=''>
   <div className='container mx-auto'>
    <div className='flex justify-between items-center '>
        <div>
        <Image  src={Logo} className='h-20 w-32 object-contain '/>
        </div>
        <div className='hidden lg:flex justify-center items-center gap-5'>
        <Link href={'/'} className='text-[16px] font-semibold uppercase tracking-wide hover:text-primary duration-300'>Home</Link>
        <Link href={'/'} className='text-[16px] font-semibold uppercase tracking-wide hover:text-primary duration-300'>About Us</Link>
        <Link href={'/'} className='text-[16px] font-semibold uppercase tracking-wide hover:text-primary duration-300'>Services</Link>
        <Link href={'/'} className='text-[16px] font-semibold uppercase tracking-wide hover:text-primary duration-300'>Booking</Link>
        <Link href={'/'} className='text-[16px] font-semibold uppercase tracking-wide hover:text-primary duration-300'>Blog</Link>
        <Link href={'/'} className='text-[16px] font-semibold uppercase tracking-wide hover:text-primary duration-300'>Contact</Link>
        </div>
        <div className='flex justify-center items-center gap-5'>
            <Link href={'/'}><FaFacebookF className='hover:text-primary duration-300'/></Link>
            <Link href={'/'}><FaTwitter className='hover:text-primary duration-300'/></Link>
            <Link href={'/'}><FaYoutube className='hover:text-primary duration-300'/></Link>
            <Link href={'/'}><FaInstagram className='hover:text-primary duration-300'/></Link>
        </div>
    </div>
   </div>
    </div>
  )
}

export default Header
