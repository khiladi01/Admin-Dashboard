import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import '../styles/animations.css';
import screenbgimage from '../assets/Homebgimg/homebgimg.jpg'
import sideimgone from '../assets/sideimage/sideimgone.jpg'
import Sliderimage from '../components/Slider'
import Product from '../components/Product.js';
import Demand from '../components/Demand.js';
import Testimonial from '../components/Testimonial.js';

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

        <div className="h-auto w-full bg-[#fbeaeb] select-none hide-scrollbar overflow-y-scroll">

            {/* Adding Heading section */}
           <div className="relative h-screen bg-center bg-cover flex justify-start items-center px-4 md:px-20 lg:px-60" style={{ backgroundImage: `url(${screenbgimage})` }}>
          {/* Dark overlay to reduce brightness */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Content */}
          <header className="relative text-left text-4xl md:text-6xl lg:text-8xl text-white uppercase font-sans max-w-[300px] z-10">
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

         <div className='min-h-screen w-full bg-[#fcf2f3] py-10'>
         <div className='flex flex-wrap justify-center gap-6 px-4'>
         {Product.map((item, index) => (
         <div key={index} className='shadow rounded-2xl max-w-xs w-full p-2'>
         <img
          src={item.img}
          alt={item.name}
          className='h-[350px] w-full object-cover rounded-2xl transition-transform duration-300 hover:opacity-80 hover:scale-105 cursor-pointer'
        />
        <div className='mt-3'>
          <p className='text-base font-semibold'> {item.name} </p>
          <p className='text-sm text-gray-500'> {item.brand} </p>
          <div className="flex text-yellow-400 text-md space-x-1 my-1">
            {[...Array(5)].map((_, i) => (
              <FontAwesomeIcon key={i} icon={solidStar} />
            ))}
          </div>
          <p className='font-bold'> {item.price} </p>
        </div>
        <div className='mt-3 flex justify-between'>
          <button className='h-[30px] w-[120px] outline-0 shadow rounded-full font-medium bg-white text-red-400 text-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100'>
            Buy Now
          </button>
          <button
            onClick={hanlderCount}
            className='h-[30px] w-[150px] outline-0 shadow rounded-full font-medium bg-white text-red-400 text-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100'
          >
            Add To Cart
          </button>
        </div>
      </div>
    ))}
  </div>
</div>


        {/* Adding  Most Demanded Products */}
        <div className='h-[100px] w-full bg-[#fcf2f3] grid place-content-center'>
<header className='text-[#2f3c7e] text-3xl font-medium'>Demanded Products</header>
         </div>

         <div className='min-h-screen w-full bg-[#fcf2f3] py-10'>
  <div className='flex flex-wrap justify-center gap-6 px-4'>
    {Demand.map((Item, index) => (
      <div key={index} className='shadow rounded-2xl max-w-xs w-full p-2'>
        <img
          src={Item.img}
          alt={Item.name}
          className='h-[350px] w-full object-cover rounded-2xl transition-transform duration-300 hover:opacity-80 hover:scale-105 cursor-pointer'
        />
        <div className='mt-3'>
          <p className='text-base font-semibold'> {Item.name} </p>
          <p className='text-sm text-gray-500'> {Item.brand} </p>
          <div className="flex text-yellow-400 text-md space-x-1 my-1">
            {[...Array(5)].map((_, i) => (
              <FontAwesomeIcon key={i} icon={solidStar} />
            ))}
          </div>
          
          <p className='font-bold'> {Item.price} </p>
        </div>
        <div className='mt-3 flex justify-between'>
          <button className='h-[30px] w-[120px] outline-0 shadow rounded-full font-medium bg-white text-red-400 text-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100'>
            Buy Now
          </button>
          <button
            onClick={hanlderCount}
            className='h-[30px] w-[150px] outline-0 shadow rounded-full font-medium bg-white text-red-400 text-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100'
          >
            Add To Cart
          </button>
        </div>
      </div>
    ))}
  </div>
</div>


         {/* Adding Connection Section */}
        <div className='h-[100px] w-full bg-white grid place-content-center '>
<header className='text-3xl text-[#2f3c7e] font-medium'>Connect With Us</header>
         </div>

         <div className='w-full bg-white flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 px-4 py-6'>

  <div className='h-[200px] w-[200px] md:h-[250px] md:w-[250px]'>
    <img
      ref={imageRef}
      src={sideimgone}
      alt="image"
      className='h-full w-full object-cover'
    />
  </div>

  <div className='w-full md:w-auto'>
    <form className='flex flex-col sm:flex-row items-center gap-4'>
      <input
        type="email"
        placeholder='Enter Your Email'
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChange={handleEmailChange}
        value={email}
        className={`h-[50px] w-full sm:w-[300px] md:w-[450px] border-2 border-[#f3cdd1] rounded-full pl-5 outline-0 text-slate-700 font-normal transition-all duration-300 ${
          inputFocused ? 'input-focus-animate' : ''
        } ${animateStars ? 'blinking-stars' : ''}`}
      />
      <input
        type="submit"
        value='Send'
        className='h-[50px] w-[130px] transition-all duration-200 rounded-full text-[#4f536d] hover:bg-red-300 hover:text-white cursor-pointer shadow-sm shadow-rose-400 hover:scale-105 hover:rotate-360 delay-300'
      />
    </form>
  </div>

</div>

        {/* Ending Div Of Connect With Us */}

        {/* Adding Testimonial Section */}
        <div className='h-[100px] w-full bg-white grid place-content-center'>
        <header className='text-[#2f3c7e] text-3xl font-medium'>Our Testimonials</header>
        </div>

        <div className='min-h-screen w-full bg-white py-10'>
         <div className='flex flex-wrap justify-center gap-6 px-4'>
         {Testimonial.map((item, index) => (
         <div key={index} className='shadow rounded-2xl max-w-xs w-full p-2'>
         <img
          src={item.img}
          alt={item.name}
          className='h-[350px] w-full object-cover rounded-2xl'
        />
        <div className='mt-3'>
          <p className='text-base font-semibold'> {item.name} </p>
          <p className='text-sm text-gray-500'> {item.member} </p>
          <div className="flex text-yellow-400 text-md space-x-1 my-1">
            {[...Array(5)].map((_, i) => (
              <FontAwesomeIcon key={i} icon={solidStar} />
            ))}
          </div>
          <p className='font-bold'> {item.review} </p>
        </div>
      </div>
    ))}
  </div>
</div>
        
        {/* Closing div of testimonial section */}

        </div>
        {/* Main Closing Div */}
        </>
    );
};
export default Home;
