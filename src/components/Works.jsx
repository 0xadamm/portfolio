import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import SectionWrapper from "../hoc";

import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          The projects I have worked on are a true testament to my skills and
          experience. These real-world examples showcase my ability to solve
          complex problems, work with diverse technologies, and effectively
          manage projects.
        </motion.p>
        <div className="mt-20 flex flex-wrap gap-7"></div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
