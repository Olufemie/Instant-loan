import Hero from "../Components/Hero";
import LoanServices from "../Components/LoanServices";
import Testimonials from "../Components/Testimonials";
import Faq from "../Components/Faq";
import Contact from "../Components/contact";
import About from "../Components/About";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
      <div className="space-y-[100px] pt-20">
        <LoanServices />
        <Testimonials />
        <Faq />
        <Contact />
      </div>
    </div>
  );
}
