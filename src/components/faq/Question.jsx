import React, { useRef } from 'react';
import arrow from '../../assets/homeServices/carouselButton.svg';

const Question = ({ data: { question, answer, additional }, isOpen, onToggle }) => {
  const answerRef = useRef(null);
  return (
    <div className="px-4 pt-7 hover:cursor-pointer" onClick={onToggle}>
      <button className="flex h-full w-full flex-row items-center justify-between text-left">
        <p className="text-[28px] font-normal max-xl:text-[42px]">{question}</p>
        <span className={`inline-block transition-opacity duration-300 ${isOpen ? 'rotate-[270deg]' : 'rotate-90'}`}>
          <img src={arrow} alt="" />
        </span>
      </button>

      <div
        ref={answerRef}
        className={`overflow-hidden pt-7 transition-all duration-500 ease-in-out hover:cursor-auto ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        style={{
          maxHeight: isOpen ? `${answerRef.current.scrollHeight}px` : '0px',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pb-7">
          {answer.map((answer, index) => {
            return (
              <div className="pb-3 text-[20px] font-normal max-xl:text-[30px]" key={index}>
                <p>{answer}</p>
              </div>
            );
          })}
          {additional && additional.title && (
            <div className="pb-5 text-[20px] font-normal max-xl:text-[30px]">
              <p>{additional.title}</p>
              <ul className="list-disc pl-[30px]">
                {additional.description.map((description, index) => {
                  return (
                    <li key={index} className="text-[20px] font-normal max-xl:text-[30px]">
                      {description}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          {additional && additional.link && (
            <div className="pb-5 text-[20px] font-normal max-xl:text-[30px] text-primary underline">
              <a href={additional.link} target="_blank" rel="noreferrer">
                Link
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Question;
