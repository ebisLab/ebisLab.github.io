import React from 'react'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import { motion, useTransform, useViewportScroll } from "framer-motion"
import Home from './Home';

const transition={duration: .6, ease: [.43, .13, .23, .96]}
const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 3.0
      }
    }
  };
  
  const boxitem = {
    hidden: {width:"100%" },
    visible: {
      marginTop: 0,
     width:"0"
    }
  };
  const boxitem2 = {
    hidden: {opacity:0, marginTop: "-50px",},
    visible: {
      marginTop: "0px",
      opacity:1,
      transition: {
        delay: 2.5,
        // when: "beforeChildren",
        // staggerChildren: 3.0
      }
    }
  };


export default function Test() {
    const{scrollXProgress}=useViewportScroll()
    const scale= useTransform(scrollXProgress, [0,1], [1,1.15]) //between 0 and 1 -> start and end

    return (
        <div>
                <motion.div 
                        variants={boxitem2}
                        transition={transition}
                        initial="hidden"
                        animate="visible"
                style={{
      position: "absolute",  width: "100%", zIndex: 1, padding: "20px"}}>
      <Link to="/home" style={{padding:"10px", color:"peachpuff"}}>Home</Link>
      <Link to="/about" style={{padding:"10px", color:"peachpuff"}}>About</Link>
    </motion.div>

            <div style={{display: "inline-flex", height:"100vh", width:"100%"}}>

                {/* overlayhere */}

            <div style={{width:"100%", display:"inline-flex", position:"relative"}}>
            <div style={{width: "100%", background:"#131212", position:"absolute", zIndex:-1, top:0, left:0, right:0, bottom:0}}></div>

                <motion.div
        variants={boxitem}
        transition={transition}
        initial="hidden"
        animate="visible"
                style={{width: "100%", background:"peachpuff", position:"absolute",  top:0, left:0, right:0, bottom:0
                }}></motion.div>
                
                
                </div>
                {/* endoverlay */}



                <div style={{background: "#131212", width:"100%", color:"peachpuff"}}>
                    <motion.div   
                    initial={{fontSize:"1em"}}
                    style={{ top:"44.3%", position:"relative"}}
                    animate={{ fontSize:"3em", transform: "translate(-50%, -125%)", transition:{delay:.5, ...transition}}}
                    >
                    <h1>
                        <div>E.B.'s Lab</div>
                         
                        </h1>
                    </motion.div>
                </div>

            </div>
            <Home/>


            </div>

    )
}
