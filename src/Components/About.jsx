import Image from "../../public/about.png";
import avatar from "../../public/avatar.png";

export default function About() {
  return (
    <div className="bg-purple-100 ">
      <section className="grid lg:grid-cols-2 lg:justify-between w-11/12 mx-auto py-10 items-center">
        <div className="">
          <div className="flex items-center gap-2 pb-5">
            <div className="bg-purple-900 2xl:w-[60px] 2xl:h-2 lg:w-[40px] w-[30px] h-1 rounded-full"></div>
            <h1 className="font-[500] 2xl:text-6xl lg:text-4xl text-lg">
              About InstantLoan
            </h1>
          </div>
          <p className="2xl:text-3xl  text-justify lg:text-lg">
            {" "}
            With Our Mission to make loans more inclusive and Accessible,
            InstantLoans is Dedicated to providing Secure & Affordable Loan
            Services with Easy access and very good loan interest Rate.Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Ipsum quasi,
            cupiditate dolorum quo, maiores velit provident ducimus inventore
            blanditiis odio ea expedita voluptate ullam deleniti dolor vitae
            ipsam sed! Distinctio. With instant Loan, you can have access to any
            loan Option of your choice with Ease. Yes! Instantloan is your
            One-stop loan company platform and more
          </p>
        </div>
        <div>
          <img
            src={Image}
            className="flex-shrink-0 flex-nowrap w-full lg:h-[70vh] "
          />
        </div>
      </section>
    </div>
  );
}
