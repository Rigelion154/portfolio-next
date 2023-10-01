"use client";
import "./progressbar.css";
import { motion } from "framer-motion";
import React from "react";
import Animation from "../../utils/Animation";
const animation = (width: string) => {
  return {
    hidden: {
      width: 0,
    },

    show: {
      width: width,
      transition: {
        delay: 0.3,
      },
    },
  };
};
const ProgressBar = ({
  width,
  name,
  color,
}: {
  width: string;
  name: string;
  color: string;
}) => {
  return (
    <Animation direction={"right"} delay={0.2}>
      <motion.div className="progressbar">
        <span className="progress__text"> {`${name} ${width}`}</span>
        <motion.div
          className="bar"
          style={{ backgroundColor: color }}
          initial="hidden"
          whileInView="show"
          variants={animation(width)}
        ></motion.div>
      </motion.div>
    </Animation>
  );
};

export default ProgressBar;
