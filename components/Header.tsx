import React from "react";
import NavBar from "@/components/NavBar";
import Link from "next/link";

const Header = () => {
  return (
    <header className="min-h-[15vh] py-8">
      <NavBar />
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="/">
            My
            <span className="text-gradient font-logo text-2xl md:text-4xl">
              Portfolio
            </span>
          </a>
          <Link
            href="#contacts"
            className="btn btn-sm md:btn-me flex items-center"
          >
            Work with me
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
