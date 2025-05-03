import { Link } from 'react-router-dom';

const Footer = () => {

    return(
        <>
        {/* Adding Footer Part */}
        <div className='h-screen w-full bg-slate-800 flex justify-center items-center gap-20 select-none'>
         <div>
          <header className='text-3xl text-white'>
            Dashora
          </header>
          <p className='w-[200px] pt-[10px] text-md text-white'>
            Top brand cloth & accessories are available here <br></br>
            Delivered Fast
          </p>
         </div>

         <div>
          <header className='text-2xl text-white'>
            Quick Links
          </header>
          <div className='pt-[15px]'>
          <Link to="/about" className='text-white hover:text-red-300 text-md'>
          About Us
          </Link>
          </div>

          <div className='pt-[10px]'>
          <Link to="/" className='text-white hover:text-red-300 text-md'>
          Shop
          </Link>
          </div>

          <div className='pt-[10px]'>
          <Link to="/contact" className='text-white hover:text-red-300 text-md'>
          Contact Us
          </Link>
          </div>
         </div>

         <div>
          <header className='text-2xl text-white'>
            Contact
          </header>

          <div className='pt-[18px]'>
           <p className='text-white text-md'>dashora.customer@gmail.com</p>
          </div>

          <div className='pt-[10px]'>
            <p className='text-white text-md'>Number : +91 9188237630</p>
          </div>

          <div className='pt-[10px]'>
            <p className='text-white text-md'>Location : Patna,Bihar</p>
          </div>
         </div>

         <div>
          <header className='text-2xl text-white'>
            Subscribe
          </header>

          <div className='pt-[5px]'>
            <input type="email" placeholder='Enter Your Email' className='w-[350px] h-[50px] outline-0 bg-transparent shadow-md shadow-rose-100 text-white text-md pl-5 rounded-full' />
          </div>
          <div className='pt-[20px]'>
            <input type="submit" value="Send" placeholder='Enter Your Email' className='w-[150px] h-[50px] outline-0 bg-transparent shadow-md shadow-rose-100 text-rose-400 text-md rounded-full hover:shadow-rose-300 cursor-pointer delay-200' />
          </div>
         </div>
         </div>

         {/* Adding creator section */}
         <div className='h-[50px] w-full bg-slate-800 grid place-content-center select-none'>
           <p className='text-white text-md font-medium'> © {new Date().getFullYear()} ROSU Store. All rights reserved.</p>
         </div>
        </>
    )
}
export default Footer;