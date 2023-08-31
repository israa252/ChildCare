'use client';
import React ,{useState} from 'react';
import { HiBars3 } from 'react-icons/hi2';
import {GrClose } from 'react-icons/gr';
import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from "next/router";
import logo from 'public/images/logo.png';
 
 

const navMenu = [
  {
    href: "#Hero",
    label: "Home",
  },
  {
    href: "#States",
    label: "How we work",
  },
  {
    href: "#Services",
    label: "Our mission",
  },
  {
    href: "#",
    label: "About",
  },
  {
    href: "#",
    label: "Contact",
  },
];

 const  Nav =()=> {
  const [navOpen ,setNavOpen]= useState(false);
  const MobileMenuHandler =()=>{
    setNavOpen(!navOpen);
  }
  return (
 <>
     <header className='py-6'>
      <div className='container px-3 mx-auto'>
        <div className='flex justify-between items-center'>
          <div>
            <Link href="/">
              <Image src={logo} width={50} height={40} alt="logo" />
            </Link>
          </div>

          <div className='hidden lg:block text-center '>
            <ul className='flex space-x-7 '>
              {navMenu.map((item, index) => (
                <li key={item.label} className='text-[#1D3557] text-lg'>
                  <Link href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Link href="#" className='px-5 py-4 bg-primary text-white shadow-lg rounded-lg hidden lg:inline-block'>
              Get Started
            </Link>
            <button className='block lg:hidden' onClick={ MobileMenuHandler}>
              <HiBars3 className='text-3xl' />
            </button>
          </div>
        </div>
      </div>
    </header>
    <div>
    <div className={ navOpen ? "py-0 block fixed w-screen ":"py-0  hidden block fixed w-screen " }> 
    
      <div className='h-screen w-screen z-[999] top-0 fixed   bg-black bg-opacity-50' onClick={ MobileMenuHandler}></div>

      <div className='bg-white w-[300px] top-0 right-0 z-[999] h-screen fixed '>
      
      <div className='h-14 px-10 border-b flex items-center'>
      <button className='flex items-center space-x-3'onClick={MobileMenuHandler}>
        <GrClose/>
        
      </button>

      </div>

      <div className='h-full py-3 px-10 pb-20 overflow-y-scroll scroll-smooth'>
        <ul className='block mb-7'>

            {navMenu.map((item, index) => (
                <li key={item.label} className='text-[#1D3557]'>
                  <Link href={item.href} className='group flex items-center py-2 duration-300 transition-all ease-in-out hover:text-primary'>
                  <span>  {item.label}</span>
                  </Link>
                </li>
              ))}
        </ul>
      </div>
    </div>
    </div>
    </div>
 </>
   
    
  );
}

export default Nav;
