import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const Footer = () => {
  const footerRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes slideInLeft {
            0% { transform: translateX(-100%); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          .animate-slide-in-left {
            animation: slideInLeft 1s ease-out forwards;
          }
        `}
      </style>

      <div
        ref={footerRef}
        className="w-full bg-slate-800 flex flex-col md:flex-row flex-wrap justify-center items-start gap-10 md:gap-20 px-6 py-12 select-none"
      >
        <div className="w-full sm:w-[300px]">
          <header className={`text-3xl text-white ${animate ? 'animate-slide-in-left' : ''}`}>Velomart</header>
          <p className="pt-2 text-md text-white">
            Top brand cloth & accessories are available here <br />
            Delivered Fast
          </p>
        </div>

        <div className="w-full sm:w-[200px]">
          <header className={`text-2xl text-white ${animate ? 'animate-slide-in-left' : ''}`}>Quick Links</header>
          <div className="pt-4 space-y-2">
            <Link to="/" className="block text-white hover:text-red-300 text-md">Shop</Link>
            <Link to="/about" className="block text-white hover:text-red-300 text-md">About Us</Link>
            <Link to="/contact" className="block text-white hover:text-red-300 text-md">Contact Us</Link>
          </div>
        </div>

        <div className="w-full sm:w-[250px]">
          <header className={`text-2xl text-white ${animate ? 'animate-slide-in-left' : ''}`}>Contact</header>
          <div className="pt-4 space-y-2">
            <p className="text-white text-md">akshayraj3435@gmail.com</p>
            <p className="text-white text-md">Number : +91 9142158588</p>
            <p className="text-white text-md">Location : Patna, Bihar</p>
          </div>
        </div>

        <div className="w-full sm:w-[350px]">
          <header className={`text-2xl text-white ${animate ? 'animate-slide-in-left' : ''}`}>Subscribe</header>
          <div className="pt-2">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full h-[50px] outline-0 bg-transparent shadow-md shadow-rose-100 text-white text-md pl-5 rounded-full"
            />
          </div>
          <div className="pt-4">
            <input
              type="submit"
              value="Send"
              className="w-[150px] h-[50px] outline-0 bg-transparent shadow-md shadow-rose-100 text-rose-400 text-md rounded-full hover:shadow-rose-300 cursor-pointer transition delay-200"
            />
          </div>
        </div>
      </div>

      <div className="h-[50px] w-full bg-slate-800 grid place-content-center select-none">
        <p className="text-white text-md font-medium">
          © {new Date().getFullYear()} rosu Store. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
