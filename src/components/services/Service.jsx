import React from 'react';

const Service = ({ data: { title, img, description, types, benefitType, benefits, link } }) => {
  return (
    <div className={`max-w-[1200px] flex flex-col items-start`}>
      <div className="flex flex-col items-start">
        <img src={img} alt="" className={`h-[400px] w-full object-cover pb-10`} />
        <header className="pb-11 text-[32px] font-medium max-xl:text-[48px]">{title}</header>
        <span className="pb-10 text-[20px] font-normal max-xl:text-[30px]">{description}</span>
        {types &&
          types.map((type, index) => {
            return (
              <div key={index} className="flex flex-col pb-10">
                <span className="pb-10 text-[20px] font-medium text-cedar max-xl:text-[30px]">{type.type}</span>
                <p className="text-[20px] max-xl:text-[30px]">{type.description}</p>
              </div>
            );
          })}
        <span className="pb-10 text-[20px] font-medium text-cedar max-xl:text-[30px]">Benefits of {benefitType}</span>
        <ul className="list-disc pl-[19px]">
          {benefits.map((benefit, index) => {
            return (
              <li key={index} className="text-[20px] font-normal max-xl:text-[30px]">
                {benefit}
              </li>
            );
          })}
        </ul>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className={`mt-10 whitespace-nowrap shadow-[0_0_0_2px_#1F3B1C] hover:bg-ivory hover:text-primary rounded-xl bg-primary px-5 py-3 text-[20px] text-ivory max-xl:text-[30px]`}
      >
        Book now
      </a>
    </div>
  );
};

export default React.memo(Service);
