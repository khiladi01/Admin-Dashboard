import Aboutbg from '../assets/aboutimg/aboutbgimage.jpg'

const About = () => {

    return(
        <>
        <div className="h-auto w-full bg-[#fbeaeb] select-none">
        <div className="h-screen w-full bg-white flex justify-center items-center gap-40">
         <div>
            <img src={Aboutbg} alt="image" className='h-[500px] w-[500px]' />
         </div>
         <div>
            <p className='text-5xl text-red-400 font-medium first-letter:text-9xl first-letter:text-slate-900'>About Us</p>
            <p className='w-[500px] pt-[10px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est in praesentium officiis perspiciatis, qui voluptatum odio facilis soluta animi nostrum ducimus voluptates ad laborum neque. Unde corporis facere quaerat officiis!</p>
         </div>
        </div>
          
          <div className='h-screen w-full bg-white flex justify-center items-center gap-8'>
           <div className='h-[600px] w-[400px] shadow-md grid place-content-center'>
            <div className='h-[200px] w-[400px] flex justify-center items-center'>
            <p className='text-slate-700 text-lg font-medium text-center'>Hello</p>
            </div>
            <div className='h-[200px] w-[400px] flex justify-center items-center'>
            <img src={Aboutbg} alt="image" className='h-[200px] w-[250px]' />
            </div>
            <div className='h-[200px] w-[400px] flex justify-center items-center'>
            <p className=''>By</p>
            </div>
           </div>

           <div className='h-[600px] w-[400px] shadow-md grid place-content-center'>
            <div className='h-[200px] w-[400px] flex justify-center items-center'>
            <p className='text-slate-700 text-lg font-medium text-center'>Hello</p>
            </div>
            <div className='h-[200px] w-[400px] flex justify-center items-center'>
            <img src={Aboutbg} alt="image" className='h-[200px] w-[250px]' />
            </div>
            <div className='h-[200px] w-[400px] flex justify-center items-center'>
            <p className=''>By</p>
            </div>
           </div>

           <div className='h-[600px] w-[400px] shadow-md grid place-content-center'>
            <div className='h-[200px] w-[400px] flex justify-center items-center'>
            <p className='text-slate-700 text-lg font-medium text-center'>Hello</p>
            </div>
            <div className='h-[200px] w-[400px] flex justify-center items-center'>
            <img src={Aboutbg} alt="image" className='h-[200px] w-[250px]' />
            </div>
            <div className='h-[200px] w-[400px] flex justify-center items-center'>
            <p className=''>By</p>
            </div>
           </div>
          </div>
        {/*main div closing  */}
        </div>
        </>
    )
}
export default About;