'use client'
import React ,{useEffect} from "react";
import Link from 'next/link';
import {BiChevranRight} from 'react-icons/bi'
import AOS from "aos";
import "aos/dist/aos.css"
 const stateContent={
  stats:[
    {
    number:'99.9%',
    label:"Child Saftey Solutions"
  },
 {
    number:'3,912',
    label:" Happy customers"
  },
  {
    number:'4.7',
    label:" Rating Reviews"
  },
],
 getStarted:{
heading:"Get Started with our services",
description:"We understand that protecting your childern is important and will help you ",
img:"/images/illustration-woman.svg",
cta:{
  cta_href:"#_",
  cta_label:"Learn More"
}
 }}
const States = () => {
  useEffect (()=>{
    AOS.init({
      duration:700,
      easing :'slide',
      once: true
    })
  })
  return (
  <section className='pt-5 pb-10'>
    <div className="container px-4 mx-auto">
    <div className='lg:flex justify-between items-center space-x-0'>
      <div className='w-full lg:w-7/12 mb-20 lg:mb-0'>
        <div className='grid grid-cols-3 '>
          {stateContent.stats.map((stat,idx) => (
          <div key={`stat-${idx}`}className=' text-center lg:text-left'>
            <strong className='text-primary text-2xl xl:text-[52px] font-bold block leading-tight '>
              {stat.number}
            </strong>
            <span>{stat.label}</span>
          </div>

        )  )}
        </div>
      </div>
      <div className='w-full lg:w-5/12  '>
     <div className='bg-light py-10 px-7 lg:px-10 !pr-28 md:!pr-32 lg:!pr-48 rounded-lg relative'>
      <img src={stateContent.getStarted.img} alt="img" className='absolute right-0 lg:right-6 top-0 w-20'   data-aos="fade-up" data-aos-delay="0"/>
      <h1 className='text-xl text-[#1d5b79]'> {stateContent.getStarted.heading}</h1>
      <h2 className='text-sm pt-5 text-gray-900'>
      {stateContent.getStarted.description}
      </h2>
      <Link  href="/" >
    <button className='px-3 py-1 bg-[#1d5b79] text-white shadow-lg rounded-lg  lg:inline-block duration-300 transition-all ease-in-out hover:bg-primary mt-6'>  {stateContent.getStarted.cta.cta_label}</button>
      </Link>
       
     </div>
      </div>
    </div>
    </div>
  </section>
  )
}

export default States
