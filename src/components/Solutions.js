'use client'
import React ,{useEffect} from "react";
import Image from 'next/image';
import AOS from "aos";
import "aos/dist/aos.css"

const Solutions = () => {
  useEffect (()=>{
    AOS.init({
      duration:700,
      easing :'slide',
      once: true
    })
  })
  return (
    <section className="pt-32 pb-32 bg-light overflow-x-hidden">
      <div className="container px-4 mx-auto">
        <div className="lg:flex space-x-2 justify-between">
          
          <div className="flex gap-2">
            <div className="flex flex-col space-y-2">
              <div>
                <Image alt="com" data-aos="fade-right" data-aos-delay="100" loading="lazy" width={626} height={740} decoding="async" data-nimg="1" className="object-cover h-full w-full rounded-lg aos-init aos-animate" src="/images/solution-img-3-min.jpg" />
              </div>
              
            </div>
          </div>

          <div className="lg:w-5/12 relative z-10">
          <span className="inline-block z-10 py-0.5 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-yellowLight before:left-0 before:top-0 before:bottom-0 before:z-[-1] aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">Our Solutions</span>
            <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">From safeguarding your home with state-of-the-art alarm systems</h2>
            <p className="text-body leading-relaxed mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">From safeguarding your home with state-of-the-art alarm systems to offering reliable insurance options, we ensure that your family is protected in every aspect of life. With our Family Security Plan, you can rest easy knowing that you've taken the necessary steps to secure a brighter future for your family. Trust us to be your partner in safeguarding what matters most – your family's well-being.</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4 md:gap-5 mb-10">
              <li className="flex flex-row items-center space-x-4 aos-init aos-animate" data-aos="fade-left" data-aos-delay="0">
                <span className="w-7 h-7 rounded-full bg-[#4CC9F0] flex items-center justify-center">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-white text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
                  </svg>
                </span>
                <span>Home Fire Safety</span>
              </li>
              <li className="flex flex-row items-center space-x-4 aos-init aos-animate" data-aos="fade-left" data-aos-delay="100">
                <span className="w-7 h-7 rounded-full bg-[#4CC9F0] flex items-center justify-center">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-white text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
                  </svg>
                </span>
                <span>Cybersecurity Solutions</span>
              </li>
              <li className="flex flex-row items-center space-x-4 aos-init aos-animate" data-aos="fade-left" data-aos-delay="200">
                <span className="w-7 h-7 rounded-full bg-[#4CC9F0] flex items-center justify-center">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-white text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
                  </svg>
                </span>
                <span>Emergency Preparedness</span>
              </li>
              <li className="flex flex-row items-center space-x-4 aos-init aos-animate" data-aos="fade-left" data-aos-delay="300">
                <span className="w-7 h-7 rounded-full bg-[#4CC9F0] flex items-center justify-center">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-white text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
                  </svg>
                </span>
                <span>Identity Theft Protection</span>
              </li>
            </ul>
          
          </div>
          </div>
    </div>
    </section>
  );
}

export default Solutions;
