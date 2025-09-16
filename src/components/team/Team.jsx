import Member from './Member';
import Divider from '../Divider';
import shiv from '../../assets/team/member_shiv.webp';
import kevin from '../../assets/team/member_kevin.webp';
import lilli from '../../assets/team/member_lilli.webp';
import hamraj from '../../assets/team/member_hamraj.webp';
import ellis from '../../assets/team/member_ellis.webp';
import jillian from '../../assets/team/member_jillian.webp';
import vivian from '../../assets/team/member_vivian.webp';
import angus from '../../assets/team/member_angus.webp';
import mika from '../../assets/team/member_mika.webp';
import faith from '../../assets/team/member_faith.webp';
import edward from '../../assets/team/member_edward.webp';
import andrew from '../../assets/team/member_andrew.webp';
import jorrel from '../../assets/team/member_jorrel.webp';

const teamData = [
  {
    img: shiv,
    name: 'Shiv Sidhu',
    description: `Shiv's goal is to help patients get back to doing what they love pain free. He believes that the combination of manual therapy, nutrition, and exercise is essential for maintaining the optimal health of the body and mind. He understands that no patient is the same thus he aims to achieve their goals by customizing each treatment plan to cater to individual needs. He incorporates a variety of modalities into his treatment ranging from trigger point release, TMJ Disorder specific techniques, active release techniques, PNF stretching, myofascial techniques, joint mobilizations, and Swedish massage.\n\nShiv is currently rehabbing a ruptured Achilles, booking will be limited until full recovery.`,
    top: '130px',
    left: '10px',
    scale: '1.9',
    link: 'https://alignrecoverconnect.janeapp.com/#/staff_member/4',
  },
  {
    img: kevin,
    name: 'Kevin Lin',
    description: `Kevin is dedicated to helping people feel their best and live healthier lives. He combines hands-on techniques with simple home care tips to prevent injuries and support recovery. Whether you're dealing with a specific issue or just want regular care, his focus is on helping you get lasting results that work for you.\n\nHe believes in building real connections with the people he works with, taking the time to understand their goals and support them in becoming the best version of themselves. Every session is tailored to meet individual needs in a way that feels approachable and effective.\n\nHelping others feel better and reach their health goals is what motivates him every day. With a friendly, down-to-earth approach, he's here to provide the care and support you need.`,
    top: '135px',
    left: '30px',
    scale: '1.8',
    link: 'https://alignrecoverconnect.janeapp.com/#/staff_member/2',
  },
  {
    img: lilli,
    name: 'Lilli Cheung',
    description: `Lilli successfully completed the comprehensive 3000-hour massage therapy program at Langara College. Prior to embarking on this path, she earned her Bachelor of Business Administration. However, she soon discovered that her true passion lay in the realm of massage therapy, where she finds fulfillment in assisting individuals to engage in their daily activities pain-free.\n\nHer overarching objective is to deliver a therapeutic experience that is both calming and effective, ensuring a seamless recovery for all her patients. Lilli possesses a specific focus on addressing conditions related to women's health, including TMJD (TMJ Dysfunction), pregnancy-related discomfort, scarring from breast surgery (augmentation, reduction, mastectomy), and migraines associated with menstruation.\n\nBeyond her professional pursuits, Lilli allocates her free time to pursuits such as running, exploring new cafés, grocery shopping, and appreciating the beauty of sunsets.`,
    top: '110px',
    left: '-5px',
    scale: '1.9',
    link: 'https://alignrecoverconnect.janeapp.com/#/staff_member/3',
  },
  {
    img: hamraj,
    name: 'Hamraj Sidhu',
    description: `During Hamraj's co-op experience as a Kinesiology student, he developed an interest in physiotherapy. Hamraj enjoys working with his patients and developing individualized plans that best meet their specific goals and lifestyle. Hamraj has taken advanced courses and training in manual therapy, total spine manipulation, and intramuscular stimulation, also known as IMS (modern dry needling). His approach focuses on manual therapy, education, and exercise.\n\nBorn in Mackenzie, BC, Hamraj spent his childhood enjoying the outdoors. On his off days, you can often find Hamraj at the gym, travelling or spending time with family and friends.`,
    top: '100px',
    left: '45px',
    scale: '1.4',
    link: 'https://alignrecoverconnect.janeapp.com/#/staff_member/5',
  },
  {
    img: ellis,
    name: 'Ellis Cheng',
    description: `Ellis Cheng, RMT made a switch in career path from sales in a software tech company to registered massage therapy because he wanted to be more involved with helping everyone he meets. As an RMT, he gets to take his time to assist, build trust, assess and understand the individuals who are coming into the clinic looking for solutions to help manage their aches and pains.\n\nHis practice incorporates: general Swedish massage, trigger points release, pin and stretch and passive stretching into the treatment plan.\n\nOutside of work Ellis enjoys practicing Kendo, a Japanese sword martial art, at UBC. He has been practicing Kendo for over 12 years and is currently helping to train new members with his knowledge in Kendo, as well as the education he received in massage therapy regarding the biomechanics of the body.\n\nIn his spare time, he enjoys spending time with his husky (Thor), listening to music, gaming, travelling yearly to Japan, and eating!\n\nLanguages spoken: Cantonese and English`,
    top: '120px',
    left: '45px',
    scale: '1.9',
    link: 'https://alignrecoverconnect.janeapp.com/#/staff_member/11',
  },
  {
    img: jillian,
    name: 'Jillian Dee',
    description: `Jillian is passionate about helping patients reach their goals by creating a treatment plan specific to their individual needs, aiming to improve on their overall wellbeing and enjoyment in life. She incorporates a variety of techniques into her treatments such as trigger-point release, PNF/passive stretching and joint mobilization into her treatments. She is also trained in the Dr Vodder Method of Manual Lymphatic Drainage Massage, Levels 1 and 2.\n\nOutside of work, Jillian enjoys spending her time cooking new recipes, weight-lifting and enjoying the sunshine with her dogs.`,
    top: '110px',
    left: '10px',
    scale: '1.9',
    link: 'https://alignrecoverconnect.janeapp.com/#/staff_member/8',
  },
  {
    img: vivian,
    name: 'Vivian Lau',
    description: `Vivian graduated from Kwantlen Polytechnic University (KPU) with a Diploma in Traditional Chinese Medicine (TCM) Acupuncture. Recognized for her outstanding academic achievements, she was awarded the Shen Nong Scholarship, Chan Sisters Foundation Award, and the KPU President's Outstanding Graduate Award.\n\nWith a strong scientific background, holding both a Bachelor's and Master's degree in Science, Vivian integrates evidence-based thinking with Traditional Chinese Medicine. She combines acupuncture with TCM modalities such as tuina, cupping, earseeds and guasha to provide comprehensive healing and pain management.\n\nShe specializes in facial and scalp acupuncture for neurological disorders, including Bell's Palsy, trigeminal neuralgia, post-shingles nerve pain, insomnia, neurodegenerative conditions, loss of taste and smell, and post-stroke rehabilitation.\n\nApplying musculoskeletal theory alongside TCM principles, Vivian utilizes acupuncture with electrostimulation, tuina, cupping, and guasha to treat various pain conditions, such as neck pain, frozen shoulder, tennis elbow, knee pain, lower back pain, sciatica, and piriformis syndrome.\n\nHer expertise also extends to internal medicine, where she addresses menstrual disorders like amenorrhea, irregular cycles, menstrual pain, and menopausal syndrome.\n\nAdditionally, she focuses on digestive health and stress management, helping patients restore balance and achieve overall well-being.\n\nVivian is fluent in English, Cantonese, and Mandarin.`,
    top: '55px',
    left: '28px',
    scale: '1.43',
    link: 'https://alignrecoverconnect.janeapp.com/#/staff_member/13',
  },
  {
    img: angus,
    name: 'Angus So',
    description: `Angus is an experienced and highly skilled acupuncturist specializing in pain management and traumatology, with a particular focus on post-stroke recovery, pain disorders caused by sports injuries or muscle strain (eg. lower back pain, sciatica, frozen shoulder, tennis elbow, tenosynovitis, and knee osteoarthritis. With a deep understanding of both traditional Chinese medicine and modern therapeutic techniques, including tuina massage and cupping therapy, Angus offers a comprehensive approach to addressing pain, inflammation, and muscle tension. Combined with the use of e-stim (electrical stimulation) therapy, these methods help patients recover, improve mobility, and find relief from both chronic and acute pain conditions.`,
    top: '125px',
    left: '-5px',
    scale: '1.85',
    link: 'https://alignrecoverconnect.janeapp.com/#/staff_member/14',
  },
  {
    img: mika,
    name: 'Mika Liu',
    description: `Meet Mika (Meijia) Liu, our new Registered Acupuncturist(R.Ac.)\n\nMika Liu is a passionate and dedicated third-generation practitioner of Traditional Chinese Medicine (TCM), carrying forward the rich legacy of her grandfather and father. With over six years of experience honed in the vibrant city of Shanghai, Mika has recently made Vancouver, B.C., her new home, bringing her expertise and deep-rooted family wisdom to a new community.\n\nInspired by her family's extensive knowledge of TCM, Mika is committed to healing and empowering her patients through holistic approaches. Her focus areas include pain management, skincare and beauty enhancement, and women's health, where she combines ancient techniques with modern insights to help her patients achieve optimal well-being.\n\nOutside of her practice, Mika embraces the art of mindfulness through yoga and meditation, finding balance and tranquility in her life.`,
    top: '-15px',
    left: '10px',
    scale: '1.5',
    link: 'https://alignrecoverconnect.janeapp.com/#/staff_member/9',
  },
  {
    img: faith,
    name: 'Faith Jay',
    description: `Faith completed her massage therapy diploma at WCCMT.\n\nHer massage career has taken her from prenatal, labour support and post partum care, as well as treating children, youth and adults as they manage stresses of daily life to achieve a mind and body balance.\n\nHer massage techniques include, but not limited to Myofascial release and Thai stretching.\n\nShe is also experienced with working with neurological and palliative care patients.\n\nFeel welcome to come and discuss a treatment plan to suit your concerns.`,
    top: '120px',
    left: '-5px',
    scale: '2',
    link: 'https://alignrecoverconnect.janeapp.com/#/staff_member/16',
  },
  {
    img: edward,
    name: 'Edward Yao',
    description: `After experiencing a series of recurring injuries, Edward developed a passion for understanding how the human body heals. He discovered that massage therapy not only supports recovery from injuries but also enhances overall wellbeing. Drawing on his background as a former competitive athlete, Edward has a particular interest in helping athletes overcome physical challenges and perform at their best.\n\nSince graduating, he has continued to expand his expertise through courses in myofascial techniques, taping, and instrument-assisted soft tissue mobilization (Rockblade).\n\nBeyond his work as a Registered Massage Therapist, Edward is a black belt in karate, a former competitor for the provincial team, and also runs his own karate program.`,
    top: '-10px',
    left: '0px',
    scale: '1',
    link: 'https://alignrecoverconnect.janeapp.com/#/staff_member/15',
  },
  {
    img: andrew,
    name: 'Andrew Yang',
    description: `Andrew Yang is a registered and licensed acupuncturist with the College of Complementary Health Professionals BC (CCHPBC). He offers a wide range of Traditional Chinese Medicine (TCM) modalities, including electro-acupuncture, acupressure, cupping, and moxibustion. Andrew is known for his empathetic and attentive approach, taking the time to carefully listen to his patients and develop treatment plans tailored to their unique needs. His goal is not only to relieve symptoms but also to support overall health, balance, and long-term wellness.\n\nAndrew believes in integrating the wisdom of TCM with a compassionate understanding of modern health challenges. He is dedicated to creating a calm and supportive environment where patients feel heard, respected, and empowered in their healing journey.\n\nOutside of practice, Andrew enjoys staying active through badminton, hiking, and skiing.`,
    top: '50px',
    left: '-5px',
    scale: '1.3',
    link: 'https://alignrecoverconnect.janeapp.com/#/staff_member/10',
  },
  {
    img: jorrel,
    name: 'Jorell Davito',
    description: `Jorrel is committed to helping his patients reach their physical life goals and improving overall well-being. Whether you're seeking relief from chronic pain, recovering from an injury, managing stress, or just want regular maintenance work, he is committed to supporting your health goals with professionalism and compassion.\n\nHe brings a client-centered approach to every patient that comes in, using a combination of deep tissue techniques with home care recommendations to help you maintain and improve your well being after you leave the treatment room.\n\nJorrel’s focus is to provide a safe, respectful space where clients feel heard and supported. He looks forward to working with you in the future!`,
    top: '100px',
    left: '15px',
    scale: '2',
    link: 'https://alignrecoverconnect.janeapp.com/#/staff_member/12',
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
