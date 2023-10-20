import React from "react";
import SectionWrapper from "../hoc";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const TechCard = ({ title, index, icon }) => {
  return (
    <div className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full rounded-[20px] shadow-card"
      >
        <div
          className="bg-tertiary rounded-[20px] min-h-[50px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-12 h-12 object-contain m-5" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  );
};

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech, index) => (
        <div className="w-28 h-28" key={tech.name}>
          <TechCard
            key={tech.name}
            icon={tech.icon}
            index={index}
            {...tech}
        />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
