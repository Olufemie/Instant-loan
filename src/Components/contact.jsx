export default function Contact() {
  return (
    <div id="contact" className="contactContainer">
      <section className="lg:flex grid lg:justify-between justify-center lg:w-[90%] w-full lg:mx-auto py-8 lg:text-left text-center lg:gap-0 gap-8 2xl:text-2xl">
        <div>
          <p className="font-bold text-white">Street Address</p>
          <p className="before_footer_text">2 Akande Close</p>
          <p className="before_footer_text">Yemetu Ibadan</p>
        </div>

        <div>
          <p className="font-bold text-white">Postal Address</p>
          <p className="before_footer_text">PO Box 18122 Yemetu Street</p>
          <p className="before_footer_text">Ibadan 8007 Nigeria</p>
        </div>

        <div>
          <p className=" text-white text-right">Contact our Agent Now!</p>
          <h2 className="bg-gradient-to-r from-white to-[#ff0475] inline-block text-transparent bg-clip-text 2xl:text-5xl lg:text-4xl text-3xl">
            +1 234 567 890
          </h2>
        </div>
      </section>
    </div>
  );
}
