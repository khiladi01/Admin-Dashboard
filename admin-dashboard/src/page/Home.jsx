import screenbgimage from '../assets/homebgimg.jpg'
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
import Sliderimage from '../components/Slider'

const Home = ( {setCartCount} ) => {

    const hanlderCount = () => {
      setCartCount((prev) => prev + 1);
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
         <div className='h-[100px] w-full bg-[#fcf2f3] grid place-content-center'>
            <p className='text-[#2f3c7e] text-3xl font-medium'  >Featured Products</p>
         </div>

         <div className='h-[1000px] w-full bg-[#fcf2f3]'>

         <div className='h-[500px] w-full flex justify-center items-center gap-10'>
         <div className='shadow rounded-2xl'>
            <img src={ecomone} alt="image" className='h-[350px] w-[300px] rounded-2xl transition-transform duration-300 hover:opacity-80 hover:scale-105 cursor-pointer ' />
            <div className='mt-[10px]'>
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
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
            <p>Rs 599</p>
            </div>
            <div className='mt-[10px]'>
            <button className='float-left h-[30px] w-[120px] outline-0 shadow rounded-full font-medium bg-white text-red-400 px-6 py-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100 cursor-pointer '>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[30px] w-[150px] outline-0 shadow rounded-full font-medium bg-white text-red-400 px-6 py-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100 cursor-pointer '>Add To Cart</button>
            </div>
         </div>
         </div>

         <div className='h-[500px] w-full flex justify-center items-center gap-10'>
         <div className='shadow rounded-2xl'>
            <img src={ecomfive} alt="image" className='h-[350px] w-[300px] rounded-2xl transition-transform duration-300 hover:opacity-80 hover:scale-105 cursor-pointer' />
            <div className='mt-[10px]'>
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
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
            <p className='text-[#2f3c7e] text-3xl font-medium'>Demanded Products</p>
         </div>

         <div className='h-[1000px] w-full bg-[#fcf2f3]'>

         <div className='h-[500px] w-full flex justify-center items-center gap-10'>
         <div className='shadow rounded-2xl'>
            <img src={ecomeight} alt="image" className='h-[350px] w-[300px] rounded-2xl transition-transform duration-300 hover:opacity-80 hover:scale-105 cursor-pointer' />
            <div className='mt-[10px]'>
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
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
            <p>Rs 599</p>
            </div>
            <div className='mt-[10px]'>
            <button className='float-left h-[30px] w-[120px] outline-0 shadow rounded-full font-medium bg-white text-red-400 px-6 py-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100 cursor-pointer '>Buy Now</button>
            <button onClick={hanlderCount} className='float-right h-[30px] w-[150px] outline-0 shadow rounded-full font-medium bg-white text-red-400 px-6 py-0 transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-pink-100 cursor-pointer '>Add To Cart</button>
            </div>
         </div>
         </div>

         <div className='h-[500px] w-full flex justify-center items-center gap-10'>
         <div className='shadow rounded-2xl'>
            <img src={ecomtwo} alt="image" className='h-[350px] w-[300px] rounded-2xl transition-transform duration-300 hover:opacity-80 hover:scale-105 cursor-pointer' />
            <div className='mt-[10px]'>
            <p>Oversized Black t-Shirt For Men</p>
            <p>Adidas</p>
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
         <p className='text-3xl text-[#2f3c7e] font-medium'>Connect With Us</p>
         </div>

         <div className='h-[300px] w-full bg-white flex justify-center items-center gap-10'>

         <div className='h-[250px] w-[250px]'>
         <img src={sideimgone} alt="image" className='h-[250px] w-[250px]' />
         </div>

         <div>
         <form>
            <input 
            type="email"
            placeholder='Enter Your Email'
            className='h-[50px] w-[450px] border-2 border-[#f3cdd1] transition-all duration-200 rounded-full pl-5 outline-0 text-slate-700 font-normal'
             />
             <span className='p-[5px]'>
             <input 
             type="submit"
             value='Send'
            className='h-[50px] w-[130px]  transition-all duration-200 rounded-full text-[#4f536d] hover:bg-red-300 hover:text-white cursor-pointer shadow-sm shadow-rose-400 hover:scale-105'
             />
             </span>
         </form>
         </div>

         </div>
        {/* Ending Div Of Connect With Us */}
        </div>
        {/* Main Closing Div */}
        </>
    )
}
export default Home;