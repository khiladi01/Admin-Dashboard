import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom"; 

const Navbar = () => {
  
  const navigate = useNavigate();

  const GotoHome = () => {
    navigate('/')
  }

  const GotoAbout = () => {
    navigate('/about')
  }

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="h-[100px] w-full bg-[#fbeaeb] sticky top-0 z-50">
      <div className="h-[100px] w-full shadow-sm shadow-[#e3767d] flex items-center justify-between px-4 md:px-10">
        {/* Logo */}
        <span className="text-[#2f3c7e] text-3xl font-sans font-medium">
          Dashora
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <button 
          onClick={GotoHome}
          className="text-[#2f3c7e] font-medium text-[18px] hover:underline underline-offset-8 decoration-[#2f3c7e] pr-6 cursor-pointer">Home</button>
          <button

           className="text-[#2f3c7e] font-medium text-[18px] hover:underline underline-offset-8 decoration-[#2f3c7e] pr-6 cursor-pointer">Profile</button>
          <button
           onClick={GotoAbout}
           className="text-[#2f3c7e] font-medium text-[18px] hover:underline underline-offset-8 decoration-[#2f3c7e] pr-6 cursor-pointer">About</button>
          <button
          
          className="text-[#2f3c7e] font-medium text-[18px] hover:underline underline-offset-8 decoration-[#2f3c7e] pr-6 cursor-pointer">Contact</button>
          <button
          
          className="text-[#2f3c7e] font-medium text-[18px] hover:underline underline-offset-8 decoration-[#2f3c7e] pr-6 cursor-pointer">Setting</button>
          <button
          
          className="text-[#2f3c7e] font-medium text-[18px] hover:underline underline-offset-8 decoration-[#2f3c7e] pr-6 cursor-pointer">Login</button>
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
          <button className="text-[#2f3c7e] font-medium text-[18px] py-2 text-left hover:text-[#717dbc] cursor-pointer ">Home</button>
          <button className="text-[#2f3c7e] font-medium text-[18px] py-2 text-left hover:text-[#717dbc] cursor-pointer">Profile</button>
          <button className="text-[#2f3c7e] font-medium text-[18px] py-2 text-left hover:text-[#717dbc] cursor-pointer">About</button>
          <button className="text-[#2f3c7e] font-medium text-[18px] py-2 text-left hover:text-[#717dbc] cursor-pointer">Contact</button>
          <button className="text-[#2f3c7e] font-medium text-[18px] py-2 text-left hover:text-[#717dbc] cursor-pointer">Setting</button>
          <button className="text-[#2f3c7e] font-medium text-[18px] py-2 text-left hover:text-[#717dbc] cursor-pointer">Login</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
