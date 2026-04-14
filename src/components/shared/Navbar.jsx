import React from "react";
import NavLinks from "./NavLinks";

const linksData = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/timeline",
    text: "Timeline",
  },
  {
    href: "/stats",
    text: "Stats",
  },
];
const Navbar = () => {
  return (
    <div className="bg-white shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {linksData.map((data, ind) => (
                <NavLinks
                  key={ind}
                  href={data.href}
                  text={data.text}
                ></NavLinks>
              ))}
            </ul>
          </div>
          <a className="text-2xl font-semibold">
            Keen<span className="text-[#244d3f]">Keeper</span>
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="flex justify-center items-center gap-3">
            {linksData.map((data, ind) => (
              <NavLinks key={ind} href={data.href} text={data.text}></NavLinks>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
