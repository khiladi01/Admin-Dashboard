import Aboutbg from '../assets/aboutimg/aboutbgimage.jpg'
import AboutBIone from '../assets/aboutimg/aboutbione.jpg'
import AboutBItwo from '../assets/aboutimg/aboutbitwo.jpg'
import AboutBIthree from '../assets/aboutimg/aboutbithree.jpg'
import AboutSI from '../assets/aboutimg/aboutsimg.jpg'

const About = () => {

    return(
        <>
        <div className="h-auto w-full bg-[#fbeaeb] select-none">

            {/* Adding Box-Image */}
        <div className="h-screen w-full bg-white flex justify-center items-center gap-40">
         <div>
            <img src={Aboutbg} alt="image" className='h-[500px] w-[500px]' />
         </div>
         <div>
            <p className='text-5xl text-red-400 font-medium first-letter:text-9xl first-letter:text-slate-900'>About Us</p>
            <p className='w-[500px] pt-[10px]'>At Dashora, we bring you premium clothing and accessories from the world’s top brands—curated for style, comfort, and confidence. Our mission is simple: make luxury fashion accessible, authentic, and effortless. Join our journey, where every piece tells a story and every order delivers more than just fashion—it delivers flair.
         </p>
         </div>
        </div>
          
          <div className='h-screen w-full bg-white flex justify-center items-center gap-8'>
           <div className='h-[600px] w-[400px] shadow-md grid place-content-center rounded-md'>
            <div className='h-[200px] w-[400px] flex justify-center items-center'>
            <p className='w-[350px] text-slate-700 text-2xl font-medium text-center'>Born from hustle. Fueled by fashion</p>
            </div>
            <div className='h-[400px] w-[400px] flex justify-center items-center'>
            <img src={AboutBIone} alt="image" className='h-[300px] w-[300px]' />
            </div>
           </div>

           <div className='h-[600px] w-[400px] shadow-md grid place-content-center rounded-md'>
            <div className='h-[200px] w-[400px] flex justify-center items-center'>
            <p className='w-[350px] text-slate-700 text-2xl font-medium text-center'>We only bring you the best — no fakes, no fluff.</p>
            </div>
            <div className='h-[400px] w-[400px] flex justify-center items-center'>
            <img src={AboutBItwo} alt="image" className='h-[300px] w-[300px]' />
            </div>
           </div>

           <div className='h-[600px] w-[400px] shadow-md grid place-content-center rounded-md'>
            <div className='h-[200px] w-[400px] flex justify-center items-center'>
            <p className='w-[350px] text-slate-700 text-2xl font-medium text-center'>Style that speaks. Quality that lasts. A brand with vision</p>
            </div>
            <div className='h-[400px] w-[400px] flex justify-center items-center'>
            <img src={AboutBIthree} alt="image" className='h-[300px] w-[300px]' />
            </div>
           </div>
          </div>

        {/* Adding Some Points On ABout Us */}
          <div className='h-screen w-full flex justify-center items-center bg-white select-none  gap-20'>
          <div>
            <img src={AboutSI} alt="image" className='h-[500px] w-[550px]' />
          </div>
          <div>
            <p className='w-[600px] text-md text-slate-800 first-letter:text-3xl first-letter:text-red-400 first-letter:font-semibold'>
            Dashora is your trusted destination for premium fashion. From stylish clothing to top-brand accessories, we offer a curated collection that blends quality with trend. Our platform is designed to be 100% user-friendly—fast, simple, and secure—making your shopping experience smooth and hassle-free. Every product is carefully selected and verified for authenticity, ensuring you get only the best. Whether you're upgrading your wardrobe or searching for statement pieces, Dashora has you covered. Trusted by a growing community of fashion-forward buyers, Dashora is where style meets reliability. Shop confidently. Dress effortlessly. Experience the Dashora difference.
            </p>
          </div>
          </div>
        {/*main div closing  */}
        </div>
        </>
    )
}
export default About;