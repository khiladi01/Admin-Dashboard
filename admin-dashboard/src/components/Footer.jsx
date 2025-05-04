import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      {/* Footer Main Section */}
      <div className="w-full bg-slate-800 flex flex-col md:flex-row flex-wrap justify-center items-start gap-10 md:gap-20 px-6 py-12 select-none">
        
        <div className="w-full sm:w-[300px]">
          <header className="text-3xl text-white">Dashora</header>
          <p className="pt-2 text-md text-white">
            Top brand cloth & accessories are available here <br />
            Delivered Fast
          </p>
        </div>

        <div className="w-full sm:w-[200px]">
          <header className="text-2xl text-white">Quick Links</header>
          <div className="pt-4 space-y-2">
            <Link to="/about" className="block text-white hover:text-red-300 text-md">
              About Us
            </Link>
            <Link to="/" className="block text-white hover:text-red-300 text-md">
              Shop
            </Link>
            <Link to="/contact" className="block text-white hover:text-red-300 text-md">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="w-full sm:w-[250px]">
          <header className="text-2xl text-white">Contact</header>
          <div className="pt-4 space-y-2">
            <p className="text-white text-md">akshayraj3435@gmail.com</p>
            <p className="text-white text-md">Number : +91 9142158588</p>
            <p className="text-white text-md">Location : Patna, Bihar</p>
          </div>
        </div>

        <div className="w-full sm:w-[350px]">
          <header className="text-2xl text-white">Subscribe</header>
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

      {/* Footer Bottom */}
      <div className="h-[50px] w-full bg-slate-800 grid place-content-center select-none">
        <p className="text-white text-md font-medium">
          © {new Date().getFullYear()} akki Store. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
