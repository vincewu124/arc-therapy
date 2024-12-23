import React from 'react';

const ServiceCard = ({ service: { img, title, link, style } }) => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <a href={`#/services?select=${link}`} className="h-80 w-[348px] flex-none bg-sage max-xl:h-[406px] max-xl:w-[441px]" onClick={scrollTop}>
      <div className="flex h-full flex-col items-center justify-around">
        <div className="h-[248px] w-[208px] max-xl:h-[314px] max-xl:w-[264px] overflow-hidden rounded-[90px] max-xl:rounded-[110px]">
          <img
            src={img}
            alt="Massage"
            className="relative h-[248px] w-auto max-xl:h-[314px]"
            style={style ? { transform: `scale(1.5)`, right: '30px' } : {}}
          />
        </div>

        <p className="text-center">{title}</p>
      </div>
    </a>
  );
};

export default ServiceCard;
