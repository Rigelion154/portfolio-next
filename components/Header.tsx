import React from "react";
import NavBar from "@/components/NavBar";

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
          <button className="btn btn-sm md:btn-me">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
