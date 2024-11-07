import image1 from "../../public/car.png";
import image2 from "../../public/property.png";
import image3 from "../../public/wedding.png";
import image4 from "../../public/carLoan.png";
import image5 from "../../public/weddingLoan.png";
import image6 from "../../public/PropertyLoan.png";

import { Link } from "react-router-dom";

export default function LoanServices() {
  // function toggleCarousel() {
  //   document.querySelector(".group1").classList.toggle("hidden");
  //   document.querySelector(".group2").classList.toggle("hidden");
  // }
  return (
    <div>
      <div className="flex justify-center items-center text-slate 2xl:text-xl text-slate-600 mt-10 ">
        <span>What We're Offering</span>
        <div className="w-14 h-[4px] bg-purple-800 2xl:w-[60px] 2xl:h-2 ml-2 rounded-full "></div>
      </div>
      <div className="text-center p-4">
        <h1 className="text-4xl text-slate-900  2xl:text-[3.5rem] font-bold">
          All Loans Services
        </h1>
      </div>
      {/* card container */}
      {/* first three cards */}
      <div className="card_container w-11/12 my-[50px] mx-auto lg:flex grid justify-center gap-10">
        <div className="box group relative w-full shadow-lg shadow-gray-200 rounded-lg overflow-hidden ">
          <div className="box_img relative overflow-hidden">
            <img src={image1} alt="" className="w-full" />

            <div className="absolute bottom-0 left-0 right-0 h-full bg-purple-800 bg-opacity-60 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
          </div>
          <div className="absolute right-3 2xl:bottom-[40%] 2xl:w-[100px] 2xl:h-[100px] lg:bottom-[46%] bottom-[49%] transform translate-y-full group-hover:-translate-y-[100%] group-hover:-translate-x-[165%] 2xl:group-hover:-translate-y-[130%] 2xl:group-hover:-translate-x-[220%] bg-purple-400 group-hover:bg-purple-800 w-[85px] h-[85px] rounded-lg transition-transform duration-500 ease-in-out">
            <div className="relative  w-[85px] h-[85px] 2xl:w-[100px] 2xl:h-[100px] rounded-lg">
              <img
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src={image4}
                alt="car Loan"
              />
            </div>
          </div>

          <div className="box_text py-[20px] px-[30px] flex flex-col gap-4">
            <h4 className="font-bold text-2xl 2xl:text-4xl  to-slate-700">
              Car Loan
            </h4>

            <p className="font-normal leading-7 text-slate-500 text-lg -tracking-wide 2xl:text-xl">
              Car Loan provide low interest many variations of passages of lorem
              ipsum available the majority have some.
            </p>

            <Link
              to="/applyforloan"
              className="bg-purple-800 text-white w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px] flex justify-center items-center rounded-full transition-colors duration-500 ease-in-out group-hover:bg-purple-400 2xl:text-2xl"
            >
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </Link>
          </div>

          <div className="absolute right-0">
            <div className="relative bg-purple-800 w-[100px] h-[100px] rounded-lg">
              <img
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src={image4}
                alt="car Loan"
              />
            </div>
          </div>
        </div>

        <div className="box group relative w-full shadow-lg shadow-gray-200 rounded-lg overflow-hidden">
          <div className="box_img relative overflow-hidden">
            <img src={image3} alt="" className="w-full" />

            <div className="absolute bottom-0 left-0 right-0 h-full bg-purple-800 bg-opacity-60 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
          </div>
          <div className="absolute right-3 2xl:bottom-[40%] 2xl:w-[100px] 2xl:h-[100px] lg:bottom-[46%] bottom-[49%] transform translate-y-full group-hover:-translate-y-[100%] group-hover:-translate-x-[165%] 2xl:group-hover:-translate-y-[130%] 2xl:group-hover:-translate-x-[220%] bg-purple-400 group-hover:bg-purple-800 w-[85px] h-[85px] rounded-lg transition-transform duration-500 ease-in-out">
            <div className="relative w-[85px] h-[85px] 2xl:w-[100px] 2xl:h-[100px] rounded-lg">
              <img
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src={image5}
                alt="car Loan"
              />
            </div>
          </div>

          <div className="box_text py-[20px] px-[30px] flex flex-col gap-4">
            <h4 className="font-bold text-2xl 2xl:text-4xl  to-slate-700">
              Wedding Loan
            </h4>

            <p className="font-normal leading-7 text-slate-500 text-lg -tracking-wide 2xl:text-xl">
              For Couple provide easy and affordable with easy process
              loremipsum minim veniam aute irure lorm.
            </p>

            <Link
              to="/applyforloan"
              className="bg-purple-800 text-white w-[50px] h-[50px]  2xl:w-[60px] 2xl:h-[60px] flex justify-center items-center 2xl:text-2xl rounded-full transition-colors duration-500 ease-in-out group-hover:bg-purple-400"
            >
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </Link>
          </div>
        </div>

        <div className="box group relative w-full shadow-lg shadow-gray-200 rounded-lg overflow-hidden">
          <div className="box_img relative overflow-hidden">
            <img src={image2} alt="" className="w-full" />

            <div className="absolute bottom-0 left-0 right-0 h-full bg-purple-800 bg-opacity-60 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out "></div>
          </div>
          <div className="absolute right-3 2xl:bottom-[40%] 2xl:w-[100px] 2xl:h-[100px] lg:bottom-[46%] bottom-[49%] transform translate-y-full group-hover:-translate-y-[100%] group-hover:-translate-x-[165%] 2xl:group-hover:-translate-y-[130%] 2xl:group-hover:-translate-x-[220%] bg-purple-400 group-hover:bg-purple-800 w-[85px] h-[85px] rounded-lg transition-transform duration-500 ease-in-out ">
            <div className="relative  w-[85px] h-[85px]  2xl:w-[100px] 2xl:h-[100px] rounded-lg">
              <img
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src={image6}
                alt="car Loan"
              />
            </div>
          </div>

          <div className="box_text py-[20px] px-[30px] flex flex-col gap-4">
            <h4 className="font-bold text-2xl 2xl:text-4xl te to-slate-700">
              Property Loan
            </h4>

            <p className="font-normal leading-7 text-slate-500 text-lg 2xl:text-xl -tracking-wide">
              Everyone want to buy property so people want to buy home, land or
              commercial properly low interest.
            </p>

            <span className="bg-purple-800 text-white w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px] 2xl:text-2xl flex justify-center items-center rounded-full transition-colors duration-500 ease-in-out group-hover:bg-purple-400">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
