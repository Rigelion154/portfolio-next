"use client";
import Image from "next/image";
import Link from "next/link";
import Animation from "@/utils/Animation";

const Works = () => {
  return (
    <section id="works" className={"section overflow-hidden"}>
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <Animation direction={"right"} delay={0.3}>
            <div className="flex-1 flex flex-col gap-y-10 mb-10 lg:mb-0">
              <div>
                <h2 className="h2 leading-tight text-accent">
                  My latest <br /> Work.
                </h2>
                <p className="max-w-sm mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias aut consectetur consequuntur culpa, delectus dolor
                  doloribus eius enim.
                </p>
                <button className="btn btn-sm md:btn-me">
                  View all projects
                </button>
              </div>
              <Link
                href="https://rigelion154.github.io/Momentum/src/"
                target="_blank"
              >
                <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                  <div className="group-hover:bg-black/70 w-full h-full absolute transition-all duration-300 z-10"></div>
                  <Image
                    className="group-hover:scale-125 transition-all duration-500"
                    src="/Momentum.png"
                    alt="Momentum"
                    width={1200}
                    height={760}
                  />
                  <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-20">
                    <span className="text-gradient">UI/UX Design</span>
                  </div>
                  <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-20">
                    <span className="text-3xl">Momentum</span>
                  </div>
                </div>
              </Link>
            </div>
          </Animation>
          <Animation direction={"left"} delay={0.3}>
            <div className="flex-1 flex flex-col gap-y-10">
              <Link
                href="https://rolling-scopes-school.github.io/rigelion154-JSFE2023Q1/rss-css-selectors/"
                target="_blank"
              >
                <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                  <div className="group-hover:bg-black/70 w-full h-full absolute transition-all duration-300 z-10"></div>
                  <Image
                    className="group-hover:scale-125 transition-all duration-500"
                    src="/CssSelectors.png"
                    alt="CSS Selectors"
                    width={1200}
                    height={760}
                  />
                  <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-20">
                    <span className="text-gradient">CSS game</span>
                  </div>
                  <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-20">
                    <span className="text-3xl">CSS Selectors</span>
                  </div>
                </div>
              </Link>
              <Link
                href="https://rolling-scopes-school.github.io/rigelion154-JSFE2023Q1/shelter/src/pages/main/"
                target="_blank"
              >
                <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                  <div className="group-hover:bg-black/70 w-full h-full absolute transition-all duration-300 z-10"></div>
                  <Image
                    className="group-hover:scale-125 transition-all duration-500"
                    src="/Shelter.png"
                    alt="Shelter"
                    width={1200}
                    height={760}
                  />
                  <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-20">
                    <span className="text-gradient">Landing page</span>
                  </div>
                  <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-20">
                    <span className="text-3xl">Shelter</span>
                  </div>
                </div>
              </Link>
            </div>
          </Animation>
        </div>
      </div>
    </section>
  );
};

export default Works;
