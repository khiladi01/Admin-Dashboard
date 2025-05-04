import Aboutbg from '../assets/aboutimg/aboutbgimage.jpg'
import AboutBIone from '../assets/aboutimg/aboutbione.jpg'
import AboutBItwo from '../assets/aboutimg/aboutbitwo.jpg'
import AboutBIthree from '../assets/aboutimg/aboutbithree.jpg'
import AboutSI from '../assets/aboutimg/aboutsimg.jpg'

const About = () => {
    return (
        <>
            <div className="w-full bg-[#fbeaeb] select-none">

                {/* Hero Section */}
                <div className="w-full bg-white flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-40 py-10 px-4">
                    <div>
                        <img src={Aboutbg} alt="image" className="h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px]" />
                    </div>
                    <div>
                        <p className="text-3xl md:text-5xl text-red-400 font-medium first-letter:text-5xl md:first-letter:text-9xl first-letter:text-slate-900">About Us</p>
                        <p className="pt-4 w-full max-w-[500px] text-sm md:text-base">
                            At Dashora, we bring you premium clothing and accessories from the world’s top brands—curated for style, comfort, and confidence. Our mission is simple: make luxury fashion accessible, authentic, and effortless. Join our journey, where every piece tells a story and every order delivers more than just fashion—it delivers flair.
                        </p>
                    </div>
                </div>

                {/* Three Cards Section */}
                <div className="w-full bg-white flex flex-col md:flex-row justify-center items-center gap-8 px-4 py-10">
                    {[{
                        img: AboutBIone,
                        text: "Born from hustle. Fueled by fashion"
                    }, {
                        img: AboutBItwo,
                        text: "We only bring you the best — no fakes, no fluff."
                    }, {
                        img: AboutBIthree,
                        text: "Style that speaks. Quality that lasts. A brand with vision"
                    }].map((item, i) => (
                        <div key={i} className="w-full max-w-[400px] shadow-md grid place-content-center rounded-md bg-white">
                            <div className="h-[200px] w-full flex justify-center items-center px-4">
                                <p className="text-slate-700 text-xl md:text-2xl font-medium text-center">{item.text}</p>
                            </div>
                            <div className="h-[300px] flex justify-center items-center">
                                <img src={item.img} alt="image" className="h-[250px] w-[250px] md:h-[300px] md:w-[300px]" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Info Section */}
                <div className="w-full flex flex-col lg:flex-row justify-center items-center bg-white select-none gap-10 lg:gap-20 py-10 px-4">
                    <div>
                        <img src={AboutSI} alt="image" className="h-[300px] w-[320px] md:h-[400px] md:w-[450px] lg:h-[500px] lg:w-[550px]" />
                    </div>
                    <div>
                        <p className="max-w-[600px] text-sm md:text-base text-slate-800 first-letter:text-2xl md:first-letter:text-3xl first-letter:text-red-400 first-letter:font-semibold">
                            Dashora is your trusted destination for premium fashion. From stylish clothing to top-brand accessories, we offer a curated collection that blends quality with trend. Our platform is designed to be 100% user-friendly—fast, simple, and secure—making your shopping experience smooth and hassle-free. Every product is carefully selected and verified for authenticity, ensuring you get only the best. Whether you're upgrading your wardrobe or searching for statement pieces, Dashora has you covered. Trusted by a growing community of fashion-forward buyers, Dashora is where style meets reliability. Shop confidently. Dress effortlessly. Experience the Dashora difference.
                        </p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default About;
