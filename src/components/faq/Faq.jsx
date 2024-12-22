import React, { useState } from 'react';
import Divider from '../Divider';
import Question from './Question';

const faqData = [
  {
    question: 'ICBC claims',
    answer: [
      'ICBC provides pre-approved treatment for individuals who have been in an ICBC related crash for 12 weeks after the date of your accident.',
      'All you need to provide us is a valid ICBC claim number and a piece of photo ID to confirm your identity. We also request the contact information of your adjuster, so we can reach out with any questions regarding your claim.',
      `If your accident happened over 12 weeks ago and you didn't start treatment within that time, our therapists will need to submit a treatment plan to ICBC to request a new approval. This includes an initial assessment, for which you'll cover the full cost upfront. Once we receive the approval from ICBC, you'll be reimbursed for the portion they cover.`,
      `Our clinic policy is that we will not continue treatment under ICBC until the treatment plan is approved. If you want to continue treatment while pending for approval you will need to pay the full cost of the sessions and self submit to ICBC.`,
      `If you used sessions at another clinic, we are still required to perform an initial assessment at ARC Therapy. Please talk to your adjuster and verify that they will approve the initial assessment prior to booking in. If a treatment session is not covered by ICBC, you will be responsible for the payment or self submission to ICBC.`,
      `Please note, some treatments at ARC Therapy have a user fee to cover the part not funded by ICBC, meaning you will pay the portion not covered by ICBC. Additionally, we are unable to directly bill extended health plans for ICBC-related treatments.`,
    ],
    additional: {
      title: `Pre Approved Sessions by ICBC`,
      description: [
        '25 Physiotherapist Sessions',
        '25 Chiropractic Sessions ',
        '12 RMT Sessions',
        '12 Kinesiologist Sessions ',
        '12 Acupuncturist Sessions ',
      ],
    },
  },
  {
    question: 'What services does your clinic provide?',
    answer: [
      `We offer a variety of services, including Registered Massage Therapy, Physiotherapy, Chiropractic Care, Kinesiology, and Acupuncture. Each service is designed to enhance your overall health and support your specific needs.`,
    ],
    additional: null,
  },
  {
    question: 'How can I determine which service is best for me?',
    answer: [
      `If you're unsure which service to choose, we recommend checking our "Services" page for detailed descriptions. You can also call or email us with any questions, and our team will be happy to assist you in finding the right fit for your needs.`,
    ],

    additional: null,
  },
  {
    question: 'Is a referral necessary to see a therapist?',
    answer: [
      `Typically, you don't need a referral to book an appointment. However some insurance plans require a doctor's referral/note to be able to direct bill extended health. `,
    ],
    additional: null,
  },
  {
    question: 'What can I expect during my first visit?',
    answer: [
      `Your first appointment will involve a detailed assessment where we'll review your health history and any specific issues you're experiencing. This information helps us create a personalized treatment plan just for you.`,
    ],
    additional: null,
  },
  {
    question: 'What should I wear to my appointment?',
    answer: [
      `We recommend wearing comfortable clothing that allows for easy movement. For massage therapy, you'll be given a drape for privacy. For other therapies, our practitioners will guide you on what's appropriate if adjustments are recommended.`,
    ],
    additional: null,
  },
  {
    question: 'Direct Billing, do we accept insurance?',
    answer: [
      `Yes, we offer direct billing! The clinic is not able to see what your coverage is, it is your responsibility to check your insurance coverage. You are responsible for the cost of the treatment if your insurance does not process.`,
      `We accept most insurance plans. If you have more than one insurance plan, we need to bill your primary insurance first. Telus eClaims does not support direct billing for secondary insurances. If your secondary coverage is through Telus eClaims, we'll provide you with a receipt that you'll need to submit manually to your secondary insurance provider. Please check the link to see what providers are under Telus eClaims.`,
    ],
    additional: {
      link: 'https://google.ca',
    },
  },
  {
    question: 'What do I need to bring for direct billing?',
    answer: [
      `Please bring a piece of photo ID and your insurance card for billing purposes.`,
      `Additionally, some plans may require a doctor's note for direct billing. Please verify with your insurance provider ahead of time. `,
    ],
    additional: null,
  },
  {
    question: 'How can I prepare for my appointment?',
    answer: [
      `In order to maximize your treatment time, complete your online intake forms and sign the consent forms before your visit. If intake forms are not completed prior to your session, your therapist will need to use part of your treatment time to do so. `,
    ],
    additional: null,
  },
  {
    question: 'What if I need to cancel or reschedule my appointment?',
    answer: [
      `We understand that things can come up. If you need to cancel or reschedule, please notify us at least 24 hours in advance as this allows us to accommodate other patients. Cancellations made within 24 hours may incur a cancellation fee. `,
    ],
    additional: null,
  },
  {
    question: 'Do you accept ICBC claims?',
    answer: [
      `Yes, we accept ICBC with select therapists. If you have any questions about the process, please feel free to reach out to us at info@arctherapy.ca. `,
    ],
    additional: null,
  },
  {
    question: 'What information is needed for ICBC claims?',
    answer: [
      `Your claim number and the adjuster's contact information, including their email and phone number. You should also include the end date of your sessions provided by the adjuster. If you have received treatments at other clinics related to the same claim, please let us know, as this will help us accurately track your sessions.`,
      `If you used sessions at another clinic, we are required to perform an initial assessment. Please talk to your adjuster and verify that they will approve the initial assessment prior to booking in.`,
      `If a treatment session is not covered by ICBC, you will be responsible for the payment or self submission to ICBC. `,
    ],
    additional: null,
  },
  {
    question: 'Do you accept WCB claims? ',
    answer: [
      `We currently do not directly bill to WBC. If you have a WCB claim and would like to see a therapist, we will not be able to submit on your behalf, you will have to pay in full and self submit to WBC.`,
    ],
    additional: null,
  },
  {
    question: 'Can I bill my extended health with a ICBC or WCB claim? ',
    answer: [
      `We will not be submitting any user fees to extended healthcare providers. Therefore, ICBC patients are responsible for paying for any user fees. There is no guarantee that you will be reimbursed by your healthcare provider. Please contact your extended healthcare provider before receiving ICBC treatment to find out more.`,
    ],
    additional: null,
  },
];

const Faq = () => {
  const [openIndex, setOpenIndexes] = useState([]);

  const toggleFaq = (index) => {
    setOpenIndexes((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  };

  return (
    <div className="flex flex-col items-center font-spaceGrotesk">
      <div className="flex h-[170px] flex-col items-center justify-center pt-[25px]">
        <header className="text-[48px] font-bold">FAQ</header>
        <div className="h-[6px] w-[140px] rounded-[4px] border bg-sage"></div>
      </div>
      <div className="w-full max-w-[940px] pb-28">
        <Divider />
        {faqData.map((faq, index) => {
          return (
            <div key={index}>
              <Question data={faq} isOpen={openIndex.includes(index)} onToggle={() => toggleFaq(index)} />
              {index < faqData.length - 1 && <Divider />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
