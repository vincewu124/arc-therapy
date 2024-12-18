import React from 'react';

const AboutRow = ({ data: { img, title, subtitle, description, direction, position } }) => {
  return (
    <div className={`flex w-full items-center justify-center ${direction ? 'flex-row' : 'flex-row-reverse'} gap-14 pb-10 max-xl:flex-col`}>
      <div className="relative h-[580px] w-[480px] overflow-hidden max-xl:h-[400px] max-xl:w-[336px]">
        <img
          src={img}
          alt=""
          className={`h-full w-auto rounded-[190px] object-cover max-xl:rounded-[140px]`}
          style={{ objectPosition: position.replace('_', ' ') }}
          loading="lazy"
        />
      </div>
      <div className="flex max-w-[634px] flex-col items-start justify-between max-sm:px-10">
        <header className="mb-10 text-[32px] font-medium">{title}</header>
        <span className="mb-5 text-[20px] font-medium text-cedar">{subtitle}</span>
        <p className="text-[20px] font-normal">{description}</p>
      </div>
    </div>
  );
};

export default AboutRow;
