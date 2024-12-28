"use client";
import Image from "next/image";
import Button from "./Button";
import { FaFacebookF, FaTwitter, FaInstagram, FaBars, FaPlus, FaMinus } from "react-icons/fa";
import ActiveLink from "./ActiveLink";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav ref={menuRef} className="flex flex-col md:flex-row fixed top-0 left-0 right-0 z-20 bg-black text-base">
      <div className="w-full md:w-1/4 h-[100px] items-center bg-black mx-auto md:m-auto px-4 py-2">
        <Image
          src="/images/Z3_darklogo.jpeg"
          alt="Logo"
          width={150}
          height={100}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-full md:w-3/4 px-5 md:px-10 lg:px-24 flex flex-row justify-evenly md:justify-between gap-2 lg:flex-col ">
        <div className="flex gap-2 justify-end lg:mt-4 my-auto">
          <Button className="bg-black text-yellow hover:text-white border-2 p-1 border-yellow">Book Appointment</Button>
          <Button className="bg-black text-yellow hover:text-white border-2 p-1 border-yellow">Salon Finder</Button>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-700 hover:cursor-pointer my-auto"
          >
            <FaFacebookF size={24} className="hidden sm:block" />
          </a>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-sky-500 hover:cursor-pointer my-auto"
          >
            <FaTwitter size={24} className="hidden sm:block" />
          </a>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-500 hover:cursor-pointer my-auto"
          >
            <FaInstagram size={24} className="hidden sm:block" />
          </a>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="flex justify-end px-4 py-3 lg:hidden my-auto">
          <button onClick={() => setMenuOpen(!menuOpen)} className="hover:text-yellow text-white">
            <FaBars size={24} />
          </button>
        </div>

        {/* Navbar Items */}
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex lg:space-x-14 lg:justify-end lg:items-center text-white mt-2 px-4 lg:px-0 absolute max-[398px]:top-[152px] top-[140px] md:top-[92px] left-0 w-full text-center bg-black lg:relative lg:top-0 lg:left-auto lg:w-auto`}
        >
          <ActiveLink href="/">
            <li className="px-3 py-1">HOME</li>
          </ActiveLink>
          <ActiveLink href="/aboutus">
            <li className="py-1">ABOUT&nbsp;US</li>
          </ActiveLink>

          {/* SERVICES Dropdown */}
          <li className="relative group cursor-pointer px-3 py-1">
            SERVICES
            <ul className="absolute hidden group-hover:flex flex-col bg-black -mx-3 text-white z-10 w-full">
              <ActiveLink href="/services" className="block px-4 py-2">
                <li className="mx-auto">LADIES</li>
              </ActiveLink>
              <ActiveLink href="/services/gents" className="block px-4 py-2">
                <li className="mx-auto">GENTS</li>
              </ActiveLink>
              <ActiveLink href="/services/loyalty-card" className="block px-4 py-2">
                <li className="mx-auto">LOYALTY CARD</li>
              </ActiveLink>
            </ul>
          </li>

          <ActiveLink href="/contact">
            <li className="px-3 py-1">CONTACT</li>
          </ActiveLink>
          <ActiveLink href="/offers">
            <li className="px-3 py-1">OFFERS</li>
          </ActiveLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
