"use client"
import Hero from '../../public/hero1.png';
import Hero1 from '../../public/hero2.png';
import Hero2 from '../../public/hero3.png';
import Hero3 from '../../public/hero4.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image';

const HeroSection = () => {
  var settings = {
   
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,         
    autoplaySpeed: 2000,
   
  };
 
  return (
    <div >
       <Slider {...settings}>
      <div className=''>
        <Image src={Hero} className='h-screen w-full'/>
      </div>
      <div className=''>
        <Image src={Hero1} className='h-screen w-full'/>
      </div>
      <div className=''>
        <Image src={Hero2} className='h-screen w-full'/>
      </div>
      <div className=''>
        <Image src={Hero3} className='h-screen w-full'/>
      </div>
    </Slider>
    </div>
  );
};

export default HeroSection;
