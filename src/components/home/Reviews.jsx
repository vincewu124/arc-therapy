import React, { useRef, useEffect } from 'react';
import Review from './Review';

const reviewData = [
  {
    name: 'Shirley S (Shirley)',
    comment: `I almost didn't want to write this review because I've found some amazing RMTs and don't want to risk losing my chance to book appointments! I've been seeing Shiv and Kevin for years. They're both excellent RMTs with unique styles, and I highly recommend them both.`,
    date: '2024-12-11',
    color: '#455A64',
    link: 'https://maps.app.goo.gl/vJdk9qxzKEEV1cqE8',
  },
  {
    name: 'neera dhingra',
    comment: `I had an amazing experience at Arc Therapy! The staff is professional and attentive, and the atmosphere is calming. Both Shiv and Lilli are awesome RMTs. They helped fix my TMJ problem and I left each session feeling much better. Highly recommend this place!`,
    date: '2024-12-11',
    color: '#7B1FA2',
    link: 'https://maps.app.goo.gl/RjQWwmDQqYB1XAmg7',
  },
  {
    name: 'Matt Lee',
    comment: `I had a great session with Kevin. He took the time to understand my problem areas and knew how to help with issues i've been having with my elbows and back . Provided great insight in how to prevent issues from reoccurring.`,
    date: '2024-12-11',
    color: '#01579B',
    link: 'https://maps.app.goo.gl/FScckwadunnSn4UA9',
  },
];

const Reviews = () => {
  useEffect(() => {
    const review = reviewRef.current;
    if (!review) return;
    review.addEventListener('wheel', scrollWheel);
    return () => {
      if (review) {
        review.removeEventListener('wheel', scrollWheel);
      }
    };
  });

  const scrollWheel = (e) => {
    if (reviewRef.current) {
      const isOverflowingX = reviewRef.current.scrollWidth > reviewRef.current.clientWidth;
      if (isOverflowingX) {
        e.preventDefault();
        reviewRef.current.scrollLeft += e.deltaY * 20;
      } else {
        reviewRef.current.scrollTop += e.deltaY * 20;
      }
    }
  };

  const reviewRef = useRef(null);
  return (
    <div className="relative flex w-full justify-center px-10 max-xl:pb-[55px]">
      <div
        ref={reviewRef}
        className="flex justify-start space-x-4 overflow-x-auto scroll-smooth"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {reviewData.map((review, index) => {
          return <Review key={index} name={review.name} comment={review.comment} date={review.date} color={review.color} link={review.link} />;
        })}
      </div>
    </div>
  );
};

export default Reviews;
