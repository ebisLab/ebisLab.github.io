import React from 'react'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import { motion } from "framer-motion"

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
    hidden: { marginTop: 20, width:"100%" },
    visible: {
      marginTop: 0,
    //   opacity:0,
    //   background:"red",
     width:"0"
    }
  };


export default function Test() {
    return (
        <div>
            <div style={{display: "inline-flex", height:"100vh", width:"100%"}}>

                {/* overlayhere */}

            <div style={{width:"100%", display:"inline-flex", position:"relative"}}>
            <div style={{width: "100%", background:"gold", position:"absolute", zIndex:-1, top:0, left:0, right:0, bottom:0}}></div>

                <motion.div
        variants={boxitem}
        transition={transition}
        initial="hidden"
        animate="visible"
                style={{width: "100%", background:"pink", position:"absolute", zIndex: -1, top:0, left:0, right:0, bottom:0
                }}></motion.div>
                
                
                </div>
                {/* endoverlay */}



                <div style={{background: "gold", width:"100%"}}>
                    <div   style={{
                            top:"44.3%",
                            position:"relative"
                            }}>
                    <h1 
                    // className="placement"
                    >
                        {/* <motion.div exit={{opacity:0}} transition={transition}>Continue to</motion.div> */}
                        {/* <div style={{top:"unset", left: "420px", transform: "translate(591px, 337px)", position:"fixed"}}>E.B.'s lab</div> */}
                        {/* <div style={{top:"unset", left: "414px", transform: "translate(41.7vw, 337px)", position:"fixed"}}>E.B.'s lab</div> */}
                        <div 
                        // style={{
                        //     top:"47.2%", 
                        //     left: "70.1%", 
                        //     position:"absolute"
                        //     }}
                            >E.B.'s Lab</div>
                         
                        </h1>
                    </div>
                    
                </div>
            </div>
            </div>

    )
}
