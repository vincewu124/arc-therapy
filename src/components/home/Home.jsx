import React from 'react';
import mainBanner from '../../assets/mainBanner.png';
import mobileBanner from '../../assets/mobileBanner.png';
import Service from './Service';
import { Link } from 'react-router-dom';
import Divider from '../Divider';
import Reviews from './Reviews';

const Home = () => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="font-spaceGrotesk">
      <div className="w-full">
        <img src={mainBanner} alt="" className="h-auto w-full max-xl:hidden" />
        <img src={mobileBanner} alt="" className="hidden h-auto w-full max-xl:block" />
      </div>
      {/* services */}
      <div className="flex h-[630px] flex-col items-center justify-around p-10 text-center max-xl:h-[800px]">
        <p className="text-2xl font-medium max-xl:text-5xl">What we do</p>

        <Service />

        <Link
          to="/services"
          className="h-[50px] w-[180px] max-xl:w-[270px] max-xl:py-9 rounded-xl bg-primary text-center group hover:bg-ivory shadow-[0_0_0_2px_#1F3B1C] hover:shadow-[0_0_0_2px_#1F3B1C]"
          onClick={scrollTop}
        >
          <div className="flex h-full w-full items-center justify-center">
            <p className="text-xl font-light text-ivory group-hover:text-primary max-xl:text-[30px]">See all services</p>
          </div>
        </Link>
      </div>
      {/* reviews */}
      <Divider />

      <div className="p-10px flex h-[452px] max-xl:h-[678px] flex-col items-center justify-around text-center">
        <p className="text-2xl font-medium max-xl:text-5xl">What people are saying</p>
        <Reviews />
      </div>

      <Divider />
      {/* location */}
      <div className="flex h-[563px] w-full flex-row items-center justify-center max-xl:mb-40 max-xl:flex-col max-xl:h-[800px] px-3 max-xl:mt-6">
        <div className="mr-16 whitespace-nowrap max-xl:mr-0 max-xl:w-[490px] ">
          <header className="h-[73px] text-2xl font-medium max-xl:text-5xl">
            <p className="h-full max-xl:flex max-xl:items-center max-xl:justify-center">Contact us!</p>
          </header>
          <div className="flex h-[160px] flex-col justify-evenly text-[16px] max-xl:relative max-xl:top-[20px] max-xl:justify-normal max-xl:text-[24px] max-xl:mb-[50px] max-xl:mt-[10px]">
            <p>Address: 135-6020 Blundell Road</p>
            <p>Phone: 604-285-9922</p>
            <p>Office Hours: 9am - 5pm</p>
            <p>Email: info@arctherapy.ca</p>
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14348.900163461549!2d-123.17649810621376!3d49.155574941234626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54860b306b385269%3A0xcb50c990d0409f9b!2sarc%20therapy!5e0!3m2!1sen!2sca!4v1733636391813!5m2!1sen!2sca"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="location"
          className="h-[420px] w-[790px] max-xl:h-[630px] max-xl:w-[490px]"
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
