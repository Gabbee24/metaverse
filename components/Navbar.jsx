'use client';
import {motion} from 'framer-motion';
import styles from '../styles';
import { navVariants } from '@/utils/motion';
import Image from 'next/image';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial='hidden'
    whileInView={'show'}
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className='absolute w-[50%] inset-0 gradient-01' />
    <div className={`${styles.innerWidth} mx-auto flex w-3/4 justify-between gap-8`}>
      <Image 
        src='../search.svg'
        alt='search'
        className='w-[24px] h-[24px] object-contain'
        width={100}
        height={100}
      />
      <div className='text-center'>
      <p className='font-bold text-white text-[14px] leading-[40px]' >I'm</p>
      <h2 className='font-extrabold text-white text-[24px] leading-[30px]' >ATUNWA GABRIEL</h2>
      </div>
      <Image
        src='../menu.svg'
        alt='menu'
        className='w-[24px] h-[24px] object-contain'
        width={100}
        height={100}
      />
    </div>
  </motion.nav>
);

export default Navbar;
