import React from 'react';

const Review = ({ name, comment, date, color, link }) => {
  return (
    <div className="font-roboto mx-auto flex h-[270px] w-[384px] max-xl:h-[405px] max-xl:w-[576px] flex-none flex-col items-start rounded-md border bg-[#F4F4F4] p-4 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 max-xl:h-[60px] max-xl:w-[60px] items-center justify-center rounded-full" style={{ backgroundColor: color }}>
          <p className="text-white max-xl:text-[27px]">{name[0]}</p>
        </div>
        <div className="flex flex-col items-start max-xl:gap-3">
          <a href={link} target="_blank" rel="noreferrer" className="text-lg max-xl:text-[27px] font-medium">
            {name}
          </a>
          <p className="text-sm max-xl:text-[21px] text-gray-400">{date}</p>
        </div>
      </div>
      <span className="mt-3 text-yellow-500 max-xl:text-[20px]">{'★'.repeat(5)}</span>
      <p className="mt-2 text-left text-black max-xl:text-[25px]">{comment}</p>
    </div>
  );
};

export default Review;
