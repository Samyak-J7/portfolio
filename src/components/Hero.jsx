import {motion} from 'framer-motion';
import {styles} from '../styles.js'
import { ComputersCanvas } from './canvas';
import { Typewriter } from 'react-simple-typewriter'
import Preloader from './Preloader';
const Hero = () => {
  return (
    <>
      <Preloader/>
      <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex items-start gap-5 `}>
          <div className='flex flex-col justify-center items-center mt-5'>
              <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
              <div className='w-1 sm:h-80 h-40 violet-gradient'/>
          </div>
          <div >
            <h1 className={`${styles.heroHeadText} text-white`}>Hi, I am <span className='text-[#915eff]'> Samyak</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}> I am  a 
            <span className='text-[#915eff] font-extrabold'>
            <Typewriter
              words={[
                " Frontend Developer",
                " Backend Developer",
                " App Developer",
                " Full Stack Developer"
              ]}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              loop={true}
              deleteSpeed={5}
              delaySpeed={2000}
            /></span>
            <br/>
            <span className='text-sm'>You can play with the 3d models for a bit &#128521;.</span>
            </p>
          </div>
      </div>
           
     <ComputersCanvas/>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
      <a href="#about"> 
      <div className='w-[35-px] h-[64px] rounded-3xl hover:border-white border-4 border-secondary flex justify-center items-start p-2'>
        <motion.div
          animate={{
            y:[0,24,0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop'
          }}
          className="w-3 h-3 rounded-full bg-secondary mb-1"
        />
      </div></a>

      </div>
    </section>
    </>
  )
}

export default Hero