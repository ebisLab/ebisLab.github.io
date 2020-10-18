import React from 'react'
import { motion } from "framer-motion"
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"

const transition ={duration: .6, ease:[.6,.01,-.05,.9]}

const container = {
    hidden: { marginTop: 50, opacity: 0 },
    visible: {
        marginTop: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1.5,
        when: "beforeChildren",
        staggerChildren: 3.0
      }
    }
  };
  
  const boxitem = {
    hidden: { marginTop: 20, opacity: 0 },
    visible: {
      marginTop: 0,
      opacity: 1,
      transition: {
        delay: 1.5,
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  };

    
  const boxitem2 = {
    hidden: { marginTop: 20, opacity: 0 },
    visible: {
      marginTop: 0,
      opacity: 1,
      transition: {
        // delay: 0.1,
        staggerChildren: 0.07,
        delayChildren: 0.5,
        staggerDirection: -1
      }
    }
  };

export default function Contact() {


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

            <div style={{color:"peachpuff"}}>PUT YOUR CONTENT HERE</div>

            </div>
            
        </motion.div>

    )
}
