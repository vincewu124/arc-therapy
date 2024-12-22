import React, { useRef, useState, useEffect } from 'react';
import massageImg from '../../assets/homeServices/massage.png';
import physioImg from '../../assets/homeServices/physio.png';
import kinImg from '../../assets/homeServices/kin.png';
import chiroImg from '../../assets/homeServices/chiro.png';
import acuImg from '../../assets/homeServices/acu.png';
import btn from '../../assets/homeServices/carouselButton.svg';
import ServiceCard from './ServiceCard';

const serviceData = [
  {
    img: massageImg,
    title: 'Registered massage therapy',
    attribution: false,
  },
  {
    img: physioImg,
    title: 'Physiotherapy',
    attribution: false,
  },
  {
    img: kinImg,
    title: 'Kinesiology',
    attribution: false,
  },
  {
    img: chiroImg,
    title: 'Chiropractic',
    attribution: false,
  },
  {
    img: acuImg,
    title: 'Acupuncture',
    attribution: true,
  },
];

const Service = () => {
  const carouselRef = useRef(null);
  const [start, setStart] = useState(true);
  const [end, setEnd] = useState(false);

  const checkScrollPosition = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const scrollLeft = carousel.scrollLeft;
    const scrollWidth = carousel.scrollWidth;
    const clientWidth = carousel.clientWidth;
    setStart(scrollLeft === 0);
    setEnd(scrollLeft + clientWidth === scrollWidth);
  };

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -320,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 320,
      behavior: 'smooth',
    });
  };

  const scrollWheel = (e) => {
    const isOverflowingX = carouselRef.current.scrollWidth > carouselRef.current.clientWidth;
    if (!end || isOverflowingX) {
      e.preventDefault();
      if (e.deltaX !== 0) {
        carouselRef.current.scrollLeft += e.deltaX * 20;
      } else if (e.deltaY !== 0) {
        carouselRef.current.scrollLeft += e.deltaY * 20;
      }
    }
  };

  const updateScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    if (carousel && carousel.scrollWidth > carousel.clientWidth) {
      carousel.addEventListener('wheel', scrollWheel);
    } else {
      carousel.removeEventListener('wheel', scrollWheel);
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    checkScrollPosition();

    const handleScroll = () => checkScrollPosition();
    carousel.addEventListener('scroll', handleScroll);
    return () => {
      carousel.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      checkScrollPosition();
      updateScroll();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', scrollWheel);
      if (carouselRef.current) {
        carouselRef.current.removeEventListener('wheel', scrollWheel);
      }
    };
  }, []);

  return (
    <div className="relative flex w-full justify-center font-spaceGrotesk">
      <div
        ref={carouselRef}
        className="flex justify-start space-x-4 overflow-x-auto scroll-smooth"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {serviceData.map((service, index) => {
          return <ServiceCard service={service} key={index} />;
        })}
      </div>

      {!start && (
        <button onClick={scrollLeft} className="absolute left-7 top-1/2 -translate-y-1/2">
          <img src={btn} alt="" className="rotate-180" />
        </button>
      )}
      {!end && (
        <button onClick={scrollRight} className="absolute right-7 top-1/2 -translate-y-1/2">
          <img src={btn} alt="" />
        </button>
      )}
    </div>
  );
};

export default Service;
