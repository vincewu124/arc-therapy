import React from 'react';

const ServiceCard = ({ service: { img, title, attribution } }) => {
  return (
    <div className="h-80 w-[348px] flex-none bg-sage max-xl:h-[406px] max-xl:w-[441px]">
      <div className="flex h-full flex-col items-center justify-around">
        <img src={img} alt="Massage" className="h-[248px] w-[208px] max-xl:h-[314px] max-xl:w-[264px]" />
        <div className={`${attribution ? 'relative top-[-17px] h-6' : ''}`}>
          <p className="text-center">{title}</p>
          {attribution && (
            <a href="https://www.freepik.com/free-photo/close-up-hand-holding-acupuncture-needle_12066694.htm#fromView=keyword&page=1&position=1&uuid=ad6c95cf-713e-48d5-99c7-e3b2ab38b98c&new_detail=true">
              Image by freepik
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
