import React, { useState, useEffect } from 'react';
import Service from './Service';
import { useLocation } from 'react-router-dom';

const Services = ({ images }) => {
  const [data, setData] = useState([
    {
      title: 'Registered Massage Therapy',
      buttonTitle: 'RMT',
      img: images[0],
      description:
        'Massage therapists use hands-on techniques to relieve pain, reduce muscle tension, improve circulation, and promote relaxation. They address various issues, from stress relief to injury recovery, and provide guidance on posture and self-care to support lasting wellness.',
      types: null,
      benefitType: 'Massage Therapy',
      benefits: [
        'Pain Management',
        'Enhanced Mobility',
        'Stress Reduction',
        'Improved Circulation',
        'Postural Alignment',
        'Accelerated Recovery',
        'Immune System Support',
        'Improved Sleep Quality',
        'Headache Relief',
      ],
      link: 'https://alignrecoverconnect.janeapp.com/#/massage-therapy',
    },
    {
      title: 'Physiotherapy',
      buttonTitle: 'Physiotherapy',
      img: images[1],
      description:
        'Physiotherapy helps people improve movement and reduce pain by addressing issues with muscles, joints, and nerves. Through exercises, manual therapy, and education, physiotherapists treat injuries, manage chronic conditions, and support overall physical health and recovery.',
      types: null,
      benefitType: 'Physiotherapy',
      benefits: [
        'Pain Management',
        'Enhanced Mobility',
        'Injury Prevention and Recovery',
        'Postural Correction',
        'Enhanced Strength and Balance',
        'Increased Independence',
        'Enhanced Athletic Performance',
        'Scar Tissue and Swelling Reduction',
        'Pain Education',
        'Improved Quality of Life',
      ],
      link: 'https://alignrecoverconnect.janeapp.com/#/physiotherapy',
    },
    {
      title: 'Kinesiology',
      buttonTitle: 'Kinesiology',
      img: images[2],
      description:
        'Kinesiology is the study of how our bodies move, science-based approach that addresses physical and functional health, from enhancing sports performance to supporting daily living and chronic condition management',
      types: null,
      benefitType: 'Kinesiology',
      benefits: [
        'Improved Muscle Function',
        'Enhanced Athletic Performance',
        'Injury Prevention and Rehabilitation',
        'Better Posture and Alignment',
        'Pain Reduction',
        'Increased Range of Motion',
        'Enhanced Balance and Coordination',
        'Functional Independence',
      ],
      link: 'https://alignrecoverconnect.janeapp.com/#/kinesiology',
    },
    {
      title: 'Chiropractic',
      buttonTitle: 'Chiropractic',
      img: images[3],
      description:
        'Chiropractors enhance the function of nerves, muscles, and joints through a variety of techniques, including chiropractic adjustments, joint mobilizations, myofascial release therapy, instrument-assisted soft tissue therapy, and personalized exercises and rehabilitation programs.',
      types: null,
      benefitType: 'Chiropractic',
      benefits: [
        'Pain Relief',
        'Improved Mobility',
        'Headache Management',
        'Posture Improvement',
        'Enhanced Nervous System Function',
        'Sports Performance Enhancement',
        'Reduced Need for Pain Medication',
        'Stress Reduction',
        'Better Sleep Quality',
      ],
      link: 'https://alignrecoverconnect.janeapp.com/#/chiropractic',
    },
    {
      title: 'Acupuncture',
      buttonTitle: 'Acupuncture',
      img: images[4],
      description:
        'Acupuncture is based on the idea that energy (or "qi") flows through meridian pathways in the body. Each meridian is uniquely connected to a certain organ within the body. When this flow is blocked or imbalanced, it can lead to pain and chronic health issues. By inserting needles at specific points, acupuncturists aim to unblock or balance this energy making it a holistic approach to health and wellness. Acupuncture techniques are not limited to needling, a licensed acupuncturist can develop a customized treatment plan which may include: fire cupping, gua sha, electro-stimulation (with needling), tui na, and moxibustion. ',
      types: [
        {
          type: 'Fire Cupping',
          description:
            'Fire cupping involves placing heated glass cups on the skin to create a vacuum. This suction pulls the skin and underlying tissue into the cup, promoting blood flow, relieving muscle/fascial tension, and reducing pain.',
        },
        {
          type: 'Gua Shua',
          description:
            'Gua sha is a technique where a smooth-edged tool is scraped along the skin. This helps to improve circulation, release muscle tension, and promote healing by stimulating blood flow to the area. Electro-Stimulation: Electro-stimulation, or electrical stimulation therapy, involves using small electrical currents applied to the skin to stimulate muscles and nerves. This can help reduce pain, improve muscle strength, help with muscle retraining (perfect for post-injury) and promote healing.',
        },
        {
          type: 'Tui Na',
          description:
            'Tui na is a form of Chinese therapeutic massage that uses various hand techniques to manipulate the body. It focuses on stimulating acupressure points and improving energy flow, promoting relaxation, relieving pain, and enhancing overall well-being.',
        },
        {
          type: 'Moxibustion',
          description:
            'Moxibustion involves burning dried mugwort (moxa) near acupuncture points or on specific areas of the body. The heat generated is believed to enhance energy flow, warm the body, and promote healing, often used in conjunction with acupuncture.',
        },
      ],
      benefitType: 'Acupuncture',
      benefits: [
        'Pain Relief',
        'Stress Reduction',
        'Improved Sleep Quality',
        'Enhance Mood',
        'Digestive Health',
        'Boost Immune System',
        'Increase Energy Levels',
        'Menstrual and Reproductive Health',
        'Overall Well-Being',
      ],
      link: 'https://alignrecoverconnect.janeapp.com/#/acupuncture',
    },
  ]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const select = queryParams.get('select');
  const [serviceType, setServiceType] = useState(data.find((service) => service.buttonTitle.toLowerCase() === select) || data[0]);

  useEffect(() => {
    if (images.length > 0) {
      setData([
        {
          title: 'Registered Massage Therapy',
          buttonTitle: 'RMT',
          img: images[0],
          description:
            'Massage therapists use hands-on techniques to relieve pain, reduce muscle tension, improve circulation, and promote relaxation. They address various issues, from stress relief to injury recovery, and provide guidance on posture and self-care to support lasting wellness.',
          types: null,
          benefitType: 'Massage Therapy',
          benefits: [
            'Pain Management',
            'Enhanced Mobility',
            'Stress Reduction',
            'Improved Circulation',
            'Postural Alignment',
            'Accelerated Recovery',
            'Immune System Support',
            'Improved Sleep Quality',
            'Headache Relief',
          ],
          link: 'https://alignrecoverconnect.janeapp.com/#/massage-therapy',
        },
        {
          title: 'Physiotherapy',
          buttonTitle: 'Physiotherapy',
          img: images[1],
          description:
            'Physiotherapy helps people improve movement and reduce pain by addressing issues with muscles, joints, and nerves. Through exercises, manual therapy, and education, physiotherapists treat injuries, manage chronic conditions, and support overall physical health and recovery.',
          types: null,
          benefitType: 'Physiotherapy',
          benefits: [
            'Pain Management',
            'Enhanced Mobility',
            'Injury Prevention and Recovery',
            'Postural Correction',
            'Enhanced Strength and Balance',
            'Increased Independence',
            'Enhanced Athletic Performance',
            'Scar Tissue and Swelling Reduction',
            'Pain Education',
            'Improved Quality of Life',
          ],
          link: 'https://alignrecoverconnect.janeapp.com/#/physiotherapy',
        },
        {
          title: 'Kinesiology',
          buttonTitle: 'Kinesiology',
          img: images[2],
          description:
            'Kinesiology is the study of how our bodies move, science-based approach that addresses physical and functional health, from enhancing sports performance to supporting daily living and chronic condition management',
          types: null,
          benefitType: 'Kinesiology',
          benefits: [
            'Improved Muscle Function',
            'Enhanced Athletic Performance',
            'Injury Prevention and Rehabilitation',
            'Better Posture and Alignment',
            'Pain Reduction',
            'Increased Range of Motion',
            'Enhanced Balance and Coordination',
            'Functional Independence',
          ],
          link: 'https://alignrecoverconnect.janeapp.com/#/kinesiology',
        },
        {
          title: 'Chiropractic',
          buttonTitle: 'Chiropractic',
          img: images[3],
          description:
            'Chiropractors enhance the function of nerves, muscles, and joints through a variety of techniques, including chiropractic adjustments, joint mobilizations, myofascial release therapy, instrument-assisted soft tissue therapy, and personalized exercises and rehabilitation programs.',
          types: null,
          benefitType: 'Chiropractic',
          benefits: [
            'Pain Relief',
            'Improved Mobility',
            'Headache Management',
            'Posture Improvement',
            'Enhanced Nervous System Function',
            'Sports Performance Enhancement',
            'Reduced Need for Pain Medication',
            'Stress Reduction',
            'Better Sleep Quality',
          ],
          link: 'https://alignrecoverconnect.janeapp.com/#/chiropractic',
        },
        {
          title: 'Acupuncture',
          buttonTitle: 'Acupuncture',
          img: images[4],
          description:
            'Acupuncture is based on the idea that energy (or "qi") flows through meridian pathways in the body. Each meridian is uniquely connected to a certain organ within the body. When this flow is blocked or imbalanced, it can lead to pain and chronic health issues. By inserting needles at specific points, acupuncturists aim to unblock or balance this energy making it a holistic approach to health and wellness. Acupuncture techniques are not limited to needling, a licensed acupuncturist can develop a customized treatment plan which may include: fire cupping, gua sha, electro-stimulation (with needling), tui na, and moxibustion. ',
          types: [
            {
              type: 'Fire Cupping',
              description:
                'Fire cupping involves placing heated glass cups on the skin to create a vacuum. This suction pulls the skin and underlying tissue into the cup, promoting blood flow, relieving muscle/fascial tension, and reducing pain.',
            },
            {
              type: 'Gua Shua',
              description:
                'Gua sha is a technique where a smooth-edged tool is scraped along the skin. This helps to improve circulation, release muscle tension, and promote healing by stimulating blood flow to the area. Electro-Stimulation: Electro-stimulation, or electrical stimulation therapy, involves using small electrical currents applied to the skin to stimulate muscles and nerves. This can help reduce pain, improve muscle strength, help with muscle retraining (perfect for post-injury) and promote healing.',
            },
            {
              type: 'Tui Na',
              description:
                'Tui na is a form of Chinese therapeutic massage that uses various hand techniques to manipulate the body. It focuses on stimulating acupressure points and improving energy flow, promoting relaxation, relieving pain, and enhancing overall well-being.',
            },
            {
              type: 'Moxibustion',
              description:
                'Moxibustion involves burning dried mugwort (moxa) near acupuncture points or on specific areas of the body. The heat generated is believed to enhance energy flow, warm the body, and promote healing, often used in conjunction with acupuncture.',
            },
          ],
          benefitType: 'Acupuncture',
          benefits: [
            'Pain Relief',
            'Stress Reduction',
            'Improved Sleep Quality',
            'Enhance Mood',
            'Digestive Health',
            'Boost Immune System',
            'Increase Energy Levels',
            'Menstrual and Reproductive Health',
            'Overall Well-Being',
          ],
          link: 'https://alignrecoverconnect.janeapp.com/#/acupuncture',
        },
      ]);
    }
  }, [images]);

  useEffect(() => {
    setServiceType(data.find((service) => service.buttonTitle.toLowerCase() === select) || data[0]);
  }, [data, select]);

  const selectService = (service) => {
    setServiceType(service);
  };

  return (
    <div className="flex flex-col items-center font-spaceGrotesk">
      <div className="flex h-[170px] flex-col items-center justify-center pt-[25px]">
        <header className="text-[48px] font-bold">Services</header>
        <div className="h-[6px] w-[140px] rounded-[4px] border bg-sage"></div>
      </div>
      <div className="flex w-[805px] flex-row justify-between pb-14 pt-10 max-xl:flex-col max-xl:items-center max-xl:gap-5 max-xl:pt-5">
        {data.map((service) => {
          return (
            <button
              key={service.buttonTitle}
              className={`h-[42px] rounded-[50px] px-5 text-[20px] font-normal max-xl:text-[30px] max-xl:h-[63px] hover:text-white hover:bg-primary ${serviceType.buttonTitle === service.buttonTitle ? 'bg-primary text-white' : 'bg-sage text-black'}`}
              onClick={() => selectService(service)}
            >
              {service.buttonTitle}
            </button>
          );
        })}
      </div>
      <div className="flex w-full flex-col items-center px-10 pb-40">
        <Service data={serviceType} />
      </div>
    </div>
  );
};

export default Services;
