import MainIllustrator from "../../public/heroImage.png";
import stripes from "../../public/stripe.webp";
import { Link } from "react-router-dom";
import icon1 from "../../public/cbn.webp";
import icon2 from "../../public/ndic.png";

export default function Hero() {
  return (
    <div className="lg:bg-gradient-to-r bg-gradient-to-b from-[#2c1762] to-[#ff0475] from-55% w-full lg:h-[90vh] overflow-y-hidden relative">
      <div className="lg:flex lg:justify-between w-11/12 mx-auto text-white">
        {/* Hero Text */}
        <div className="flex-shrink-0 flex-nowrap lg:pt-[8.5rem] pt-[4rem] h-full">
          <h1 className="font-[600] 2xl:text-[4.5rem] lg:text-[3.5rem] text-[2rem] leading-tight lg:text-left text-center animate-slideUpH1">
            We are a bank and our
            <br />
            <span className="bg-gradient-to-r from-white to-[#ff0475] inline-block text-transparent bg-clip-text">
              superpower
            </span>{" "}
            is giving you
            <br className="lg:block hidden" /> access to{" "}
            <span className="bg-gradient-to-r from-white to-[#ff0475] inline-block text-transparent bg-clip-text">
              loans
            </span>
          </h1>

          <p className="2xl:text-3xl lg:text-xl text-sm 2xl:py-10 lg:py-8 py-6 lg:text-left text-center animate-slideUpP ">
            Instant loans,helps the average Nigerian access <br /> finance tools
            to take control of both their life <br /> and their finances.
          </p>

          <Link to="/applyforloan">
            <button className="text-white 2xl:text-xl 2xl:py-5 font-semibold text-md bg-[#ff0475] rounded-lg py-3 px-10 mt-5 lg:mx-0 mx-auto block animate-slideUpButton">
              Apply for a loan
            </button>
          </Link>

          <div className="flex lg:pt-20 pt-10 lg:gap-10 gap-5 lg:text-[14px] text-[10px] items-center lg:justify-normal justify-center">
            <div className="flex items-center gap-2">
              <img alt="Cbn" src={icon1} className="h-auto lg:w-10 w-6" />
              <p>CBN Licensed</p>
            </div>

            <div className="flex items-center gap-2">
              <img alt="ndic" src={icon2} className="h-auto lg:w-20 w-10" />
              <p>NDIC Licensed</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div>
          <img
            className="absolute right-0 lg:top-[9.5rem] top-[32.5rem] w-auto lg:h-[50%] h-[20%] z-[1] animate-slideRight"
            alt="stripe"
            src={stripes}
          />

          <img
            className="lg:h-full h-auto w-auto z-[10] relative animate-slideUpImage "
            alt="home illustrator"
            src={MainIllustrator}
          />
        </div>
      </div>
    </div>
  );
}
