import Image from "next/image";
import Navbar from "./Navbar";
import { IconContext } from "react-icons";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="text-black pb-10">
      <div className="w-[240px] h-[160px] items-center mx-auto">
        <Image
          src="/images/Z3_Studio_Logo.jpeg"
          alt={`Image`}
          width={240}
          height={160}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="px-10 md:px-20 lg:px-32 py-2 items-center mx-auto bg-yellow ">
        <h1 className="text-center">
          The Exclusive Unisex Salon in your town acquainted with world-class tools and professionals for stunning looks
          and absolute luxury.
        </h1>
        <div className="flex gap-2 justify-center mt-2">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <div className="w-12 h-12 rounded-full border-black border flex items-center justify-center hover:text-white hover:bg-blue-800">
              <FaFacebookF size={24} />
            </div>
          </a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <div className="w-12 h-12 rounded-full border-black border flex items-center justify-center hover:text-white hover:bg-sky-500">
              <FaTwitter size={24} />
            </div>
          </a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <div className="w-12 h-12 rounded-full border-black border flex items-center justify-center hover:text-white hover:bg-red-500">
              <FaInstagram size={24} />
            </div>
          </a>
        </div>
        {/* <Navbar /> */}
      </div>
      <div className="px-10 md:px-20 lg:px-32 py-6 bg-white flex justify-between flex-col md:flex-row">
        <span>
          &copy; 2024, Z<sup>3</sup> Studio. All rights reserved.
        </span>
        <span>Disclaimer | Privacy Policy</span>
      </div>
    </div>
  );
}
