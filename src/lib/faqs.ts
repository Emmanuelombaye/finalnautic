export type FaqItem = {
  question: string;
  answer: string;
};

/**
 * Plain LegitScript-style FAQs — same structure and wording as Efexia legitscript
 * (homeSections + how-it-works FAQ set), branded for Nautic Health.
 */
export const homeFaqItems: FaqItem[] = [
  {
    question: "What is Nautic Health?",
    answer:
      "Nautic Health is a technology platform that connects eligible patients with independent U.S.-licensed clinicians for weight-management programs. Nautic Health is not a pharmacy. Fulfillment occurs through licensed pharmacy partners only when prescribed.",
  },
  {
    question: "When do I complete my medical intake?",
    answer:
      "After you begin, you finish the secure medical intake and identity-verification steps required for licensed-provider review — before any provider decision and before any fulfillment.",
  },
  {
    question: "Does purchasing guarantee a prescription?",
    answer:
      "No. Purchasing or completing intake does not guarantee a prescription. A licensed clinician must determine that treatment is medically appropriate before any prescription is issued.",
  },
  {
    question: "What does the monthly price include?",
    answer:
      "Program pricing reflects the online clinical consultation, standard shipping when a prescription is approved, ordinary program support, and routine follow-up required by the program. Laboratory testing, expedited shipping, and third-party services are not included unless specifically stated.",
  },
  {
    question: "Are the products FDA-approved?",
    answer:
      "Compounded medications are not FDA-approved. They may be prescribed for an individual patient when a licensed clinician determines they are clinically appropriate.",
  },
  {
    question: "How do I cancel a program?",
    answer:
      "You may cancel or manage your program by contacting info@nautichealth.com. Refund eligibility depends on program status and the terms described in our policies.",
  },
];

/** How-it-works style extras (Efexia marketingPages how-it-works FAQ set). */
export const howItWorksFaqItems: FaqItem[] = [
  {
    question: "Why does the medical intake happen after I begin?",
    answer:
      "Starting a program creates the account your intake is attached to and reserves clinical review capacity. The intake itself is the clinical step — it happens before any provider decision and before any fulfillment.",
  },
  {
    question: "Does paying mean I will receive a prescription?",
    answer:
      "No. Purchasing or completing intake does not guarantee a prescription. A licensed clinician must determine that treatment is medically appropriate before any prescription is issued.",
  },
  {
    question: "How long does provider review usually take?",
    answer:
      "Many reviews are completed within one to two business days after a complete intake is submitted. Complex cases or requests for additional information may take longer.",
  },
  {
    question: "What if a provider asks for more information?",
    answer:
      "You may receive secure messages requesting clarification, photos, or laboratory work before a decision is made. The program cannot move forward until required information is complete.",
  },
  {
    question: "Can I change programs after starting?",
    answer:
      "If a clinician determines another program is more appropriate, that recommendation is handled through the clinical review process rather than self-switching products after payment.",
  },
  {
    question: "Is shipping really included?",
    answer:
      "Standard shipping is included in the monthly program price when a prescription is approved and fulfilled. Expedited or replacement shipments may not be included unless specifically stated.",
  },
];

/** Full FAQ page = home + how-it-works items, deduped by question (Efexia getFullFaqItems). */
export function getFullFaqItems(): FaqItem[] {
  const seen = new Set<string>();
  return [...homeFaqItems, ...howItWorksFaqItems].filter((item) => {
    if (seen.has(item.question)) return false;
    seen.add(item.question);
    return true;
  });
}

export const fullFaqItems: FaqItem[] = getFullFaqItems();

/** Program page FAQs — same plain compliance set as Efexia treatment FAQs. */
export const programFaqs: FaqItem[] = [
  {
    question: "Does purchasing guarantee a prescription?",
    answer:
      "No. Purchasing or completing intake does not guarantee a prescription. A licensed clinician must determine that treatment is medically appropriate before any prescription is issued.",
  },
  {
    question: "What does the monthly price include?",
    answer:
      "Program pricing reflects the online clinical consultation, standard shipping when a prescription is approved, ordinary program support, and routine follow-up required by the program. Laboratory testing, expedited shipping, and third-party services are not included unless specifically stated.",
  },
  {
    question: "Do I need a live consultation?",
    answer:
      "Not always. Provider evaluations may be completed asynchronously or through a live consultation depending on your medical history, state requirements, and the provider's clinical judgment.",
  },
  {
    question: "Are compounded medications FDA-approved?",
    answer:
      "Compounded medications are not FDA-approved. They may be prescribed for an individual patient when a licensed clinician determines they are clinically appropriate.",
  },
  {
    question: "Is shipping included?",
    answer:
      "Standard shipping is included in the monthly program price when a prescription is approved and fulfilled. Expedited or replacement shipments may not be included unless specifically stated.",
  },
  {
    question: "How do I cancel a program?",
    answer:
      "You may cancel or manage your program by contacting info@nautichealth.com. Refund eligibility depends on program status and the terms described in our policies.",
  },
];
