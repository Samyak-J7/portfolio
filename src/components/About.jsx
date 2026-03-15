import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles.js'
import { services } from '../constants/index.js'
import {fadeIn , textVariant} from '../utils/motion.js'
import { SectionWrapper } from '../hoc/index.js'
const ServiceCard = ({index, title, icon}) => {
  return (  
    <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
  ) 
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          OverView.
        </h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
      I am a Software Developer Engineer at <span className="text-[#915eff] font-semibold">DZYLO</span>, where I was promoted to <span className="text-[#915eff] font-semibold">Team Lead</span> — managing a 5-member team, conducting daily scrums, and guiding system architecture. I build full-stack systems using <span className="text-white">AngularJS, React, Node.js, Ktor</span>, and cloud services like <span className="text-white">AWS (Lambda, RDS, S3, EventBridge)</span>. I have hands-on experience designing inventory systems, payment integrations (PhonePe, Stripe), AI-powered apps, and production database migrations — always aiming for scalable and efficient solutions.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
       <ServiceCard key={service.title} index={index}{...service} />
      ))}

      </div>
    </>
  )
}

export default SectionWrapper(About,"about")