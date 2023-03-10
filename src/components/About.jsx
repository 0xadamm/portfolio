import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsum
        inventore, tenetur accusamus enim vel laudantium recusandae rerum
        fugiat. Libero tenetur culpa harum eos ullam numquam sequi similique
        earum cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dolor cupiditate quos fuga sunt perspiciatis tempore, tenetur quia,
        nulla officiis enim accusantium optio architecto voluptate, quam
        voluptas quae. Fuga, ab saepe!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default About;
