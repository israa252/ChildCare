'use client'
import React ,{useEffect} from "react";
import Image from 'next/image';
import AOS from "aos";
import "aos/dist/aos.css"

const Testimonial = () => {
  useEffect (()=>{
    AOS.init({
      duration:700,
      easing :'slide',
      once: true
    })
  })
  return (
    <section className="pt-20 pb-20 bg-light">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-4/12 lg:pr-24 mb-10 lg:mb-0">
            <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">Hear What Our Customers Say</h2>
            <p className="text-body leading-relaxed mb-10 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">From heartwarming testimonials to glowing reviews, these voices reflect the trust and confidence our customers place in us. Let their words speak volumes about the extraordinary experiences that await you with</p>
            {/* <p data-aos="fade-up"  className="aos-init aos-animate">
              <a className="py-4 px-5 bg-primary text-white rounded-lg duration-300 transition-all ease-in-out relative top-0 hover:bg-[#134761] hover:shadow-lg hover:-top-1" href="#_">Get Started</a>
            </p> */}
          </div>
          <div className="lg:w-8/12">
            <div className="md:flex w-full space-x-0 md:space-x-6 items-end">
              <div className="md:w-6/12 mb-6 md:mb-0">

            

                <div className="bg-white p-7 rounded-lg w-full mb-6 aos-init aos-animate" data-aos="fade-up"  >
                  <div className="flex space-x-4 items-center mb-4">
                  
                    <div className="relative">
                    <Image alt="Image" width={150} height={80} className="object-cover h-14 w-14 rounded-full" style={{ color: 'transparent' }} src="/images/person-1-min.jpg" />
                    <span className="absolute bottom-0 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <Image alt="Image" width={10} height={2} layout="fixed" className="text-transparent" src="/images/quote.svg" />
                        </span>
                    </div>
                    
                    <div className="leading-3">
                      <strong className="block text-heading text-lg">Jane Cooper</strong>
                      <span className="text-sm">Customer - Dallas, TX</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-heading leading-relaxed">“With Family Home Security, I feel at ease knowing my family and home are protected 24/7. The system is user-friendly, and their customer support is fantastic!”</p>
                  </div>
                </div>
              </div>
               
              <div className="md:w-6/12">
                <div>
                 
                  <div className="bg-white p-7 rounded-lg w-full mb-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                    <div className="flex space-x-4 items-center mb-4">
                      <div className="relative">
                        <Image alt="Image" width={150} height={80} className="object-cover h-14 w-14 rounded-full" style={{ color: 'transparent' }} src="/images/person-3-min.jpg" />
                        <span className="absolute bottom-0 -right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                          <Image alt="Image" width={10} height={2} layout="fixed" className="text-transparent" src="/images/quote.svg" />
                        </span>
                      </div>
                      <div className="leading-3">
                        <strong className="block text-heading text-lg">Davon McKenny</strong>
                        <span className="text-sm">Customer - Seattle, WA</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-heading leading-relaxed">“After moving to a new neighborhood, I felt vulnerable. Thanks to Family Home Security, I can now sleep soundly, knowing our home is well-protected.”</p>
                    </div>
                  </div>
                  <div className="bg-[#F27763] hidden md:inline-block w-8 h-8 lg:w-16 lg:h-16 rounded-2xl rounded-bl-[200px] aos-init aos-animate" data-aos="fade-up" data-aos-delay="400"></div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
