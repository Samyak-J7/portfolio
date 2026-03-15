import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { skills } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const SkillCategory = ({ category, items, color, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.6)}
      className="bg-[#1d1836] rounded-2xl p-6 flex-1 min-w-[280px]"
    >
      <h3
        className="text-[18px] font-bold mb-4"
        style={{ color }}
      >
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full text-[13px] font-medium text-white border transition-all duration-200 hover:scale-105 cursor-default"
            style={{
              borderColor: color,
              backgroundColor: `${color}18`,
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I work with</p>
        <h2 className={styles.sectionHeadText}>Technical Skills.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        A broad, full-stack toolkit built through real-world projects and production-grade systems at DZYLO.
      </motion.p>

      <div className="mt-12 flex flex-wrap gap-6">
        {skills.map((skillGroup, index) => (
          <SkillCategory
            key={skillGroup.category}
            index={index}
            {...skillGroup}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
