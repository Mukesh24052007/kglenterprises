import { useState } from 'react'

import "./style.css"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header id="header">
      <div className="container">
        <div className="logo">
          <img src="/image.png" alt="kgl" />
        </div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#hero">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact Us</a>
        </nav>

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`bar ${menuOpen ? 'rotate-top' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'hide' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'rotate-bottom' : ''}`}></div>
        </div>
      </div>
    </header>
  )
}

export default Header;
