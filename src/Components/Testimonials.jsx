/* eslint-disable no-unused-vars */
import { MoveRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Testimonials() {
  const [testimonies, setTestimonies] = useState([
    {
      id: 1,
      name: "Omolara Gbadamosi",
      job: "Nurse",
      testimony:
        "When ASUU called off the strike and my daughter was to go back to school, the money I was expecting wasn't forthcoming and my daughter is about to graduate. It’s InstantLoan loans that helped us. I started a new business in school. It’s been going well, but I needed some money to buy things for this season. Can’t ask my parents because things are tight. I eventually used InstantLoan loans, and my business has been growing.",
    },
    {
      id: 2,
      name: "Cheta Odigo",
      job: "Businessman",
      testimony:
        "My favourite thing about my InstantLoan account is the free transfer because I do a lot of transfers around salary period. When I’m now balancing my account, it won’t balance again because of the transfer charge. Never again. The thing I like is the all-in-one ness. Once money enters my account. No excuses, no stress of transferring out. Everything is in one place.",
    },
    {
      id: 3,
      name: "Sarah Ladipo",
      job: "Business developer",
      testimony:
        "I remember when I got my first 2% cash back. I thought it was a debit. I wanted to fight. When I realised it was actually a credit, I grinned a lot. It was small, but I liked it. The biggest reason I like your cards is that I can pay for my Netflix comfortably. Before, I used my friend's card. For some reason, my other cards just don’t work. Now, I use my InstantLoan card conveniently.",
    },
    {
      id: 4,
      name: "Udeme Udoh",
      job: "Teacher",
      testimony:
        "You are my best app presently on my phone. App that gives me daily interest, app that gives highest interest on my savings, App that gives me money when am broke (InstantLoan loan), App that gives me discount in my airtime and data purchase. Who dey breath!!! InstantLoan app- making life convenient; is just a click away. I love you and there's nothing you can do",
    },
  ]);

  const [selectedTestimony, setSelectedTestimony] = useState(testimonies[0]);

  const handleTestimonyClick = (testimony) => {
    setSelectedTestimony(testimony);
  };

  return (
    <div>
      <h1 className="font-[700] 2xl:text-[3.5rem] lg:text-[1.5rem] text-center pt-5 pb-5">
        Testimonials
      </h1>

      <div className="lg:grid lg:grid-cols-3 justify-h items-stretch lg:w-11/12 w-full 2xl:mx-auto 2xl:w-11/12 lg:mx-auto mx-0 gap-10 ">
        <div className="lg:grid flex gap-3 lg:overflow-x-hidden overflow-x-scroll lg:pb-0 pb-3 lg:px-0 px-5 ">
          {testimonies.map((test) => (
            <div
              key={test.id}
              onClick={() => handleTestimonyClick(test)}
              className="flex-shrink-0 flex-nowrap"
            >
              <div
                className={`flex rounded-lg px-5 py-5 w-full justify-between cursor-pointer gap-10 ${
                  selectedTestimony?.id === test.id
                    ? "bg-purple-700 bg-opacity-10 text-purple-800 shadow-md"
                    : "bg-[#FBFBFD] text-[#C9C9CA]"
                }`}
              >
                <div className="flex-shrink-0 flex-nowrap">
                  <span className="font-[600] 2xl:text-xl">{test.name}</span>
                </div>

                <div>
                  <MoveRight
                    className={
                      selectedTestimony?.id === test.id
                        ? "text-[$ff0475]"
                        : "text-[#C9C9CA]"
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedTestimony && (
          <div className="p-10 bg-[#FBFBFD] shadow-md shadow-purple-200 rounded-lg w-full col-span-2 lg:flex grid items-center gap-3 lg:gap-10">
            <div>
              <h1 className="grid mx-auto lg:mx-0 lg:gap-2 text-[#283655]">
                <span className="font-bold text-2xl 2xl:text-3xl">
                  {selectedTestimony.name}
                </span>
                <span className="text-[16px] 2xl:text-[20px] font-normal text-[#404B65]">
                  {selectedTestimony.job}
                </span>
              </h1>
            </div>

            <div className="bg-[#C9C9CA] lg:w-[1px] w-full h-[1px] lg:h-[60%]"></div>

            <div>
              <p className="mt-3 text-[#404B65] 2xl:text-[18px]">
                {selectedTestimony.testimony}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
