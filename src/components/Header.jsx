import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/fullWordmark-White.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    window.scrollTo(0, 0);
    setIsMenuOpen(!isMenuOpen);
  };
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <header className="sticky top-0 z-10 flex h-100 items-center bg-primary font-spaceGrotesk text-ivory">
      <nav className="flex w-full items-center justify-between max-xl:hidden">
        <Link to="/">
          <img src={logo} alt="logo" className="relative left-[72px] h-12 w-auto object-contain" />
        </Link>
        <div className="flex items-center">
          <div className="flex w-[401px] justify-between">
            <Link to="/" onClick={scrollTop}>
              Home
            </Link>
            <Link to="/about" onClick={scrollTop}>
              About
            </Link>
            <Link to="/services" onClick={scrollTop}>
              Services
            </Link>
            <Link to="/team" onClick={scrollTop}>
              Our team
            </Link>
            <Link to="/faq" onClick={scrollTop}>
              FAQ
            </Link>
          </div>
          <a
            href="https://alignrecoverconnect.janeapp.com/"
            target="_blank"
            rel="noreferrer"
            className="ml-12 mr-16 whitespace-nowrap rounded-xl px-3 py-2 outline outline-2"
          >
            Book Now
          </a>
        </div>
      </nav>

      <nav className="hidden h-full w-full flex-row items-center justify-between bg-primary max-xl:flex">
        <div className="ml-[72px]">
          <Link to="/">
            <img src={logo} alt="logo" className="h-8 w-auto object-contain" />
          </Link>
        </div>
        <button onClick={toggleMenu} className="mr-10">
          <div className={`mb-2 h-1 w-8 rounded bg-white`}></div>
          <div className={`mb-2 h-1 w-8 rounded bg-white`}></div>
          <div className={`mb-2 h-1 w-8 rounded bg-white`}></div>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex w-full flex-col items-center justify-center gap-16 bg-primary text-lg text-ivory">
          <div className="absolute top-[22px] flex w-full flex-row justify-between pt-3">
            <div className="ml-[72px]">
              <Link to="/" onClick={toggleMenu}>
                <img src={logo} alt="logo" className="relative h-10 w-auto object-contain" />
              </Link>
            </div>
            <button className="mr-10 h-8 w-8 text-[50px] text-white" onClick={toggleMenu}>
              ✕
            </button>
          </div>
          <Link to="/" onClick={toggleMenu}>
            <p className="text-[50px] font-light">Home</p>
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            <p className="text-[50px] font-light">About</p>
          </Link>
          <Link to="/services" onClick={toggleMenu}>
            <p className="text-[50px] font-light">Services</p>
          </Link>
          <Link to="/team" onClick={toggleMenu}>
            <p className="text-[50px] font-light">Our team</p>
          </Link>
          <Link to="/faq" onClick={toggleMenu}>
            <p className="text-[50px] font-light">FAQ</p>
          </Link>
          <a
            href="https://alignrecoverconnect.janeapp.com"
            target="_blank"
            rel="noreferrer"
            onClick={toggleMenu}
            className="mt-10 whitespace-nowrap rounded-[10px] px-5 py-5 outline outline-2"
          >
            <p className="text-[32px] font-light">Book Now</p>
          </a>
        </div>
      )}
    </header>
  );
}
