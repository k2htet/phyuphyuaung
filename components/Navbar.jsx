"use client";
import { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="relative bg-primary">
      <nav className="page-container flex justify-between items-center ">
        <div className=" py-3 sm:py-3 md:py-4 lg:py-5 xl:py-6 border-l-4 border-black">
          <Link
            href="/"
            className="text-xl md:text-2xl lg:text-3xl font-bold underline px-4"
          >
            Phyu Phyu Aung
          </Link>
        </div>
        <div className="hidden lg:flex lg:justify-between lg:items-center lg:py-6 lg:space-x-10 lg:text-xl lg:border-black lg:border-b-4">
          <Link href="/about">About</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div
          className="shadow-xl border-2 border-black p-2 rounded-md bg-white lg:hidden"
          onClick={() => setActive((prev) => !prev)}
        >
          <GiHamburgerMenu size={20} />
        </div>

        <div
          className={`flex-center space-x-3 w-[50%] min-h-screen bg-primary border-l-4 border-black fixed top-0 ${
            active ? "right-0" : "right-[-100%]"
          }  duration-500`}
        >
          <div
            className="shadow-xl p-1 border-2 border-black rounded-md bg-white inline-block absolute top-2 right-3"
            onClick={() => setActive((prev) => !prev)}
          >
            <AiFillCloseCircle size={30} />
          </div>

          <div className="flex flex-col gap-5 text-2xl">
            <Link href="/about" onClick={() => setActive((prev) => !prev)}>
              About
            </Link>
            <Link href="/portfolio" onClick={() => setActive((prev) => !prev)}>
              Portfolio
            </Link>
            <Link href="/skills" onClick={() => setActive((prev) => !prev)}>
              Skills
            </Link>
            <Link href="/contact" onClick={() => setActive((prev) => !prev)}>
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
