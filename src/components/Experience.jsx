import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  const isCurrent = experience.date.toLowerCase().includes("present");
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        borderTop: `3px solid ${experience.type === "work" ? "#915eff" : "#00cea8"}`,
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
    >
      <div>
        <div className="flex items-center gap-3 flex-wrap">
          <h3 className='text-white text-[22px] font-bold'>{experience.title}</h3>
          {isCurrent && (
            <span className="px-2 py-0.5 bg-[#915eff22] border border-[#915eff] text-[#915eff] rounded-full text-[11px] font-semibold">
              Current
            </span>
          )}
        </div>
        <p
          className='text-secondary text-[16px] font-semibold mt-1'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider leading-relaxed'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const SectionDivider = ({ label, color }) => (
  <motion.div
    variants={fadeIn("", "", 0.1, 0.8)}
    className="flex items-center gap-4 my-8"
  >
    <div className="flex-1 h-px opacity-30" style={{ backgroundColor: color }} />
    <span
      className="px-4 py-1.5 rounded-full text-[13px] font-bold tracking-widest uppercase border"
      style={{ color, borderColor: color, backgroundColor: `${color}15` }}
    >
      {label}
    </span>
    <div className="flex-1 h-px opacity-30" style={{ backgroundColor: color }} />
  </motion.div>
);

const Experience = () => {
  const workExp = experiences.filter((e) => e.type === "work");
  const educationExp = experiences.filter((e) => e.type === "education");

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Experience & Education.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <SectionDivider label="Work Experience" color="#915eff" />
        <VerticalTimeline>
          {workExp.map((experience, index) => (
            <ExperienceCard key={`work-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>

        <SectionDivider label="Education" color="#00cea8" />
        <VerticalTimeline>
          {educationExp.map((experience, index) => (
            <ExperienceCard key={`edu-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
