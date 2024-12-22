import React from 'react';
import Term from './Term';

const termsData = [
  {
    title: 'Introduction',
    description: [
      {
        header: `The purpose of this Privacy Policy is to provide clear information about how we handle your personal data when you interact with our website, book services, or contact us. This policy applies to ARC Therapy and all its digital platforms, including integrations such as Jane App.`,
        points: [],
      },
    ],
  },
  {
    title: 'Data Collection',
    description: [
      {
        header: `We collect personal information to provide you with quality care and a seamless experience. The information we collect may include:`,
        points: [
          `Contact Information: Name, email address, phone number, and mailing address.`,
          `Health Information: Medical history, conditions, and other health details shared for therapy or treatment purposes.`,
          `Payment Information: Credit card or banking details for billing.`,
          `Technical Data: IP address, device type, and browsing activity through cookies and analytics tools.`,
        ],
      },
      {
        header: `How We Collect Information:`,
        points: [
          `Directly from you during booking or intake (e.g., through Jane App).`,
          `Automatically when you interact with our website (via cookies or tracking technologies).`,
        ],
      },
      {
        header: `Why We Collect Information:`,
        points: [
          `To schedule and manage appointments.`,
          `To customize your treatment and provide relevant services.`,
          `To process payments securely.`,
          `To improve website functionality and user experience.`,
        ],
      },
    ],
  },
  {
    title: 'Consent',
    description: [
      {
        header: `We collect and process your data only with your consent. Consent is obtained when you:`,
        points: [`Complete online forms.`, `Book appointments via Jane App.`, `Agree to cookie use on our website.`],
      },
      { header: `You may withdraw your consent at any time, subject to legal or contractual restrictions, by contacting us directly.`, points: [] },
    ],
  },
  {
    title: 'Data security',
    description: [
      {
        header: `Protecting your personal information is a priority. We use industry-standard security measures to safeguard your data, including:`,
        points: [
          `Encryption for all data transmitted via Jane App.`,
          `Secure storage solutions with access restricted to authorized personnel.`,
          `Regular system updates and security audits.`,
        ],
      },
    ],
  },
  {
    title: 'Data sharing',
    description: [
      {
        header: `We do not sell or rent your personal information. However, we may share data in the following cases:`,
        points: [
          `With Jane App for appointment scheduling, record-keeping, and payment processing.`,
          `With trusted service providers for hosting, payment gateways, or IT support.`,
          `When required by law or regulatory authorities.`,
        ],
      },
    ],
  },
  {
    title: 'Cookies and tracking',
    description: [
      {
        header: `Our website uses cookies and similar technologies to improve your browsing experience and gather analytics. These may include:`,
        points: [
          `Essential Cookies: Necessary for the website to function.`,
          `Analytics Cookies: Help us understand how visitors interact with the site.`,
        ],
      },
      { header: `You can manage or disable cookies in your browser settings.`, points: [] },
    ],
  },
  {
    title: 'Policy updates',
    description: [
      {
        header: `We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. Updates will be posted on this page, and significant changes will be communicated via email or website notifications.`,
        points: [],
      },
    ],
  },
  {
    title: 'Limits of our policy',
    description: [
      {
        header: `Our website may contain links to external sites that are not operated by ARC Therapy. Please be aware that we have no control over the privacy practices or policies of those websites and cannot accept responsibility for their content or data protection measures.`,
        points: [],
      },
    ],
  },
  {
    title: 'Contact information',
    description: [{ header: `For privacy-related questions or concerns, please contact us at:`, points: [] }],
  },
];

const Terms = () => {
  return (
    <div className="flex flex-col items-center font-spaceGrotesk max-xl:px-20">
      <div className="flex h-[170px] flex-col items-center justify-center pt-[25px]">
        <header className="text-[48px] font-bold">Terms & condition</header>
        <div className="h-[6px] w-[140px] rounded-[4px] border bg-sage"></div>
      </div>
      <div className="w-full max-w-[940px] pb-40 text-left text-[20px] max-xl:text-[30px]">
        <p>
          At ARC Therapy, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information in
          compliance with Canadian privacy laws, including the Personal Information Protection and Electronic Documents Act (PIPEDA).
        </p>
        <p className="pb-7"> By using our website or services, you consent to the practices outlined below.</p>
        {termsData.map((terms, index) => {
          return <Term data={terms} key={index} />;
        })}
        <p>ARC Therapy</p>
        <p>Email: info@arctherapy.ca</p>
        <p>Phone: (604)-285-9922</p>
        <p>Address: #135-6020 Blundell Road, Richmond BC.</p>
      </div>
    </div>
  );
};

export default Terms;
