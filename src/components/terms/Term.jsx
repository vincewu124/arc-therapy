import React from 'react';

const Term = ({ data: { title, description } }) => {
  return (
    <div className="w-full pb-7">
      <header className="pb-7 text-[28px] font-medium">{title}</header>
      {description.map((info, index) => {
        return (
          <div index={index} className="font-normal">
            <p>{info.header}</p>
            <ul className="list-disc pl-[30px]">
              {info.points.map((point, index) => {
                return (
                  <li key={index} className="font-normal">
                    {point}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Term;
