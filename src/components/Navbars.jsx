import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbars() {
  const [isMenuOpen, setIsMenuOpen]=useState(false);

  const handleMenuOpen =()=>{
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="h-[80px] flex items-center pt-2">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-slate-400 text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
              K
            </span>
            <div className="leading-[20px]">
              <h1 className="text-xl text-slate-950 font-[700] ">Kamran</h1>
            </div>
          </div>
          {/* Logo - End */}

          {/* Menu Start (Responsive) */}
          <div className="lg:hidden flex items-center gap-5 text-slate-950 font-[600]">
            <button onClick={handleMenuOpen}  className="text-2xl">
            <i class="ri-menu-fill"></i>          
              </button>
          </div>
          <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
            
            <Link to="/">Shop</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/">About Us</Link>
            <Link to="/">Contact</Link>
            
            
          </div>
          <div className="hidden lg:flex items-center gap-10 text-slate-950 font-[600]">
            <Link to="/">Shop</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/">About Us</Link>
            <Link to="/">Contact</Link>
          </div>
          
          {/* Menu End (Responsive) */}
        </div>
      </div>
    </header>
  );
}

export default Navbars;
