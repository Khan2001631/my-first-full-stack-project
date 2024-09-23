import React from 'react';
import Logo from '../../assets/logo.jpg'

function Header() {
  return (
    <nav className="bg-yellow-500 p-4 flex justify-between items-center">
      {/* Logo Section */}
      <div className="text-start">
        <img src={Logo} alt="Logo" className="h-8" />
      </div>

      {/* Navigation Buttons */}
      <div className="text-end">
        <button className="text-black font-semibold me-5">Home</button>
      </div>
    </nav>
  );
}

export default Header;
