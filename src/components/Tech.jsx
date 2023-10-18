import React from "react";
import SectionWrapper from "../hoc";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { motion } from "framer-motion";

const ServiceCard = ({ title, index, icon }) => {
  return (
    <div className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          option={{
            max: 45,
            scalse: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
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
      {technologies.map((tech) => (
        <div className="w-28 h-28" key={tech.name}>
          <ServiceCard
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
