import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import '../styles/animations.css';
import screenbgimage from '../assets/Homebgimg/homebgimg.jpg'
import ecomone from '../assets/ecomimg/ecomone.jpg'
import ecomtwo from '../assets/ecomimg/ecomtwo.webp'
import ecomthree from '../assets/ecomimg/ecomthree.webp'
import ecomfour from '../assets/ecomimg/ecomfour.webp'
import ecomfive from '../assets/ecomimg/ecomfive.webp'
import ecomsix from '../assets/ecomimg/ecomsix.webp'
import ecomseven from '../assets/ecomimg/ecomseven.webp'
import ecomeight from '../assets/ecomimg/ecomeight.webp'
import ecomeleven from '../assets/ecomimg/ecomeleven.webp'
import ecomtwelve from '../assets/ecomimg/ecomtwelve.webp'
import ecomfifteen from '../assets/ecomimg/ecomfifteen.webp'
import ecomsixteen from '../assets/ecomimg/ecomsixteen.webp'
import sideimgone from '../assets/sideimage/sideimgone.jpg'
import Reviewone from '../assets/reviewimg/reviewone.jpeg'
import Reviewtwo from '../assets/reviewimg/reviewtwo.webp'
import Reviewthree from '../assets/reviewimg/reviewthree.webp'
import Reviewfour from '../assets/reviewimg/reviewfour.webp'
import Reviewfive from '../assets/reviewimg/reviewfive.jpeg'
import Reviewsix from '../assets/reviewimg/reviewsix.jpeg'
import Reviewseven from '../assets/reviewimg/reviewseven.jpeg'
import Revieweight from '../assets/reviewimg/revieweight.webp'
import Reviewnine from '../assets/reviewimg/reviewnine.webp'
import Sliderimage from '../components/Slider'

const Home = ( {setCartCount} ) => {

  const [inputFocused, setInputFocused] = useState(false);
  const [email, setEmail] = useState('');
  const [animateStars, setAnimateStars] = useState(false);
  const imageRef = useRef(null);

  const hanlderCount = () => {
    setCartCount((prev) => prev + 1);
  };

  useEffect(() => {
    let observer = null;

    const headers = document.querySelectorAll('header');

    // IntersectionObserver for header animation on scroll
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add animation class only if not already added
            if (!entry.target.classList.contains('animate-slide-left-to-right')) {
              entry.target.classList.add('animate-slide-left-to-right');
              // Reload sideimgone image when it comes into view
              if (entry.target === imageRef.current) {
                const src = entry.target.src;
                entry.target.src = '';
                entry.target.src = src;
                // Remove opacity-0 to make image visible
                entry.target.classList.remove('opacity-0');
              }
            }
          } else {
            // Do not remove animation class to prevent re-animation on scroll
            // Optionally add opacity-0 when out of view only for image
            if (entry.target === imageRef.current) {
              entry.target.classList.add('opacity-0');
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    headers.forEach(header => {
      observer.observe(header);
    });
    // Also observe the imageRef element for animation
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      headers.forEach(header => {
        observer.unobserve(header);
      });
    };
  }, []);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(true);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (value.toLowerCase().endsWith('.com')) {
      setAnimateStars(true);
    } else {
      setAnimateStars(false);
    }
  };



  return (
    <>

        <div className="h-auto w-full bg-[#fbeaeb] select-none hide-scrollbar">

            {/* Adding Heading section */}
         <div className="h-screen  bg-center bg-cover flex justify-center items-center pr-[1000px] " style={{ backgroundImage: `url(${screenbgimage})` }}>
<header className="w-[300px] text-8xl text-white uppercase font-sans">
                explore the special collection!
            </header>
         </div>

         {/* Adding Image Slider */}
         <div className='h-[500px] w-full bg-[#fcf2f3] flex justify-center items-center'>
            <Sliderimage />
         </div>
         
         {/* Adding Featured Products In Main Div Section */}
         <div className='h-[100px] w-full bg-[#fcf2f3] grid place-content-center'>
<header className='text-[#2f3c7e] text-3xl font-medium'  >Featured Products</header>
         </div>

         <div className='h-[1100px] w-full bg-[#fcf2f3]'>

         <div className='h-[550px] w-full flex justify-center items-center gap-10'>
         <div className='shadow rounded-2xl'>
            <img src={ecomone} alt="image" className='h-[350px] w-[300px] rounded-2xl transition-transform duration-300 hover:opacity-80 hover:scale-105 cursor-pointer ' />
            <div className='mt-[10px]'>
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            {/* Adding Solidstar Icon For Rating */}
            <div className="flex text-yellow-400 text-md space-x-1">
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            </div>
            <p>Rs 599</p>
            </div>
            <div className='mt-[10px]'>
            <button className='float-left h-[30px] w-[120px] outline-0 shadow rounded-full font-medium bg-white text-red-400 px-6 py-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100 cursor-pointer '>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[30px] w-[150px] outline-0 shadow rounded-full font-medium bg-white text-red-400 px-6 py-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100 cursor-pointer '>Add To Cart</button>
            </div>
         </div>

         <div className='shadow rounded-2xl'>
            <img src={ecomtwo} alt="image" className='h-[350px] w-[300px] rounded-2xl transition-transform duration-300 hover:opacity-80 hover:scale-105 cursor-pointer ' />
            <div className='mt-[10px]'>
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            {/* Adding Solidstar Icon For Rating */}
            <div className="flex text-yellow-400 text-md space-x-1">
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            </div>
            <p>Rs 599</p>
            </div>
            <div className='mt-[10px]'>
            <button className='float-left h-[30px] w-[120px] outline-0 shadow rounded-full font-medium bg-white text-red-400 px-6 py-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100 cursor-pointer '>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[30px] w-[150px] outline-0 shadow rounded-full font-medium bg-white text-red-400 px-6 py-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100 cursor-pointer '>Add To Cart</button>
            </div>
         </div>

         <div className='shadow rounded-2xl'>
            <img src={ecomthree} alt="image" className='h-[350px] w-[300px] rounded-2xl transition-transform duration-300 hover:opacity-80 hover:scale-105 cursor-pointer' />
            <div className='mt-[10px]'>
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            {/* Adding Solidstar Icon For Rating */}
            <div className="flex text-yellow-400 text-md space-x-1">
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            </div>
            <p>Rs 599</p>
            </div>
            <div className='mt-[10px]'>
            <button className='float-left h-[30px] w-[120px] outline-0 shadow rounded-full font-medium bg-white text-red-400 px-6 py-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100 cursor-pointer '>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[30px] w-[150px] outline-0 shadow rounded-full font-medium bg-white text-red-400 px-6 py-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100 cursor-pointer '>Add To Cart</button>
            </div>
         </div>

         <div className='shadow rounded-2xl'>
            <img src={ecomfour} alt="image" className='h-[350px] w-[300px] rounded-2xl transition-transform duration-300 hover:opacity-80 hover:scale-105 cursor-pointer' />
            <div className='mt-[10px]'>
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            {/* Adding Solidstar Icon For Rating */}
            <div className="flex text-yellow-400 text-md space-x-1">
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            </div>
            <p>Rs 599</p>
            </div>
            <div className='mt-[10px]'>
            <button className='float-left h-[30px] w-[120px] outline-0 shadow rounded-full font-medium bg-white text-red-400 px-6 py-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100 cursor-pointer '>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[30px] w-[150px] outline-0 shadow rounded-full font-medium bg-white text-red-400 px-6 py-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100 cursor-pointer '>Add To Cart</button>
            </div>
         </div>
         </div>

         <div className='h-[550px] w-full flex justify-center items-center gap-10'>
         <div className='shadow rounded-2xl'>
            <img src={ecomfive} alt="image" className='h-[350px] w-[300px] rounded-2xl transition-transform duration-300 hover:opacity-80 hover:scale-105 cursor-pointer' />
            <div className='mt-[10px]'>
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            {/* Adding Solidstar Icon For Rating */}
            <div className="flex text-yellow-400 text-md space-x-1">
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            </div>
            <p>Rs 599</p>
            </div>
            <div className='mt-[10px]'>
            <button className='float-left h-[30px] w-[120px] outline-0 shadow rounded-full font-medium bg-white text-red-400 px-6 py-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100 cursor-pointer '>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[30px] w-[150px] outline-0 shadow rounded-full font-medium bg-white text-red-400 px-6 py-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100 cursor-pointer '>Add To Cart</button>
            </div>
         </div>

         <div className='shadow rounded-2xl'>
            <img src={ecomsix} alt="image" className='h-[350px] w-[300px] rounded-2xl transition-transform duration-300 hover:opacity-80 hover:scale-105 cursor-pointer' /> 
            <div className='mt-[10px]'>
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            {/* Adding Solidstar Icon For Rating */}
            <div className="flex text-yellow-400 text-md space-x-1">
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            </div>
            <p>Rs 599</p>
            </div>
            <div className='mt-[10px]'>
            <button className='float-left h-[30px] w-[120px] outline-0 shadow rounded-full font-medium bg-white text-red-400 px-6 py-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100 cursor-pointer '>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[30px] w-[150px] outline-0 shadow rounded-full font-medium bg-white text-red-400 px-6 py-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100 cursor-pointer '>Add To Cart</button>
            </div>
         </div>

         <div className='shadow rounded-2xl'>
            <img src={ecomseven} alt="image" className='h-[350px] w-[300px] rounded-2xl transition-transform duration-300 hover:opacity-80 hover:scale-105 cursor-pointer' />
            <div className='mt-[10px]'>
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            {/* Adding Solidstar Icon For Rating */}
            <div className="flex text-yellow-400 text-md space-x-1">
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            </div>
            <p>Rs 599</p>
            </div>
            <div className='mt-[10px]'>
            <button className='float-left h-[30px] w-[120px] outline-0 shadow rounded-full font-medium bg-white text-red-400 px-6 py-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100 cursor-pointer '>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[30px] w-[150px] outline-0 shadow rounded-full font-medium bg-white text-red-400 px-6 py-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100 cursor-pointer '>Add To Cart</button>
            </div>
         </div>

         <div className='shadow rounded-2xl'>
            <img src={ecomeight} alt="image" className='h-[350px] w-[300px] rounded-2xl transition-transform duration-300 hover:opacity-80 hover:scale-105 cursor-pointer' />
            <div className='mt-[10px]'>
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            {/* Adding Solidstar Icon For Rating */}
            <div className="flex text-yellow-400 text-md space-x-1">
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            </div>
            <p>Rs 599</p>
            </div>
            <div className='mt-[10px]'>
            <button className='float-left h-[30px] w-[120px] outline-0 shadow rounded-full font-medium bg-white text-red-400 px-6 py-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100 cursor-pointer '>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[30px] w-[150px] outline-0 shadow rounded-full font-medium bg-white text-red-400 px-6 py-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100 cursor-pointer '>Add To Cart</button>
            </div>
         </div>
         </div>

         </div>

        {/* Adding  Most Demanded Products */}
        <div className='h-[100px] w-full bg-[#fcf2f3] grid place-content-center'>
<header className='text-[#2f3c7e] text-3xl font-medium'>Demanded Products</header>
         </div>

         <div className='h-[1100px] w-full bg-[#fcf2f3]'>

         <div className='h-[550px] w-full flex justify-center items-center gap-10'>
         <div className='shadow rounded-2xl'>
            <img src={ecomeight} alt="image" className='h-[350px] w-[300px] rounded-2xl transition-transform duration-300 hover:opacity-80 hover:scale-105 cursor-pointer' />
            <div className='mt-[10px]'>
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            {/* Adding Solidstar Icon For Rating */}
            <div className="flex text-yellow-400 text-md space-x-1">
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            </div>
            <p>Rs 599</p>
            </div>
            <div className='mt-[10px]'>
            <button className='float-left h-[30px] w-[120px] outline-0 shadow rounded-full font-medium bg-white text-red-400 px-6 py-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100 cursor-pointer '>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[30px] w-[150px] outline-0 shadow rounded-full font-medium bg-white text-red-400 px-6 py-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100 cursor-pointer '>Add To Cart</button>
            </div>
         </div>

         <div className='shadow rounded-2xl'>
            <img src={ecomsix} alt="image" className='h-[350px] w-[300px] rounded-2xl transition-transform duration-300 hover:opacity-80 hover:scale-105 cursor-pointer' />
            <div className='mt-[10px]'>
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            {/* Adding Solidstar Icon For Rating */}
            <div className="flex text-yellow-400 text-md space-x-1">
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            </div>
            <p>Rs 599</p>
            </div>
            <div className='mt-[10px]'>
            <button className='float-left h-[30px] w-[120px] outline-0 shadow rounded-full font-medium bg-white text-red-400 px-6 py-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100 cursor-pointer '>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[30px] w-[150px] outline-0 shadow rounded-full font-medium bg-white text-red-400 px-6 py-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100 cursor-pointer '>Add To Cart</button>
            </div>
         </div>

         <div className='shadow rounded-2xl'>
            <img src={ecomeleven} alt="image" className='h-[350px] w-[300px] rounded-2xl transition-transform duration-300 hover:opacity-80 hover:scale-105 cursor-pointer' />
            <div className='mt-[10px]'>
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            {/* Adding Solidstar Icon For Rating */}
            <div className="flex text-yellow-400 text-md space-x-1">
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            </div>
            <p>Rs 599</p>
            </div>
            <div className='mt-[10px]'>
            <button className='float-left h-[30px] w-[120px] outline-0 shadow rounded-full font-medium bg-white text-red-400 px-6 py-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100 cursor-pointer '>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[30px] w-[150px] outline-0 shadow rounded-full font-medium bg-white text-red-400 px-6 py-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100 cursor-pointer '>Add To Cart</button>
            </div>
         </div>

         <div className='shadow rounded-2xl'>
            <img src={ecomtwelve} alt="image" className='h-[350px] w-[300px] rounded-2xl transition-transform duration-300 hover:opacity-80 hover:scale-105 cursor-pointer' />
            <div className='mt-[10px]'>
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            {/* Adding Solidstar Icon For Rating */}
            <div className="flex text-yellow-400 text-md space-x-1">
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            </div>
            <p>Rs 599</p>
            </div>
            <div className='mt-[10px]'>
            <button className='float-left h-[30px] w-[120px] outline-0 shadow rounded-full font-medium bg-white text-red-400 px-6 py-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100 cursor-pointer '>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[30px] w-[150px] outline-0 shadow rounded-full font-medium bg-white text-red-400 px-6 py-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100 cursor-pointer '>Add To Cart</button>
            </div>
         </div>
         </div>

         <div className='h-[550px] w-full flex justify-center items-center gap-10'>
         <div className='shadow rounded-2xl'>
            <img src={ecomtwo} alt="image" className='h-[350px] w-[300px] rounded-2xl transition-transform duration-300 hover:opacity-80 hover:scale-105 cursor-pointer' />
            <div className='mt-[10px]'>
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            {/* Adding Solidstar Icon For Rating */}
            <div className="flex text-yellow-400 text-md space-x-1">
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            </div>
            <p>Rs 599</p>
            </div>
            <div className='mt-[10px]'>
            <button className='float-left h-[30px] w-[120px] outline-0 shadow rounded-full font-medium bg-white text-red-400 px-6 py-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100 cursor-pointer '>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[30px] w-[150px] outline-0 shadow rounded-full font-medium bg-white text-red-400 px-6 py-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100 cursor-pointer '>Add To Cart</button>
            </div>
         </div>

         <div className='shadow rounded-2xl'>
            <img src={ecomfour} alt="image" className='h-[350px] w-[300px] rounded-2xl transition-transform duration-300 hover:opacity-80 hover:scale-105 cursor-pointer' />
            <div className='mt-[10px]'>
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            {/* Adding Solidstar Icon For Rating */}
            <div className="flex text-yellow-400 text-md space-x-1">
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            </div>
            <p>Rs 599</p>
            </div>
            <div className='mt-[10px]'>
            <button className='float-left h-[30px] w-[120px] outline-0 shadow rounded-full font-medium bg-white text-red-400 px-6 py-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100 cursor-pointer '>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[30px] w-[150px] outline-0 shadow rounded-full font-medium bg-white text-red-400 px-6 py-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100 cursor-pointer '>Add To Cart</button>
            </div>
         </div>

         <div className='shadow rounded-2xl'>
            <img src={ecomfifteen} alt="image" className='h-[350px] w-[300px] rounded-2xl transition-transform duration-300 hover:opacity-80 hover:scale-105 cursor-pointer' />
            <div className='mt-[10px]'>
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            {/* Adding Solidstar Icon For Rating */}
            <div className="flex text-yellow-400 text-md space-x-1">
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            </div>
            <p>Rs 599</p>
            </div>
            <div className='mt-[10px]'>
            <button className='float-left h-[30px] w-[120px] outline-0 shadow rounded-full font-medium bg-white text-red-400 px-6 py-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100 cursor-pointer '>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[30px] w-[150px] outline-0 shadow rounded-full font-medium bg-white text-red-400 px-6 py-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100 cursor-pointer '>Add To Cart</button>
            </div>
         </div>

         <div className='shadow rounded-2xl'>
            <img src={ecomsixteen} alt="image" className='h-[350px] w-[300px] rounded-2xl transition-transform duration-300 hover:opacity-80 hover:scale-105 cursor-pointer' />
            <div className='mt-[10px]'>
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>

            {/* Adding Solidstar Icon For Rating */}
            <div className="flex text-yellow-400 text-md space-x-1">
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            </div>
            <p>Rs 599</p>
            </div>
            <div className='mt-[10px]'>
            <button className='float-left h-[30px] w-[120px] outline-0 shadow rounded-full font-medium bg-white text-red-400 px-6 py-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100 cursor-pointer '>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[30px] w-[150px] outline-0 shadow rounded-full font-medium bg-white text-red-400 px-6 py-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100 cursor-pointer '>Add To Cart</button>
            </div>
         </div>
         </div>

         </div>

         {/* Adding Connection Section */}
        <div className='h-[100px] w-full bg-white grid place-content-center '>
<header className='text-3xl text-[#2f3c7e] font-medium'>Connect With Us</header>
         </div>

         <div className='h-[300px] w-full bg-white flex justify-center items-center gap-10'>

          <div className='h-[250px] w-[250px]'>
              <img
                ref={imageRef}
                src={sideimgone}
                alt="image"
                className='h-[250px] w-[250px]'
              />
          </div>

          <div>
            <form>
              <input
                type="email"
                placeholder='Enter Your Email'
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onChange={handleEmailChange}
                value={email}
                className={`h-[50px] w-[450px] border-2 border-[#f3cdd1] rounded-full pl-5 outline-0 text-slate-700 font-normal transition-all duration-300 ${
                  inputFocused ? 'input-focus-animate' : ''
                } ${animateStars ? 'blinking-stars' : ''}`}
              />
              <span className='pl-[18px]'>
                <input
                  type="submit"
                  value='Send'
                  className='h-[50px] w-[130px] transition-all duration-200 rounded-full text-[#4f536d] hover:bg-red-300 hover:text-white cursor-pointer shadow-sm shadow-rose-400 hover:scale-105 hover:rotate-360 delay-300'
                />
              </span>
            </form>
          </div>

         </div>
        {/* Ending Div Of Connect With Us */}

        {/* Adding Testimonial Section */}
        <div className='h-[100px] w-full bg-white grid place-content-center'>
        <header className='text-[#2f3c7e] text-3xl font-medium'>Our Testimonials</header>
        </div>

        <div className='h-[1500px] w-full bg-white'>
        <div className='h-[500px] w-full flex justify-center items-center gap-20'>
        <div className='shadow rounded-md'>
          <img src={Reviewone} alt="image" className='h-[300px] w-[350px] rounded-md' />
          <div className='mt-[10px] ml-[10px]'>
            <p className='text-lg font-bold text-[#2f3c7e]'>Raunak Raj</p>
            <p className='text-sm font-light text-[#2f3c7e]'>Gold Member</p>

            {/* Adding Solidstar Icon For Rating */}
            <div className="flex text-yellow-400 text-md space-x-1">
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            </div>
            <p className='w-[300px] text-md font-normal text-[#2f3c7e]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, reiciendis?</p>
          </div>
        </div>

        <div className='shadow rounded-md'>
          <img src={Reviewtwo} alt="image" className='h-[300px] w-[350px] rounded-md' />
          <div className='mt-[10px] ml-[10px]'>
            <p className='text-lg font-bold text-[#2f3c7e]'>Rishi Raj</p>
            <p className='text-sm font-light text-[#2f3c7e]'>Gold Member</p>

            {/* Adding Solidstar Icon For Rating */}
            <div className="flex text-yellow-400 text-md space-x-1">
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            </div>
            <p className='w-[300px] text-md font-normal text-[#2f3c7e]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, reiciendis?</p>
          </div>
        </div>

        <div className='shadow rounded-md'>
          <img src={Reviewthree} alt="image" className='h-[300px] w-[350px] rounded-md' />
          <div className='mt-[10px] ml-[10px]'>
            <p className='text-lg font-bold text-[#2f3c7e]'>Mayank Singh</p>
            <p className='text-sm font-light text-[#2f3c7e]'>Gold Member</p>

            {/* Adding Solidstar Icon For Rating */}
            <div className="flex text-yellow-400 text-md space-x-1">
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            </div>
            <p className='w-[300px] text-md font-normal text-[#2f3c7e]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, reiciendis?</p>
          </div>
        </div>
        </div>

        <div className='h-[500px] w-full flex justify-center items-center gap-20'>
        <div className='shadow rounded-md'>
          <img src={Reviewfour} alt="image" className='h-[300px] w-[350px] rounded-md' />
          <div className='mt-[10px] ml-[10px]'>
            <p className='text-lg font-bold text-[#2f3c7e]'>Akshay Raj</p>
            <p className='text-sm font-light text-[#2f3c7e]'>Gold Member</p>

            {/* Adding Solidstar Icon For Rating */}
            <div className="flex text-yellow-400 text-md space-x-1">
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            </div>
            <p className='w-[300px] text-md font-normal text-[#2f3c7e]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, reiciendis?</p>
          </div>
        </div>

        <div className='shadow rounded-md'>
          <img src={Reviewfive} alt="image" className='h-[300px] w-[350px] rounded-md' />
          <div className='mt-[10px] ml-[10px]'>
            <p className='text-lg font-bold text-[#2f3c7e]'>Aadya Rathore</p>
            <p className='text-sm font-light text-[#2f3c7e]'>Gold Member</p>

            {/* Adding Solidstar Icon For Rating */}
            <div className="flex text-yellow-400 text-md space-x-1">
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            </div>
            <p className='w-[300px] text-md font-normal text-[#2f3c7e]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, reiciendis?</p>
          </div>
        </div>

        <div className='shadow rounded-md'>
          <img src={Reviewsix} alt="image" className='h-[300px] w-[350px] rounded-md' />
          <div className='mt-[10px] ml-[10px]'>
            <p className='text-lg font-bold text-[#2f3c7e]'>Vanshika Mishra</p>
            <p className='text-sm font-light text-[#2f3c7e]'>Gold Member</p>

            {/* Adding Solidstar Icon For Rating */}
            <div className="flex text-yellow-400 text-md space-x-1">
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            </div>
            <p className='w-[300px] text-md font-normal text-[#2f3c7e]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, reiciendis?</p>
          </div>
        </div>
        </div>

        <div className='h-[500px] w-full flex justify-center items-center gap-20'>
        <div className='shadow rounded-md'>
          <img src={Reviewseven} alt="image" className='h-[300px] w-[350px] rounded-md' />
          <div className='mt-[10px] ml-[10px]'>
            <p className='text-lg font-bold text-[#2f3c7e]'>Shreya Jha</p>
            <p className='text-sm font-light text-[#2f3c7e]'>Gold Member</p>

            {/* Adding Solidstar Icon For Rating */}
            <div className="flex text-yellow-400 text-md space-x-1">
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            </div>
            <p className='w-[300px] text-md font-normal text-[#2f3c7e]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, reiciendis?</p>
          </div>
        </div>

        <div className='shadow rounded-md'>
          <img src={Revieweight} alt="image" className='h-[300px] w-[350px] rounded-md' />
          <div className='mt-[10px] ml-[10px]'>
            <p className='text-lg font-bold text-[#2f3c7e]'>Subham Sharma</p>
            <p className='text-sm font-light text-[#2f3c7e]'>Gold Member</p>

            {/* Adding Solidstar Icon For Rating */}
            <div className="flex text-yellow-400 text-md space-x-1">
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            </div>
            <p className='w-[300px] text-md font-normal text-[#2f3c7e]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, reiciendis?</p>
          </div>
        </div>

        <div className='shadow rounded-md'>
          <img src={Reviewnine} alt="image" className='h-[300px] w-[350px] rounded-md' />
          <div className='mt-[10px] ml-[10px]'>
            <p className='text-lg font-bold text-[#2f3c7e]'>Khusi Kumari</p>
            <p className='text-sm font-light text-[#2f3c7e] '>Gold Member</p>

            {/* Adding Solidstar Icon For Rating */}
            <div className="flex text-yellow-400 text-md space-x-1">
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            <FontAwesomeIcon icon={solidStar} />
            </div>
            <p className='w-[300px] text-md font-normal text-[#2f3c7e]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, reiciendis?</p>
          </div>
        </div>
        </div>

        </div>
        {/* Closing div of testimonial section */}

        </div>
        {/* Main Closing Div */}
        </>
    );
};
export default Home;
