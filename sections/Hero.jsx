'use client';
import {motion} from 'framer-motion';

import styles from '../styles';
import {slideIn, staggerContainer,planetVariants, textVariant} from '../utils/motion';

const Hero = () => (
  <section>
    <motion.div 
      variants={staggerContainer} 
      initial="hidden" 
      whileInView="show" 
      viewport={{once:false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className='flex justify-center items-center flex-col relative z-10'>
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            frontend
          </motion.h1>
          <motion.div
          variants={textVariant(1.2)} className="flex flex-row justify-center items-center"
          >
            <h1 className={styles.heroHeading}/>
            <h1 className={styles.heroDText} />
            <h1 className={styles.heroHeading}>eveloper</h1>
          </motion.div>
        </div>
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="relative w-full md:mt-[20px] -mt-[12px]"
        >
          <div className="absolute w-full h-[35rem] hero-gradient rounded-t-[140px] z-[0] -top-[80px]" />
          
          
          {/* <a href="#explore">
            <div className='w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10'>
            <img 
            src="/bobo.jpg"
            alt="stamp"
            className="sm:w-[155px]  rounded-t-[100px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
            </div>
          </a> */}


        </motion.div>
          <motion.div
            variants={planetVariants('left')}
            className={`flex-1 ${styles.flexCenter}`}
          >
  
            <img 
              src="/bobo.jpg"
              alt="cover"
              className='w-1/2 items-center sm:h-[500px] h-[350px] object rounded-t-[140px] z-10 relative'
              />
            </motion.div>


          <div className=' hidden sm:flex w-full flex mx-auto text-purple-600 font-bold sm:-mt-[70px] gap-1 -mt-[50px] pr-[40px] relative z-10'>
            <span className='hero-text-gradient' >React ➋</span>
            <span>React Native ➋</span>
            <span>TypeScript ➋</span>
            <span>WordPress </span>
          </div>

          <p>download cv</p>
      </motion.div>
      
  </section>
);

export default Hero;