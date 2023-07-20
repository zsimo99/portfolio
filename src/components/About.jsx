import { Tilt } from "react-tilt";
import {motion} from "framer-motion";

import {styles} from "../styles";
import {services} from "../constants";
import {fadeIn,textVariant} from "../utils/motions"
import {SectionWrapper} from "./hoc"

const ServiceCard=({index,title,icon})=>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right","spring",0.5 * index,0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options={{max:45,sale:1,speed:450}} className="bg-tertiary rounded-[20px] p-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt="service" className="w-16 h-16 object-contain" />
          <h3 className="text-center text-white text-[20px] font-bold">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Intoduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]" variants={fadeIn("","",0.1,1)}>
      As a passionate software developer, my expertise lies in TypeScript,
       with a strong command over popular frameworks like React, Node.js, 
       and Express. I pride myself on being a quick learner and thrive in collaborating
        with clients to deliver exceptional results. Let's work together and create something 
        amazing!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service,index)=>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about")