import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = ( {cartCount} ) => {
  
  const navigate = useNavigate();

  const GotoHome = () => {
    navigate('/')
  }

  const GotoProfile = () => {
    navigate('/profile')
  }

  const GotoAbout = () => {
    navigate('/about')
  }

  const GotoContact = () => {
    navigate('/contact')
  }

  const GotoSetting = () => {
    navigate('/setting')
  }

  const GotoLogin = () => {
    navigate('/login')
  }

  const GotoCart = () => {
    navigate('/cart')
  }

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <div className="h-[100px] w-full sticky top-0 z-50 select-none bg-[#fbeaeb]">
      <div className="h-[100px] w-full shadow-sm px-4 md:px-10 shadow-[#e3767d]">
        {/* Searching Bar */}
        <div className="h-[40px] w-full pt-[10px]">
          <span>
            <input 
              type="text"
              placeholder="Search" 
              className="bg-transparent outline-0 border-0 border-b-2 border-gray-300 focus:border-red-400 focus:outline-none placeholder-gray-400 font-normal transition-all duration-200 text-[#2f3c7e]"
            />
            <FontAwesomeIcon icon={faSearch} className="text-gray-500 text-lg ml-2 cursor-pointer" />
          </span>

          <span className="float-right flex items-center">
            <FontAwesomeIcon icon={faUser} onClick={GotoProfile} className="pr-4 cursor-pointer text-[#2f3c7e] hover:text-[#5a659c]" />
            <FontAwesomeIcon icon={faShoppingCart} onClick={GotoCart} className="cursor-pointer text-[#2f3c7e] hover:text-[#5a659c]" />
            <span className="text-sm font-medium ml-1 text-[#2f3c7e]">
              {cartCount}
            </span>
          </span>
        </div>
        {/* Logo */}
        <div className="h-[30px] text-3xl w-full flex justify-center items-center font-sans font-medium text-[#2f3c7e]">
          <p>Velomart</p>
        </div>

        {/* Desktop Menu */}
        <div className="h-[30px] w-full hidden md:flex space-x-4">
          <button 
            onClick={GotoHome}
            className="font-medium text-[18px] hover:underline underline-offset-8 decoration-gray-400 pr-6 cursor-pointer text-[#2f3c7e] hover:text-[#5a659c]"
          >
            Home
          </button>
          
          <button
            onClick={GotoAbout}
            className="font-medium text-[18px] hover:underline underline-offset-8 decoration-gray-400 pr-6 cursor-pointer text-[#2f3c7e] hover:text-[#5a659c]"
          >
            About
          </button>

          <button
            onClick={GotoContact}
            className="font-medium text-[18px] hover:underline underline-offset-8 decoration-gray-400 pr-6 cursor-pointer text-[#2f3c7e] hover:text-[#5a659c]"
          >
            Contact
          </button>
          
          <button
            onClick={GotoLogin}
            className="font-medium text-[18px] hover:underline underline-offset-8 decoration-gray-400 pr-6 cursor-pointer text-[#2f3c7e] hover:text-[#5a659c]"
          >
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={30} color="#2f3c7e" /> : <Menu size={30} color="#2f3c7e" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col px-5 py-2 shadow-sm bg-[#fbeaeb] shadow-[#e3767d]">
          <button onClick={GotoHome} className="font-medium text-[18px] py-2 text-left cursor-pointer text-[#2f3c7e] hover:text-[#717dbc]">Home</button>
          <button onClick={GotoProfile} className="font-medium text-[18px] py-2 text-left cursor-pointer text-[#2f3c7e] hover:text-[#717dbc]">Profile</button>
          <button onClick={GotoAbout} className="font-medium text-[18px] py-2 text-left cursor-pointer text-[#2f3c7e] hover:text-[#717dbc]">About</button>
          <button onClick={GotoContact} className="font-medium text-[18px] py-2 text-left cursor-pointer text-[#2f3c7e] hover:text-[#717dbc]">Contact</button>
          <button onClick={GotoSetting} className="font-medium text-[18px] py-2 text-left cursor-pointer text-[#2f3c7e] hover:text-[#717dbc]">Setting</button>
          <button onClick={GotoLogin} className="font-medium text-[18px] py-2 text-left cursor-pointer text-[#2f3c7e] hover:text-[#717dbc]">Login</button>
        </div>
      )}
    </div>

        <div className="h-[40px] w-full bg-red-300  grid place-content-center">
          <p className="text-white text-md font-medium">Sale Is Live 50% Off Go And Shop Now</p>
        </div>
</>
  );
};

export default Navbar;
