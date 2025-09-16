import React from 'react';

const Member = ({ data: { img, name, description, extra, top, left, scale, link } }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-24 py-16 max-xl:flex-col max-md:px-10 max-sm:gap-12">
      <div className="relative ml-[120px] h-[580px] w-[480px] overflow-hidden rounded-[160px] max-xl:ml-0 max-sm:h-[400px] max-sm:w-[331px] max-sm:rounded-[80px]">
        <img
          src={img}
          alt=""
          className="relative object-cover max-sm:mt-[-30px]"
          style={{ top: top, transform: `scale(${scale})`, left: left }}
        />
      </div>
      <div className="flex max-w-[581px] flex-col items-start">
        <header className="pb-10 text-[28px] font-medium max-xl:text-[42px]">{name}</header>
        <p className="pb-8 text-[16px] max-xl:text-[30px] whitespace-pre-line">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mt-10 h-[50px] rounded-xl bg-primary px-5 text-[20px] max-xl:text-[30px] text-ivory max-xl:py-9 shadow-[0_0_0_2px_#1F3B1C] hover:bg-ivory hover:text-primary"
        >
          <p className="flex h-full w-full items-center justify-center">
            Book with {name.match(/^\S+/)[0]}
          </p>
        </a>
      </div>
    </div>
  );
};

export default Member;
