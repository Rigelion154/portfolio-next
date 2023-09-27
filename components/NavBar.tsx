"use client";
import React, { useState } from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsBriefcase, BsChatSquare } from "react-icons/bs";
import Link from "next/link";

const links = [
  { name: "home", path: "#home", icon: <BiHomeAlt /> },
  { name: "about", path: "#about", icon: <BiUser /> },
  { name: "works", path: "#works", icon: <BsBriefcase /> },
  { name: "contacts", path: "#contacts", icon: <BsChatSquare /> },
];

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full z-30">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 backdrop-blur-2xl rounded-full max-w-[310px] md:max-w-[360px] mx-auto p-4 flex items-center justify-between text-2xl text-white/50">
          {links.map((link) => (
            <Link
              href={link.path}
              key={link.name}
              onClick={() => setActiveLink(link.name)}
              className={`cursor-pointer p-3 flex items-center justify-center ${
                activeLink === link.name ? "active" : ""
              }`}
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
