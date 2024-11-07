import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import Line from "./Line";
import { MessageCircleQuestion } from "lucide-react";
import Contact from "./contact";

export default function Header() {
  return (
    <div className="bg-[#2C1762] sticky top-0 z-50 h-fit 2xl:text-2xl">
      <div className="flex items-center justify-between py-6 mx-auto w-11/12 text-white">
        <div>
          <Link to="/">
            <span className="font-bold text-2xl 2xl:text-4xl bg-gradient-to-r from-white to-[#ff0475] inline-block text-transparent bg-clip-text">
              InstantLoan
            </span>
          </Link>
        </div>

        <div className="hidden lg:flex justify-center gap-10 2xl:text-xl text-[14px]">
          <Link to="/">Home</Link>
          <Link to="/applyforloan">Apply for a loan</Link>
          <a href="#contact">Contact</a>
        </div>

        <div className="lg:flex items-center gap-2 hidden">
          <div>
            <MessageCircleQuestion />
          </div>

          <div className="grid leading-tight">
            <span className="font-semibold">Have any questions?</span>
            <span className="text-xs 2xl:text-lg">Call: +123 456 7890</span>
          </div>
        </div>

        <div className="lg:hidden block">
          <MobileNav />
        </div>
      </div>

      <Line />
    </div>
  );
}
