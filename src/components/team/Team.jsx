import React from 'react';
import Member from './Member';
import Divider from '../Divider';
import shiv from '../../assets/team/shiv.jpg';
import lilli from '../../assets/team/lilli.jpg';
import kevin from '../../assets/team/kevin.jpg';
import hamraj from '../../assets/team/hamraj.jpeg';

const teamData = [
  {
    img: shiv,
    name: 'Shiv Sidhu',
    description: `Shiv's goal is to help patients get back to doing what they love pain-free. He believes that the combination of manual therapy, nutrition, and exercise is essential for maintaining the optimal health of the body and mind. He understands that no patient is the same thus he aims to achieve their goals by customizing each treatment plan to cater to individual needs. He incorporates a variety of modalities into his treatment ranging from trigger point release, TMJ Disorder specific techniques, active release techniques, PNF stretching, myofascial techniques, joint mobilizations, and Swedish massage.`,
    extra: 'Shiv is currently rehabbing a ruptured Achilles, booking will be limited until full recovery.',
    top: '-55px',
    left: '0px',
    scale: '1.1',
    link: 'https://alignrecoverconnect.janeapp.com/#/staff_member/4',
  },
  {
    img: lilli,
    name: 'Lilli Cheung',
    description: `Lilli completed her 3,000 hour massage therapy program at Langara College. Her treatment modalities consist of (but not limited to) general swedish techniques, active modalities, trigger point therapy, active/passive stretching, and neuromuscular techniques. Her goal is to provide a relaxing yet effective treatment to all her patients and help them recover seamlessly.`,
    extra: `On her free time you can catch her going for runs, grocery shopping, and chasing sunsets!`,
    top: '10px',
    left: '0px',
    scale: '1.1',
    link: 'https://alignrecoverconnect.janeapp.com/#/staff_member/3',
  },
  {
    img: kevin,
    name: 'Kevin Lin',
    description: `Kevin is dedicated to helping people feel their best and live healthier lives. He combines hands-on techniques with simple home care tips to prevent injuries and support recovery. Whether you're dealing with a specific issue or just want regular care, his focus is on helping you get lasting results that work for you.`,
    extra: `He believes in building real connections with the people he works with, taking the time to understand their goals and support them in becoming the best version of themselves. Every session is tailored to meet individual needs in a way that feels approachable and effective. Helping others feel better and reach their health goals is what motivates him every day. With a friendly, down-to-earth approach, he's here to provide the care and support you need.`,
    top: '0px',
    left: '0px',
    scale: '1.2',
    link: 'https://alignrecoverconnect.janeapp.com/#/staff_member/2',
  },
  {
    img: hamraj,
    name: 'Hamraj Sidhu',
    description: `During Hamraj's co-op experience as a Kinesiology student, he worked closely with Kyle and realized his passion for physiotherapy. Hamraj enjoys working with his patients and developing individualized plans that best meet their specific goals and lifestyle. Hamraj has taken advanced courses and training in manual therapy, total spine manipulation, and intramuscular stimulation, also known as IMS (modern dry needling). His approach focuses on manual therapy, education, and exercise.`,
    extra: `Born in Mackenzie, BC, Hamraj spent his childhood enjoying the outdoors. On his off days, you can often find Hamraj at the gym or spending time with family and friends.`,
    top: '80px',
    left: '40px',
    scale: '1.3',
    link: 'https://alignrecoverconnect.janeapp.com/#/staff_member/5',
  },
];

const Team = () => {
  return (
    <div className="flex flex-col items-center font-spaceGrotesk">
      <div className="flex h-[170px] flex-col items-center justify-center pt-[25px]">
        <header className="text-[48px] font-bold">Our Team</header>
        <div className="h-[6px] w-[140px] rounded-[4px] border bg-sage"></div>
      </div>
      {teamData.map((team, index) => {
        if (index < teamData.length - 1) {
          return (
            <div key={index} className="w-full">
              <div>
                <Member data={team} />
              </div>
              <Divider />
            </div>
          );
        } else {
          return (
            <div key={index}>
              <Member data={team} />
            </div>
          );
        }
      })}
      <div className="mb-[160px] mt-[16px] flex h-[160px] w-full items-center justify-center gap-10 bg-primary text-[28px] font-light text-white max-md:flex-col max-md:gap-0 max-sm:text-[20px]">
        <p>Join our team!</p>
        <p>Email us at info@arctherapy.ca</p>
      </div>
    </div>
  );
};

export default Team;
