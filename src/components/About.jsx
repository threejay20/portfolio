import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[200px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full bg-gradient-to-t from-purple-500 to-pink-300 p-[1px] rounded-[20px] shadow-card'>
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
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
          Overwiew
        </p>
        <h2 className={styles.sectionHeadText}>
          Introduction
        </h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I am a young Brazilian programmer and artist who has dedicated her entire life to drawing and painting. As an adult I became interested in body art beyond my own body and opened my first Tattoo Studio, which lasted until I decided to pursue my childhood dream of Developing Games.
        <p>&emsp;</p>
        When I moved to Barcelona, I got the opportunity to study in an intensive Full Stack Bootcamp, where I got most of my programming knowledge at the web level at first.
        In the meantime, I completed a series of Google courses, with the intention of understanding a little more about Information Technology (IT).
        Not satisfied enough, I finished another Bootcamp, this time specializing in Java Backend.
        <p>&emsp;</p>
        Apart from these official studies, I cannot fail to mention all the learning I have gained as a self-taught student. Not only in relation to design, programming and technology - that I always try to be studying because it is my life goal to always be acquiring new knowledge - but also in relation to languages, which I am on the way to learn my 4th language self-taught.
        <p>&emsp;</p>
        I am trying to get my first job in the field. I would be happy to have an opportunity to show my full potential &lt;3
      </motion.p >

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(About, "about")