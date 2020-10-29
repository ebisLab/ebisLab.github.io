import React from 'react';
import { motion } from "framer-motion"


const transition ={duration: .6, ease:[.6,.01,-.05,.9]}
const container = {
    hidden: { marginTop: 100, opacity: 0, transition:{duration: 2} },
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
        key="2"
        exit={{ opacity: 0, marginTop: "500px"}}                
        className="container"
        variants={container}
        transition={transition}
        initial="hidden"
        animate="visible"
        style={{color: "peachpuff", margin: "0px 7%", marginTop: "200px"
        // position:"relative"
        }}>
          <div className="about" 
          style={{
            // background: "dimgray", 
          color:"peachpuff", margin: "0px 7%", position:"relative", 
          // top:"300px"
          }}
          >

            <div style={{color:"peachpuff"}}>
              <p>
                Welcome to E.B.'s Lab where strange experiments are created to soothe the soul.
              </p>
            <p>

                With so many new technologies being developed in the web development world, who wouldn't want to play around with them?</p>
               <p> I've dedicated this space to experiment how users can better interact these features.</p>
                <p> Even though my work is design focused, interacting with different aspects of web development allows me fully express myself. </p> 
                <p>If you'd like to collaborate, or have a project and are looking for contributors, please email me at ebi@ebisLab.com, I'd love to help out.
                </p>
            </div>

            </div>
            
        </motion.div>

            
    )
}
