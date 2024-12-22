import React from 'react';

const AboutRow = ({ data: { img, title, subtitle, description, direction, position } }) => {
  return (
    <div className={`flex w-full items-center justify-center ${direction ? 'flex-row' : 'flex-row-reverse'} gap-14 pb-10 max-xl:flex-col`}>
      <div className="relative h-[580px] w-[480px] overflow-hidden ">
        <img
          src={img}
          alt=""
          className={`h-full w-auto rounded-[190px] object-cover `}
          style={{ objectPosition: position.replace('_', ' ') }}
          loading="lazy"
        />
      </div>
      <div className="flex max-w-[634px] flex-col items-start justify-between max-sm:px-10">
        <header className="mb-10 text-[32px] font-medium max-xl:text-[48px]">{title}</header>
        <span className="mb-5 text-[20px] font-medium text-cedar max-xl:text-[30px]">{subtitle}</span>
        <p className="text-[20px] font-normal max-xl:text-[30px]">{description}</p>
      </div>
    </div>
  );
};

export default AboutRow;
