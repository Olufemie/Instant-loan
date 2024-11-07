import { useState } from "react";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const List = [
    {
      question: "What is Instant Loan?",
      answer:
        "An instant loan is a type of loan that is quickly processed and disbursed, typically within a short time frame.",
    },
    {
      question: "How do I apply for an Instant Loan?",
      answer:
        "You can apply for an instant loan through our mobile app or website by following the application process.",
    },
    {
      question: "What is the interest rate for Instant Loans?",
      answer: "The interest rate for instant loans is 4%",
    },
    {
      question: "How long does it take to get an Instant Loan?",
      answer:
        "Once your application is approved, the loan is typically disbursed within minutes.",
    },
    {
      question: "What are the eligibility criteria?",
      answer:
        "Eligibility criteria include having a valid ID, being over 18 years old, and having a stable income source.",
    },
    {
      question: "Can I repay the loan early?",
      answer: "Yes, you can repay the loan early without any penalties.",
    },
    {
      question: "Is there a maximum loan amount?",
      answer:
        "Yes, the maximum loan amount is determined by your credit score and income level.",
    },
    {
      question: "How does it work?",
      answer: "Only God knows mehn........",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <div className="my-10">
        <h1 className="text-center font-[700] text-[1.5rem] 2xl:text-[3.5rem]">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-md 2xl:text-2xl">
          Everything you need to know about Instant Loans
        </p>
      </div>

      <div className="w-11/12 mx-auto grid lg:grid-cols-2 grid-flow-row gap-x-10">
        {List.map((item, index) => (
          <div key={index} className="mb-4 border-b pb-4">
            <div
              className="flex justify-between"
              onClick={() => toggleAnswer(index)}
            >
              <div>
                <h3 className="font-semibold text-lg 2xl:text-2xl cursor-pointer">
                  {item.question}
                </h3>
              </div>

              <div className="2xl:text-xl">
                {activeIndex === index ? "-" : "+"}
              </div>
            </div>

            {activeIndex === index && (
              <p className="mt-2 text-gray-600 2xl:text-lg">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
