'use client'
import React ,{useEffect} from "react";

import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"
const herocontent = {
  text: {
    subheading: "welcome to our website 😊",
    heading: "Protecting children , Securing Futures",
    description:
      "A childcare website is an important asset for a childcare provider. It helps attract new potential customers and convince them to enroll their kids in the program.",
  },
  images: {
    img1: "/images/hero-img-1-min.jpg",
    img2: "/images/hero-img-2-min.jpg",
    img3: "/images/hero-img-3-min.jpg",
    img4: "/images/hero-img-4-min.jpg",
    img5: "/images/hero-img-5-min.jpg",
  },
};
const Hero = () => {
  useEffect (()=>{
    AOS.init({
      duration:700,
      easing :'slide',
      once: true
    })
  })
  return (
    <section className="py-10">
      <div className="container px-4 mx-auto ">
        <div className="flex justify-between items-center">
          <div className="lg:w-5/12 mb-10 lg:mb-0">
            <span className="inline-block py-0.5 pl-3 text-heading font-semibold relative mb-7 ">
              {herocontent.text.subheading}
            </span>
            <h1 className="text-3xl lg:text-5xl   font-bold text-heading mb-10">
              {herocontent.text.heading}
            </h1>
            <p className="leading-relaxed text-body mb-10">
              {herocontent.text.description}
            </p>
            <div className="flex space-x-3">
              <Link
                href="#"
                className="px-6 py-4 bg-primary text-white shadow-lg rounded-lg  lg:inline-block duration-300 transition-all ease-in-out hover:bg-[#1d5b79]"
              >
                Get Started
              </Link>

              <Link
                href="#"
                className="px-7 py-4 bg-[#1d5b79] text-white shadow-lg rounded-lg  lg:inline-block hover:bg-primary"
              >
                How it Works
              </Link>
            </div>
          </div>

          <div className="flex space-x-2 items-stretch ">
            <div className="w-8/12">
              <Image
                src={herocontent.images.img1}
                width={197}
                height={206}
                alt="Hero"
                className="object-cover h-full w-full rounded-xl transition-all duration-300 ease-in-out hover:scale-119 "
                data-aos='fade-in'
           
              />
            </div>
            <div className=" w-4/12 self-end space-y-2">
              <div className="gird grid-cols-2 gap-2">
                <Image
                  src={herocontent.images.img2}
                  width={237}
                  height={437}
                  alt="Hero"
                  className="object-cover h-full w-full rounded-2xl transition-all duration-300 ease-in-out hover:scale-105"
                  data-aos='fade-in'
                data-aos-delay='100'
                />
              </div>
              <div className="bg-yellowLight rounded-2xl rounded-tr-[200px]"></div>

              <div>
                <Image
                  src={herocontent.images.img3}
                  width={374}
                  height={392}
                  alt="Hero"
                  className="object-cover h-full w-full rounded-2xl transition-all duration-300 ease-in-out hover:scale-105"
                  data-aos='fade-in'
                data-aos-delay='300'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
