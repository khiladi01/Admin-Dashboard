import screenbgimage from '../assets/homebgimg.jpg'
import ecomimage from '../assets/ecomimg/ecomimg.jpg'
import Sliderimage from '../components/Slider'

const Home = ( {setCartCount} ) => {

    const hanlderCount = () => {
      setCartCount((prev) => prev + 1)
    }

    return(
        <>
        <div className="h-auto w-full bg-[#fbeaeb] select-none m-0 p-0">

         {/* Adding Image Slider */}
         <div className='h-[280px] w-full flex justify-center items-center m-0 p-0'>
            <Sliderimage />
         </div>

            {/* Adding Heading section */}
         <div className="h-screen w-full bg-center bg-cover flex justify-center items-center pr-[1000px]" style={{ backgroundImage: `url(${screenbgimage})` }}>
            <header className="w-[300px] text-8xl text-white uppercase font-sans">
                explore the special collection!
            </header>
         </div>
         
         {/* Adding Featured Products In Main Div Section */}
         <div className='h-[50px] w-full bg-[#fcf2f3] grid place-content-center'>
            <p className='text-[#2f3c7e] text-2xl font-medium'>Featured Products</p>
         </div>

         <div className='h-screen w-full bg-[#fcf2f3]'>

         <div className='h-[370px] w-full flex justify-center items-center gap-10'>
         <div className='shadow rounded-md'>
            <img src={ecomimage} alt="image" className='h-[250px] w-[250px] ' />
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            <p>Rs 599</p>
            <button  className='float-left h-[25px] w-[120px] outline-0 shadow rounded-full font-medium text-red-400   hover:text-red-300 cursor-pointer'>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[25px] w-[120px] outline-0 shadow rounded-full text-red-400 cursor-pointer font-medium  hover:text-red-300'>Add To Cart</button>
         </div>

         <div className='shadow rounded-md'>
            <img src={ecomimage} alt="image" className='h-[250px] w-[250px] ' />
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            <p>Rs 599</p>
            <button className='float-left h-[25px] w-[120px] outline-0 shadow rounded-full font-medium text-red-400   hover:text-red-300 cursor-pointer'>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[25px] w-[120px] outline-0 shadow rounded-full text-red-400 cursor-pointer font-medium  hover:text-red-300'>Add To Cart</button>
         </div>

         <div className='shadow rounded-md'>
            <img src={ecomimage} alt="image" className='h-[250px] w-[250px] ' />
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            <p>Rs 599</p>
            <button className='float-left h-[25px] w-[120px] outline-0 shadow rounded-full font-medium text-red-400   hover:text-red-300 cursor-pointer'>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[25px] w-[120px] outline-0 shadow rounded-full text-red-400 cursor-pointer font-medium  hover:text-red-300'>Add To Cart</button>
         </div>

         <div className='shadow rounded-md'>
            <img src={ecomimage} alt="image" className='h-[250px] w-[250px] ' />
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            <p>Rs 599</p>
            <button className='float-left h-[25px] w-[120px] outline-0 shadow rounded-full font-medium text-red-400   hover:text-red-300 cursor-pointer'>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[25px] w-[120px] outline-0 shadow rounded-full text-red-400 cursor-pointer font-medium  hover:text-red-300'>Add To Cart</button>
         </div>
         </div>

         <div className='h-[350px] w-full flex justify-center items-center gap-10'>
         <div className='shadow rounded-md'>
            <img src={ecomimage} alt="image" className='h-[250px] w-[250px] ' />
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            <p>Rs 599</p>
            <button className='float-left h-[25px] w-[120px] outline-0 shadow rounded-full font-medium text-red-400   hover:text-red-300 cursor-pointer'>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[25px] w-[120px] outline-0 shadow rounded-full text-red-400 cursor-pointer font-medium  hover:text-red-300'>Add To Cart</button>
         </div>

         <div className='shadow rounded-md'>
            <img src={ecomimage} alt="image" className='h-[250px] w-[250px] ' />
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            <p>Rs 599</p>
            <button className='float-left h-[25px] w-[120px] outline-0 shadow rounded-full font-medium text-red-400   hover:text-red-300 cursor-pointer'>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[25px] w-[120px] outline-0 shadow rounded-full text-red-400 cursor-pointer font-medium  hover:text-red-300'>Add To Cart</button>
         </div>

         <div className='shadow rounded-md'>
            <img src={ecomimage} alt="image" className='h-[250px] w-[250px] ' />
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            <p>Rs 599</p>
            <button className='float-left h-[25px] w-[120px] outline-0 shadow rounded-full font-medium text-red-400   hover:text-red-300 cursor-pointer'>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[25px] w-[120px] outline-0 shadow rounded-full text-red-400 cursor-pointer font-medium  hover:text-red-300'>Add To Cart</button>
         </div>

         <div className='shadow rounded-md'>
            <img src={ecomimage} alt="image" className='h-[250px] w-[250px] ' />
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            <p>Rs 599</p>
            <button className='float-left h-[25px] w-[120px] outline-0 shadow rounded-full font-medium text-red-400   hover:text-red-300 cursor-pointer'>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[25px] w-[120px] outline-0 shadow rounded-full text-red-400 cursor-pointer font-medium  hover:text-red-300'>Add To Cart</button>
         </div>
         </div>

         </div>

        {/* Adding  Most Demanded Products */}
        <div className='h-[50px] w-full bg-[#fcf2f3] grid place-content-center'>
            <p className='text-[#2f3c7e] text-2xl font-medium'>Demanded Products</p>
         </div>

         <div className='h-screen w-full bg-[#fcf2f3]'>

         <div className='h-[370px] w-full flex justify-center items-center gap-10'>
         <div className='shadow rounded-md'>
            <img src={ecomimage} alt="image" className='h-[250px] w-[250px] ' />
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            <p>Rs 599</p>
            <button className='float-left h-[25px] w-[120px] outline-0 shadow rounded-full font-medium text-red-400   hover:text-red-300 cursor-pointer'>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[25px] w-[120px] outline-0 shadow rounded-full text-red-400 cursor-pointer font-medium  hover:text-red-300'>Add To Cart</button>
         </div>

         <div className='shadow rounded-md'>
            <img src={ecomimage} alt="image" className='h-[250px] w-[250px] ' />
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            <p>Rs 599</p>
            <button className='float-left h-[25px] w-[120px] outline-0 shadow rounded-full font-medium text-red-400   hover:text-red-300 cursor-pointer'>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[25px] w-[120px] outline-0 shadow rounded-full text-red-400 cursor-pointer font-medium  hover:text-red-300'>Add To Cart</button>
         </div>

         <div className='shadow rounded-md'>
            <img src={ecomimage} alt="image" className='h-[250px] w-[250px] ' />
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            <p>Rs 599</p>
            <button className='float-left h-[25px] w-[120px] outline-0 shadow rounded-full font-medium text-red-400   hover:text-red-300 cursor-pointer'>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[25px] w-[120px] outline-0 shadow rounded-full text-red-400 cursor-pointer font-medium  hover:text-red-300'>Add To Cart</button>
         </div>

         <div className='shadow rounded-md'>
            <img src={ecomimage} alt="image" className='h-[250px] w-[250px] ' />
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            <p>Rs 599</p>
            <button className='float-left h-[25px] w-[120px] outline-0 shadow rounded-full font-medium text-red-400   hover:text-red-300 cursor-pointer'>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[25px] w-[120px] outline-0 shadow rounded-full text-red-400 cursor-pointer font-medium  hover:text-red-300'>Add To Cart</button>
         </div>
         </div>

         <div className='h-[350px] w-full flex justify-center items-center gap-10'>
         <div className='shadow rounded-md'>
            <img src={ecomimage} alt="image" className='h-[250px] w-[250px] ' />
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            <p>Rs 599</p>
            <button className='float-left h-[25px] w-[120px] outline-0 shadow rounded-full font-medium text-red-400   hover:text-red-300 cursor-pointer'>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[25px] w-[120px] outline-0 shadow rounded-full text-red-400 cursor-pointer font-medium  hover:text-red-300'>Add To Cart</button>
         </div>

         <div className='shadow rounded-md'>
            <img src={ecomimage} alt="image" className='h-[250px] w-[250px] ' />
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            <p>Rs 599</p>
            <button className='float-left h-[25px] w-[120px] outline-0 shadow rounded-full font-medium text-red-400   hover:text-red-300 cursor-pointer'>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[25px] w-[120px] outline-0 shadow rounded-full text-red-400 cursor-pointer font-medium  hover:text-red-300'>Add To Cart</button>
         </div>

         <div className='shadow rounded-md'>
            <img src={ecomimage} alt="image" className='h-[250px] w-[250px] ' />
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            <p>Rs 599</p>
            <button className='float-left h-[25px] w-[120px] outline-0 shadow rounded-full font-medium text-red-400   hover:text-red-300 cursor-pointer'>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[25px] w-[120px] outline-0 shadow rounded-full text-red-400 cursor-pointer font-medium  hover:text-red-300'>Add To Cart</button>
         </div>

         <div className='shadow rounded-md'>
            <img src={ecomimage} alt="image" className='h-[250px] w-[250px] ' />
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            <p>Rs 599</p>
            <button className='float-left h-[25px] w-[120px] outline-0 shadow rounded-full font-medium text-red-400   hover:text-red-300 cursor-pointer'>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[25px] w-[120px] outline-0 shadow rounded-full text-red-400 cursor-pointer font-medium  hover:text-red-300'>Add To Cart</button>
         </div>
         </div>

         </div>

        </div>
        {/* Main Closing Div */}
        </>
    )
}
export default Home;