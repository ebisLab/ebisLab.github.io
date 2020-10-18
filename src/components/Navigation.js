import React from 'react';
import { motion, useTransform, useViewportScroll } from "framer-motion";
import {Link} from "react-router-dom";



const transition={duration: .6, ease: [.43, .13, .23, .96]}

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


export default function Navigation() {
    return (
//         <motion.div 
//         variants={boxitem2}
//         transition={transition}
//         initial="hidden"
//         animate="visible"
// style={{
// position: "absolute",  width: "100%", zIndex: 1, padding: "20px"}}>
<>
<Link to="/home" style={{padding:"10px", color:"peachpuff"}}>Home</Link>
<Link to="/about" style={{padding:"10px", color:"peachpuff"}}>About</Link>
<Link to="/contact" style={{padding:"10px", color:"peachpuff"}}>Contact</Link>
</>
// </motion.div>
    )
}
