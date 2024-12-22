import React from 'react';
import AboutRow from './AboutRow';
import story from '../../assets/about/share.jpg';
import massage from '../../assets/about/care.jpg';
import movement from '../../assets/about/movement.jpg';
let aboutData = [
  {
    img: story,
    title: 'Share your story',
    subtitle: 'At Your First Visit, We Listen and Assess.',
    description:
      'During your initial session, we take the time to listen to your story. Through a thorough assessment of your posture, movement patterns, and any areas of discomfort, we gain a complete understanding of your needs. This allows us to design a treatment plan that aligns with your body, recovering your true potential.',
    direction: true,
    position: '25%_0',
  },
  {
    img: massage,
    title: 'Hands-on care',
    subtitle: 'Customized Care for Effective, Targeted Relief.',
    description:
      'During the hands-on portion of your treatment, our skilled practitioners use a combination of manual therapies specifically chosen for your body and goals. From joint mobilizations and soft tissue techniques to chiropractic adjustments, acupuncture, and corrective exercises, each treatment is designed by your practitioner to relieve pain, improve mobility, and promote healing.',
    direction: false,
    position: '70%_0%',
  },
  {
    img: movement,
    title: 'Movement & Therapeutic Exercises',
    subtitle: 'Long-Term Success with Personalized Rehab Plans.',
    description: `We believe recovery goes beyond the treatment table. Thats why we develop personalized programs to help you stay aligned and prevent future injury. Whether it’s physiotherapy-based exercises, kinesiology programs, or guided stretches, our recovery plans are designed to help you stay connected to the lifestyle you love.`,
    direction: true,
    position: '70%_0%',
  },
];
const About = () => {
  return (
    <div className="flex flex-col items-center font-spaceGrotesk">
      <div className="flex h-[170px] flex-col items-center justify-center pt-[25px]">
        <header className="text-[48px] font-bold">About</header>
        <div className="h-[6px] w-[140px] rounded-[4px] border bg-sage"></div>
      </div>
      <p className="text-center text-[20px] max-sm:px-10 max-xl:text-[30px] max-xl:px-36">
        Align your body, recover your potential, connect with the lifestyle you love.
      </p>
      <div className="w-full pb-40 pt-10 max-xl:mx-10">
        {aboutData.map((about) => {
          return <AboutRow data={about} key={about.title} />;
        })}
      </div>
    </div>
  );
};

export default About;
