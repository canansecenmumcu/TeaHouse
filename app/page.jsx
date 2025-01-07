"use client"
import { Yellowtail } from 'next/font/google';
import { Herr_Von_Muellerhoff } from 'next/font/google';
import { HeartIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const yellowtail = Yellowtail({
  weight: '400', // Yellowtail için yalnızca '400' ağırlığı mevcut
  subsets: ['latin'], // Desteklenen diller
  display: 'swap', // Performans için `swap` kullanımı
});
const herrVonMuellerhoff = Herr_Von_Muellerhoff({
  subsets: ['latin'],
  weight: '400',
});


export default function Home() {
  const text = "Welcome Tea House"
  return (
    <div   >

      <div className="flex flex-col items-center cursor-default p-14 " >
        <div className='hidden sm:flex flex-row items-center my-[60px] text-clip '>
          {text.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 3,
                /* repeat: Infinity, */
                delay: index * 0.1,
              }}
              className={`text-7xl md:text-9xl text-brown opacity-80 mx-0.5 ${herrVonMuellerhoff.className}`} >{char}</motion.span>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 3,
              delay: 2,
            }}
            className=''
          >
            
          </motion.div>
        </div>
        <div className='flex flex-row items-center my-[60px] sm:hidden '>
          {text.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 3,
                /* repeat: Infinity, */
                delay: index * 0.1,
              }}
              className={`text-7xl md:text-9xl text-brown opacity-80 mx-0.5 ${herrVonMuellerhoff.className}`} >{char}</motion.span>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 2,
              delay: 1,
            }}
            className=''
          >
          </motion.div>
        </div>
        <div className='fixed bottom-[400px] md:bottom-[350px] ' >
          <button className="hover-upward-effect custom-rounded-all opacity-80  ">Lets Start</button>
        </div>
      </div>
    </div>
  );
}
