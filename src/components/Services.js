'use client'
import React ,{useEffect} from "react";
import Image from 'next/image';
import AOS from "aos";
import "aos/dist/aos.css"

const serviceContent = {
    heading: {
        headingTitle: "Our Awesome Services",
        description: "We understand that protecting your loved ones is of utmost importance. That's why we are dedicated to providing comprehensive solutions tailored to your family's unique needs."
    },
    items: [
        {
            icon: "/images/icon-1.svg",
            title: "Child Safety Solutions",
            description: "Childproofing services and safety education to keep your children secure and protected at home and in public spaces."
        },
        {
            icon: "/images/icon-2.svg",
            title: "Financial Planning",
            description: "Expert financial advice to help you build a strong financial foundation and plan for your family's long-term security."
        },
        {
            icon: "/images/icon-3.svg",
            title: "Insurance Coverage",
            description: "Tailored insurance policies to protect your family's financial future, including life insurance, health insurance, and property insurance."
        },
        {
            icon: "/images/icon-4.svg",
            title: "Financial Planning",
            description: "Childproofing services and safety education to keep your children secure and protected at home and in public spaces."
        },
        {
            icon: "/images/icon-5.svg",
            title: "Personal Safety Devices",
            description: "Childproofing services and safety education to keep your children secure and protected at home and in public spaces."
        },
        {
            icon: "/images/icon-6.svg",
            title: "Insurance Coverage",
            description: "Childproofing services and safety education to keep your children secure and protected at home and in public spaces."
        },
    ]
};

const Services = () => {
    useEffect (()=>{
        AOS.init({
          duration:700,
          easing :'slide',
          once: true
        })
      })
    return (
        <section className='pt-20 pb-20 bg-light'>
            <div className="container px-4 mx-auto">
            <div className="max-w-xl mx-auto text-center mb-20">
                <span className="inline-block py-0.5 z-50 pl-3 font-semibold text-heading relative mb-3 before:content-[''] before:absolute before:w-2/3 before:bg-yellowLight before:left-0 before:top-0 before:bottom-0 before:-z-10 aos-init aos-animate"
                    data-aos="fade-up" data-aos-delay="0">{serviceContent.heading.headingTitle}</span>
                <h2 className="text-heading text-2xl lg:text-4xl font-bold mb-5 aos-init aos-animate" data-aos="fade-up"
                    data-aos-delay="100">Our Services</h2>
                <p className="text-body leading-relaxed aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">{serviceContent.heading.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                {serviceContent.items.map((item, index) => (
                    <div key={index} className="flex space-x-10 aos-init aos-animate" data-aos="fade-up" data-aos-delay={index * 100}>
                        <div className="w-14 shrink-0">
                            <span className="inline-flex items-center justify-center p-2 w-[70px] h-[70px] rounded-lg bg-white shadow-2xl">
                                <img alt="Service Icon" loading="lazy" width="62" height="62"   style={{ color: 'transparent' }}
                                    src={item.icon} />
                            </span>
                        </div>
                        <div>
                            <h3 className="text-heading font-bold text-md mb-3">{item.title}</h3>
                            <p className="leading-relaxed">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </section>
    );
};

export default Services;
