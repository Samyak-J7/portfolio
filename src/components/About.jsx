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
      With expertise spanning frontend technologies like TypeScript, React.js, and Next.js, as well as backend proficiency in Python, Java, and Node.js, I bring a comprehensive skill set to the table. Additionally, I am well-versed in databases such as MongoDB, MySQL, and Firebase, and experienced in frameworks like Express.js and Django. My capabilities extend to authentication methods, API integration, and cloud platforms including AWS, Microsoft Azure, and Google Cloud, making me a versatile developer poised to deliver efficient and scalable solutions.
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