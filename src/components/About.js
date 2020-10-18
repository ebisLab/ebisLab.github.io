import React from 'react';
import {Link} from "react-router-dom";
import { motion } from "framer-motion"
import Navigation from './Navigation';


const transition ={duration: .6, ease:[.6,.01,-.05,.9]}
const container = {
    hidden: { marginTop: 50, opacity: 0 },
    visible: {
        marginTop: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: .6,
        when: "beforeChildren",
        staggerChildren: 3.0
      }
    }
  };
export default function About() {
    return (

        <motion.div 
        exit={{ 
            y: "0%",
            opacity: 0
          }}                
        className="container"
        variants={container}
        transition={transition}
        initial="hidden"
        animate="visible"
        style={{color: "peachpuff", margin: "0px 7%", position:"relative"}}>
<div style={{background: "dimgray", color:"peachpuff", margin: "0px 7%", position:"relative", top:"-300px"}}
>

            <div style={{color:"peachpuff"}}>
            <p>
                With so many new technologies being developed in the web development world, who wouldn't want to play around with them?
                I've dedicated this space as my playground to experiment and see how they pair with the user experience.
                Some projects showcase my art work ranging from sketches, digital illustrations, graphic design projects; Others are full-on apps I've developed over the years.  
                Each project I showcase is a reminder that no matter how random or inactive it is, it's brought me closer to being a better developer. 
                </p>
            </div>

            </div>
            
        </motion.div>

            
    )
}
