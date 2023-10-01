"use client";
import React from "react";
import ProgressBar from "./progressBar/ProgressBar";
import Animation from "../utils/Animation";

const Skills = () => {
  return (
    <div id="about" className="min-h-[100vh] flex items-center justify-center">
      <div className="container mx-auto flex flex-col gap-y-8 lg:gap-y-14">
        <Animation direction={"down"} delay={0.3}>
          <h2 className="h2  text-accent text-center">My Skills</h2>
        </Animation>
        <div className="flex flex-col gap-y-4 items-center justify-around lg:flex-row ">
          <div className="flex flex-col items-center justify-center gap-y-4 w-full lg:gap-y-14">
            <ProgressBar width={"95%"} name="HTML" color="#03e23c" />
            <ProgressBar width={"95%"} name="CSS" color="#06ccff" />
            <ProgressBar width={"85%"} name="JavaScript" color="#fabd00" />
            <ProgressBar width={"60%"} name="TypeScript" color="#0004ff" />
          </div>
          <div className="flex flex-col items-center justify-center gap-y-4 w-full lg:gap-y-14">
            <ProgressBar
              width={"15%"}
              name="Node JS"
              color="rgba(0,255,0,0.6)"
            />
            <ProgressBar width={"65%"} name="Git" color="#ff00be" />
            <ProgressBar width={"50%"} name="React" color="#0082ff" />
            <ProgressBar width={"75%"} name="Webpack" color="#8c00ff" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
