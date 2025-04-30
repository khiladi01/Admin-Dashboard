import screenbgimage from '../assets/homebgimg.jpg'
import ecomone from '../assets/ecomimg/ecomone.jpg'
import ecomtwo from '../assets/ecomimg/ecomtwo.webp'
import ecomthree from '../assets/ecomimg/ecomthree.webp'
import ecomfour from '../assets/ecomimg/ecomfour.webp'
import ecomfive from '../assets/ecomimg/ecomfive.webp'
import ecomsix from '../assets/ecomimg/ecomsix.webp'
import ecomseven from '../assets/ecomimg/ecomseven.webp'
import ecomeight from '../assets/ecomimg/ecomeight.webp'
import ecomnine from '../assets/ecomimg/ecomnine.webp'
import ecomten from '../assets/ecomimg/ecomten.webp'
import ecomeleven from '../assets/ecomimg/ecomeleven.webp'
import ecomtwelve from '../assets/ecomimg/ecomtwelve.webp'
import ecomthirteen from '../assets/ecomimg/ecomthirteen.webp'
import ecomfourteen from '../assets/ecomimg/ecomfourteen.webp'
import ecomfifteen from '../assets/ecomimg/ecomfifteen.webp'
import ecomsixteen from '../assets/ecomimg/ecomsixteen.webp'
import Sliderimage from '../components/Slider'

const Home = ( {setCartCount} ) => {

    const hanlderCount = () => {
      setCartCount((prev) => prev + 1)

      if(setCartCount == 0){
         setCartCount = "";
      }
    }

    return(
        <>
        <div className="h-auto w-full bg-[#fbeaeb] select-none">

            {/* Adding Heading section */}
         <div className="h-screen w-full bg-center bg-cover flex justify-center items-center pr-[1000px]" style={{ backgroundImage: `url(${screenbgimage})` }}>
            <header className="w-[300px] text-8xl text-white uppercase font-sans">
                explore the special collection!
            </header>
         </div>

         {/* Adding Image Slider */}
         <div className='h-[500px] w-full bg-[#fcf2f3] flex justify-center items-center'>
            <Sliderimage />
         </div>
         
         {/* Adding Featured Products In Main Div Section */}
         <div className='h-[50px] w-full bg-[#fcf2f3] grid place-content-center'>
            <p className='text-[#2f3c7e] text-2xl font-medium'>Featured Products</p>
         </div>

         <div className='h-[1000px] w-full bg-[#fcf2f3]'>

         <div className='h-[500px] w-full flex justify-center items-center gap-10'>
         <div className='shadow rounded-md'>
            <img src={ecomone} alt="image" className='h-[350px] w-[300px] ' />
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            <p>Rs 599</p>
            <button  className='float-left h-[25px] w-[120px] outline-0 shadow rounded-full font-medium text-red-400   hover:text-red-300 cursor-pointer'>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[25px] w-[120px] outline-0 shadow rounded-full text-red-400 cursor-pointer font-medium  hover:text-red-300'>Add To Cart</button>
         </div>

         <div className='shadow rounded-md'>
            <img src={ecomtwo} alt="image" className='h-[350px] w-[300px] ' />
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            <p>Rs 599</p>
            <button className='float-left h-[25px] w-[120px] outline-0 shadow rounded-full font-medium text-red-400   hover:text-red-300 cursor-pointer'>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[25px] w-[120px] outline-0 shadow rounded-full text-red-400 cursor-pointer font-medium  hover:text-red-300'>Add To Cart</button>
         </div>

         <div className='shadow rounded-md'>
            <img src={ecomthree} alt="image" className='h-[350px] w-[300px] ' />
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            <p>Rs 599</p>
            <button className='float-left h-[25px] w-[120px] outline-0 shadow rounded-full font-medium text-red-400   hover:text-red-300 cursor-pointer'>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[25px] w-[120px] outline-0 shadow rounded-full text-red-400 cursor-pointer font-medium  hover:text-red-300'>Add To Cart</button>
         </div>

         <div className='shadow rounded-md'>
            <img src={ecomfour} alt="image" className='h-[350px] w-[300px] ' />
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            <p>Rs 599</p>
            <button className='float-left h-[25px] w-[120px] outline-0 shadow rounded-full font-medium text-red-400   hover:text-red-300 cursor-pointer'>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[25px] w-[120px] outline-0 shadow rounded-full text-red-400 cursor-pointer font-medium  hover:text-red-300'>Add To Cart</button>
         </div>
         </div>

         <div className='h-[500px] w-full flex justify-center items-center gap-10'>
         <div className='shadow rounded-md'>
            <img src={ecomfive} alt="image" className='h-[350px] w-[300px] ' />
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            <p>Rs 599</p>
            <button className='float-left h-[25px] w-[120px] outline-0 shadow rounded-full font-medium text-red-400   hover:text-red-300 cursor-pointer'>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[25px] w-[120px] outline-0 shadow rounded-full text-red-400 cursor-pointer font-medium  hover:text-red-300'>Add To Cart</button>
         </div>

         <div className='shadow rounded-md'>
            <img src={ecomsix} alt="image" className='h-[350px] w-[300px] ' />
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            <p>Rs 599</p>
            <button className='float-left h-[25px] w-[120px] outline-0 shadow rounded-full font-medium text-red-400   hover:text-red-300 cursor-pointer'>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[25px] w-[120px] outline-0 shadow rounded-full text-red-400 cursor-pointer font-medium  hover:text-red-300'>Add To Cart</button>
         </div>

         <div className='shadow rounded-md'>
            <img src={ecomseven} alt="image" className='h-[350px] w-[300px] ' />
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            <p>Rs 599</p>
            <button className='float-left h-[25px] w-[120px] outline-0 shadow rounded-full font-medium text-red-400   hover:text-red-300 cursor-pointer'>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[25px] w-[120px] outline-0 shadow rounded-full text-red-400 cursor-pointer font-medium  hover:text-red-300'>Add To Cart</button>
         </div>

         <div className='shadow rounded-md'>
            <img src={ecomeight} alt="image" className='h-[350px] w-[300px] ' />
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

         <div className='h-[1000px] w-full bg-[#fcf2f3]'>

         <div className='h-[500px] w-full flex justify-center items-center gap-10'>
         <div className='shadow rounded-md'>
            <img src={ecomnine} alt="image" className='h-[350px] w-[300px] ' />
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            <p>Rs 599</p>
            <button className='float-left h-[25px] w-[120px] outline-0 shadow rounded-full font-medium text-red-400   hover:text-red-300 cursor-pointer'>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[25px] w-[120px] outline-0 shadow rounded-full text-red-400 cursor-pointer font-medium  hover:text-red-300'>Add To Cart</button>
         </div>

         <div className='shadow rounded-md'>
            <img src={ecomten} alt="image" className='h-[350px] w-[300px] ' />
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            <p>Rs 599</p>
            <button className='float-left h-[25px] w-[120px] outline-0 shadow rounded-full font-medium text-red-400   hover:text-red-300 cursor-pointer'>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[25px] w-[120px] outline-0 shadow rounded-full text-red-400 cursor-pointer font-medium  hover:text-red-300'>Add To Cart</button>
         </div>

         <div className='shadow rounded-md'>
            <img src={ecomeleven} alt="image" className='h-[350px] w-[300px] ' />
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            <p>Rs 599</p>
            <button className='float-left h-[25px] w-[120px] outline-0 shadow rounded-full font-medium text-red-400   hover:text-red-300 cursor-pointer'>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[25px] w-[120px] outline-0 shadow rounded-full text-red-400 cursor-pointer font-medium  hover:text-red-300'>Add To Cart</button>
         </div>

         <div className='shadow rounded-md'>
            <img src={ecomtwelve} alt="image" className='h-[350px] w-[300px] ' />
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            <p>Rs 599</p>
            <button className='float-left h-[25px] w-[120px] outline-0 shadow rounded-full font-medium text-red-400   hover:text-red-300 cursor-pointer'>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[25px] w-[120px] outline-0 shadow rounded-full text-red-400 cursor-pointer font-medium  hover:text-red-300'>Add To Cart</button>
         </div>
         </div>

         <div className='h-[500px] w-full flex justify-center items-center gap-10'>
         <div className='shadow rounded-md'>
            <img src={ecomthirteen} alt="image" className='h-[350px] w-[300px] ' />
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            <p>Rs 599</p>
            <button className='float-left h-[25px] w-[120px] outline-0 shadow rounded-full font-medium text-red-400   hover:text-red-300 cursor-pointer'>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[25px] w-[120px] outline-0 shadow rounded-full text-red-400 cursor-pointer font-medium  hover:text-red-300'>Add To Cart</button>
         </div>

         <div className='shadow rounded-md'>
            <img src={ecomfourteen} alt="image" className='h-[350px] w-[300px] ' />
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            <p>Rs 599</p>
            <button className='float-left h-[25px] w-[120px] outline-0 shadow rounded-full font-medium text-red-400   hover:text-red-300 cursor-pointer'>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[25px] w-[120px] outline-0 shadow rounded-full text-red-400 cursor-pointer font-medium  hover:text-red-300'>Add To Cart</button>
         </div>

         <div className='shadow rounded-md'>
            <img src={ecomfifteen} alt="image" className='h-[350px] w-[300px] ' />
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            <p>Rs 599</p>
            <button className='float-left h-[25px] w-[120px] outline-0 shadow rounded-full font-medium text-red-400   hover:text-red-300 cursor-pointer'>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[25px] w-[120px] outline-0 shadow rounded-full text-red-400 cursor-pointer font-medium  hover:text-red-300'>Add To Cart</button>
         </div>

         <div className='shadow rounded-2xl'>
            <img src={ecomsixteen} alt="image" className='h-[350px] w-[300px]' />
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
            <p>Rs 599</p>
            <button className='float-left h-[30px] w-[120px] outline-0 shadow rounded-full font-medium text-red-400   hover:text-red-300 cursor-pointer bg-white'>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[30px] w-[120px] outline-0 shadow rounded-full text-red-400 cursor-pointer font-medium  hover:text-red-300 bg-white'>Add To Cart</button>
         </div>
         </div>

         </div>

        </div>
        {/* Main Closing Div */}
        </>
    )
}
export default Home;