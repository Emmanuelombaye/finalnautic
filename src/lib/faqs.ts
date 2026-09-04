export type FaqItem = {
  question: string;
  answer: string;
};

/** Plain LegitScript-style FAQs (modeled on Efexia legitscript). */
export const homeFaqItems: FaqItem[] = [
  {
    question: "What is Nautic Health?",
    answer:
      "Nautic Health is a platform that connects eligible patients with independent U.S.-licensed clinicians for Semaglutide and Tirzepatide weight-management programs. Nautic Health is not a pharmacy. Fulfillment occurs through licensed pharmacy partners only when prescribed.",
  },
  {
    question: "When do I complete my medical intake?",
    answer:
      "After you begin, you complete a secure medical intake so a licensed provider can review your health history, medications, and goals before any treatment decision.",
  },
  {
    question: "Does completing an assessment guarantee a prescription?",
    answer:
      "No. Completing an assessment or starting a program does not guarantee a prescription. A licensed clinician must determine that treatment is medically appropriate before any prescription is issued.",
  },
  {
    question: "What does the monthly price include?",
    answer:
      "Program pricing reflects the online clinical consultation, ordinary program support, routine follow-up required by the program, and standard shipping when a prescription is approved. Laboratory testing, expedited shipping, and third-party services are not included unless specifically stated.",
  },
  {
    question: "Are the products FDA-approved?",
    answer:
      "Compounded medications are not FDA-approved. They may be prescribed for an individual patient when a licensed clinician determines they are clinically appropriate.",
  },
  {
    question: "How do I cancel a program?",
    answer:
      "Programs are month-to-month. You may cancel before your next billing date by contacting info@nautichealth.com. Refund eligibility depends on program status and the terms described in our policies.",
  },
];

export const fullFaqItems: FaqItem[] = [
  ...homeFaqItems,
  {
    question: "Do I need a live consultation?",
    answer:
      "Not always. Provider evaluations may be completed asynchronously or through a live consultation depending on the treatment, your medical history, state requirements, and the provider's clinical judgment.",
  },
  {
    question: "How long does provider review usually take?",
    answer:
      "Many reviews are completed within one to two business days after a complete intake is submitted. Complex cases or requests for additional information may take longer.",
  },
  {
    question: "What if a provider asks for more information?",
    answer:
      "You may receive messages requesting clarification or laboratory work before a decision is made. The program cannot move forward until required information is complete.",
  },
  {
    question: "Can I change programs after starting?",
    answer:
      "If a clinician determines another program is more appropriate, that recommendation is handled through the clinical review process rather than self-switching products.",
  },
  {
    question: "Is shipping included?",
    answer:
      "Standard shipping is included in the monthly program price when a prescription is approved and fulfilled. Expedited or replacement shipments may not be included unless specifically stated.",
  },
  {
    question: "Am I a candidate?",
    answer:
      "Candidacy is determined only by a licensed healthcare provider after reviewing your medical history, current medications, and — where indicated — laboratory results. Not every patient will qualify for every therapy.",
  },
];

export const programFaqs: FaqItem[] = [
  {
    question: "Does this program guarantee a prescription?",
    answer:
      "No. Completing an assessment does not guarantee a prescription. A licensed clinician must determine that treatment is medically appropriate before any prescription is issued.",
  },
  {
    question: "What does the monthly price include?",
    answer:
      "Program pricing reflects physician-guided care, ordinary program support, routine follow-up, and standard shipping when a prescription is approved. Laboratory testing and expedited shipping are not included unless specifically stated.",
  },
  {
    question: "Do I need a live consultation?",
    answer:
      "Not always. Provider evaluations may be completed asynchronously or through a live consultation depending on your medical history, state requirements, and the provider's clinical judgment.",
  },
  {
    question: "Do I need bloodwork?",
    answer:
      "Most programs include baseline laboratory testing so your provider can establish an objective picture before recommending anything, with repeat testing to monitor your response over time.",
  },
  {
    question: "Are compounded medications FDA-approved?",
    answer:
      "Compounded medications are not FDA-approved. They may be prescribed for an individual patient when a licensed clinician determines they are clinically appropriate.",
  },
  {
    question: "How do I cancel?",
    answer:
      "Programs are month-to-month with no long-term commitment. You can cancel before your next billing date by contacting info@nautichealth.com.",
  },
];
