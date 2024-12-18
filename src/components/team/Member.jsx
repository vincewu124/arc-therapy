import React from 'react';

const Member = ({ data: { img, name, description, extra, top, left, scale, link } }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-24 py-16 max-xl:flex-col max-md:px-10 max-sm:gap-12">
      <div className="relative ml-[120px] max-h-[580px] w-[480px] overflow-hidden rounded-[190px] max-xl:ml-0 max-sm:max-h-[400px] max-sm:w-[331px] max-sm:rounded-[140px]">
        <img src={img} alt="" className="relative object-cover" style={{ top: top, transform: `scale(${scale})`, left: left }} />
      </div>
      <div className="flex max-w-[581px] flex-col items-start">
        <header className="pb-10 text-[28px] font-medium">{name}</header>
        <p className="pb-8 text-[20px]">{description}</p>
        <p className="text-[20px]">{extra}</p>
        <a href={link} target="_blank" rel="noreferrer" className="mt-10 h-[50px] rounded-xl bg-primary px-5 text-[20px] text-ivory">
          <p className="flex h-full w-full items-center justify-center">Book with {name.match(/^\S+/)[0]}</p>
        </a>
      </div>
    </div>
  );
};

export default Member;
