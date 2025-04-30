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
    <div className="h-[100px] w-full bg-[#fbeaeb] sticky top-0 z-50 select-none ">
      <div className="h-[100px] w-full shadow-sm shadow-[#e3767d] px-4 md:px-10">
        {/* Searching Bar */}
        <div className="h-[40px] w-full">
        <span>
        <input 
        type="text"
        placeholder="Search" 
        className="bg-transparent outline-0 border-0 border-b-2 border-gray-300 focus:border-red-400 focus:outline-none placeholder-gray-400 text-[#2f3c7e] font-normal transition-all duration-200 "
        />
         <FontAwesomeIcon icon={faSearch} className="text-gray-500 text-lg ml-2 cursor-pointer" />
         </span>

         <span className="float-right">
         <FontAwesomeIcon icon={faUser} onClick={GotoProfile} className="pr-4 text-[#2f3c7e]  hover:text-[#5a659c] cursor-pointer" />
         <FontAwesomeIcon icon={faShoppingCart} onClick={GotoCart} className="text-[#2f3c7e]  hover:text-[#5a659c] cursor-pointer" />
         <span className="text-[#2f3c7e] text-sm font-medium">
          {cartCount}
         </span>
         </span>
        </div>
        {/* Logo */}
        <div className="h-[30px] w-full flex justify-center items-center text-[#2f3c7e] text-3xl font-sans font-medium">
          Dashora
        </div>

        {/* Desktop Menu */}
        <div className="h-[30px] w-full hidden md:flex space-x-4">
          <button 
          onClick={GotoHome}
          className="text-[#2f3c7e] font-medium text-[18px] hover:underline underline-offset-8 decoration-gray-400 pr-6 hover:text-[#5a659c] cursor-pointer">Home</button>
          
          <button
           onClick={GotoAbout}
           className="text-[#2f3c7e] font-medium text-[18px] hover:underline underline-offset-8 decoration-gray-400 pr-6 hover:text-[#5a659c] cursor-pointer">About</button>

          <button
          onClick={GotoContact}
          className="text-[#2f3c7e] font-medium text-[18px] hover:underline underline-offset-8 decoration-gray-400 pr-6 hover:text-[#5a659c] cursor-pointer">Contact</button>
          
          <button
          onClick={GotoLogin}
          className="text-[#2f3c7e] font-medium text-[18px] hover:underline underline-offset-8 decoration-gray-400 hover:text-[#5a659c] pr-6 cursor-pointer">Login</button>
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
        <div className="md:hidden flex flex-col bg-[#fbeaeb] px-5 py-2 shadow-sm shadow-[#e3767d]">
          <button onClick={GotoHome} className="text-[#2f3c7e] font-medium text-[18px] py-2 text-left hover:text-[#717dbc] cursor-pointer ">Home</button>
          <button onClick={GotoProfile} className="text-[#2f3c7e] font-medium text-[18px] py-2 text-left hover:text-[#717dbc] cursor-pointer">Profile</button>
          <button onClick={GotoAbout} className="text-[#2f3c7e] font-medium text-[18px] py-2 text-left hover:text-[#717dbc] cursor-pointer">About</button>
          <button onClick={GotoContact} className="text-[#2f3c7e] font-medium text-[18px] py-2 text-left hover:text-[#717dbc] cursor-pointer">Contact</button>
          <button onClick={GotoSetting} className="text-[#2f3c7e] font-medium text-[18px] py-2 text-left hover:text-[#717dbc] cursor-pointer">Setting</button>
          <button onClick={GotoLogin} className="text-[#2f3c7e] font-medium text-[18px] py-2 text-left hover:text-[#717dbc] cursor-pointer">Login</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
