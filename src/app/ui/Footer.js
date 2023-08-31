import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const companyLinks = [
    { title: 'Home', url: '#' },
    { title: 'How we work', url: '#' },
    { title: 'Our mission', url: '#' },
    { title: 'About', url: '#' },
    { title: 'Careers', url: '#' },
    { title: 'Contact', url: '#' },
  ];

  return (
    <footer role="contentinfo" className="pt-20 pb-5 bg-white">
      <div className="container px-4 mx-auto">
        <div className="block lg:flex gap-20 mb-10 pb-10">
          <div className="w-full lg:w-4/12 mb-10 lg:mb-0">
            <a className="mb-4 inline-block" href="/">
              <Image alt="Logo" width={100} height={30} src="/images/logo.png" />
            </a>
            <p className="leading-relaxed mb-7">
              From heartwarming testimonials to glowing reviews, these voices reflect the trust and confidence our customers place in us. Let their words speak volumes about the extraordinary experiences that await you with.
            </p>
            {/* <p>
              <a className="flex space-x-2 outline-none items-center font-semibold text-primary" href="#_">
                <span>Learn more</span>
                <span className="w-6 h-6 rounded-full bg-primary text-white inline-flex items-center justify-center">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                  </svg>
                </span>
              </a>
            </p> */}
          </div>
          <div className="w-full lg:w-4/12 mb-10 lg:mb-0">
            <div className="grid grid-cols-2 gap-10">
              <div>
                <h3 className="font-semibold text-heading mb-5">Company</h3>
                <ul className="p-0 m-0">
                  {companyLinks.map((link, index) => (
                    <li key={index} className="mb-3">
                      <Link href={link.url}  className="group flex items-center duration-300 transition-all ease-in-out hover:text-primary">
                          <span>{link.title}</span>
                          <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 24 24"
                              className="text-xl"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                            </svg>
                          </span>
                      
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-4/12">
            <h3 className="font-semibold text-heading mb-5">Contact</h3>
            <p className="leading-relaxed mb-7">
              Please feel free to reach out to us with any inquiries, questions, or assistance you may need.
            </p>
            <ul>
              <li className="flex items-start space-x-3 mb-5">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="text-xl text-primary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                </svg>
                <span>23 Main Street</span>
              </li>
              {/* More contact info */}
              <li className="flex items-start space-x-3 mb-5">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="text-xl text-primary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd"></path>
                </svg>
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3 mb-5">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" className="text-xl text-primary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-11-4.69v.447a3.5 3.5 0 001.025 2.475L8.293 10 8 10.293a1 1 0 000 1.414l1.06 1.06a1.5 1.5 0 01.44 1.061v.363a1 1 0 00.553.894l.276.139a1 1 0 001.342-.448l1.454-2.908a1.5 1.5 0 00-.281-1.731l-.772-.772a1 1 0 00-1.023-.242l-.384.128a.5.5 0 01-.606-.25l-.296-.592a.481.481 0 01.646-.646l.262.131a1 1 0 00.447.106h.188a1 1 0 00.949-1.316l-.068-.204a.5.5 0 01.149-.538l1.44-1.234A6.492 6.492 0 0116.5 10z" clipRule="evenodd"></path>
                </svg>
                <span>https://childcare.com</span>
              </li>
            </ul>
          </div>
        </div>
        {/* ... (previous code) */}
      </div>
    </footer>
  );
};

export default Footer;