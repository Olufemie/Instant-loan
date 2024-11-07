import { useState } from "react";
import { Link } from "react-router-dom";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const genericHamburgerLine = `h-[2px] w-8 my-1 rounded-full bg-white transition ease transform duration-300`;

  return (
    <div>
      <button
        className="group flex h-12 w-12 flex-col items-center justify-center"
        onClick={() => setOpen(!open)}
      >
        <div
          className={`${genericHamburgerLine} ${
            open
              ? "translate-y-3 rotate-45 opacity-100 group-hover:opacity-100"
              : "opacity-100 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            open ? "opacity-0" : "opacity-100 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            open
              ? "-translate-y-3 -rotate-45 opacity-100 group-hover:opacity-100"
              : "opacity-100 group-hover:opacity-100"
          }`}
        />
      </button>

      <div className={open ? "" : "hidden"}>
        <div className="absolute left-1/2 z-[9999] mt-[1rem] grid h-auto w-11/12 -translate-x-1/2 justify-center justify-items-center gap-5 rounded-xl bg-[#ff0475] py-10 text-center font-[500]">
          <Link
            className="font-inter text-sm"
            onClick={() => setOpen(!open)}
            href="/"
          >
            Home
          </Link>

          <Link
            className="font-inter text-sm"
            onClick={() => setOpen(!open)}
            href="/applyforloan"
          >
            Apply for a loan
          </Link>

          <Link
            className="font-inter text-sm"
            onClick={() => setOpen(!open)}
            href="/"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
