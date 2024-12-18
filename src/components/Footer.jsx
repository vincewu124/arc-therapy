import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/iconBlack.png';

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className="max-footer:h-[250px] h-[180px] w-full bg-sage font-spaceGrotesk text-xl text-black">
      <div className="max-footer:flex-col max-footer:items-start max-footer:justify-around flex h-full w-full items-center justify-between">
        <div className="flex flex-row">
          <div className="max-footer:pl-10 flex items-center pl-20">
            <img src={logo} alt="logo" className="max-footer:h-[32px] h-[78px] w-auto" />
            <div className="max-footer:relative max-footer:top-[-5px] max-footer:ml-[40px] max-footer:max-h-[84px] max-footer:w-full max-footer:flex-col ml-[54px] flex h-[26px] w-[586px] justify-between gap-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-block">
                Instagram
              </a>
              <p>Email: info@arctherapy.ca</p>
              <p>Tel: (604)-285-9922</p>
            </div>
          </div>
        </div>
        <div className="max-footer:relative max-footer:top-[10px] max-footer:pl-[107px] max-footer:pr-0 whitespace-nowrap pr-20">
          <Link to="/terms" onClick={scrollTop}>
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
