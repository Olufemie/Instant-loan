import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <section className="footer_section">
        <div className="lg:flex grid lg:justify-between justify-center 2xl:text-2xl lg:w-[90%] w-full lg:mx-auto py-8 lg:text-left text-center lg:gap-0 gap-8">
          <div className="footer_col_1">
            <Link to="/">
              <span className="font-bold text-4xl 2xl:text-5xl bg-gradient-to-r from-white to-[#ff0475] inline-block text-transparent bg-clip-text  pb-2">
                InstantLoan
              </span>
            </Link>
            <p class="payday">You need an active Nigerian bank</p>
            <p class="payday">account to allow the money to be</p>
            <p class="payday">transferred to you.</p>
          </div>

          <div className="footer_col_2">
            <h5 class="h5_text">OPEN HOURS</h5>
            <ul>
              <li class="footer_li">Monday 11am-7pm</li>
              <li class="footer_li">Tuesday-Friday 11am-8pm</li>
              <li class="footer_li">Saturday 10am-6pm</li>
              <li class="footer_li">Sunday 11am-6pm</li>
            </ul>
          </div>

          <div className="footer_col_3">
            <h5 class="h5_text">EXTRA LINKS</h5>
            <ul>
              <li class="footer_li">
                <a href="#" class="footer_text">
                  About
                </a>
              </li>
              <li class="footer_li">
                <a href="#" class="footer_text">
                  Services
                </a>
              </li>
              <li class="footer_li">
                <a href="#" class="footer_text">
                  Company news
                </a>
              </li>
              <li class="footer_li">
                <a href="#" class="footer_text">
                  Investor relations
                </a>
              </li>
            </ul>
          </div>

          <div className="footer_col_3">
            <h5 class="h5_text">SOCIALS</h5>
            <ul>
              <li class="footer_li">
                <a href="#" class="footer_text">
                  Twitter
                </a>
              </li>
              <li class="footer_li">
                <a href="#" class="footer_text">
                  Instagram
                </a>
              </li>
              <li class="footer_li">
                <a href="#" class="footer_text">
                  Facebook
                </a>
              </li>
              <li class="footer_li">
                <a href="#" class="footer_text">
                  Skype
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
