import React from "react";
import Image from "next/image";
import { GiThunderBlade } from "react-icons/gi";
import { LiaLinkedin } from "react-icons/lia";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="bg-[#244D3F] pt-20 pb-8 lg:px-64">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="text-center space-y-4">
          <p className="font-bold text-4xl text-white">KeenKeeper</p>
          <p className="text-white">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>

        <div className="mb-10 mt-6 space-y-4">
          <h3 className="text-white text-center font-semibold mb-4 text-lg">
            Social Links
          </h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="https://github.com/mdsalahuddin96"
              target="_blank"
              className="p-2 bg-white text-black rounded-full hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              <GiThunderBlade size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-white text-black rounded-full hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              <LiaLinkedin size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-white text-black rounded-full hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-white text-black rounded-full hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              <BsTwitterX size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1a8862] pt-8 text-xs text-white flex flex-col md:flex-row items-center justify-between">
        <p>&copy; {new Date().getFullYear()} KeenKeeper. All rights reserved.</p>
        <div className="flex gap-4 items-center">
            <span>Privacy</span>
            <span>Terms of Service</span>
            <span>Cookies</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
