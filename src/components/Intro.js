import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import { motion } from "framer-motion"

const transition={duration: .6, ease: [.43, .13, .23, .96]}
export default function Intro() {
    return (
        <div>
            <div style={{display: "inline-flex", height:"100vh", width:"100%"}}>
                <div style={{background: "peachpuff", width:"100%"}}>
                <div style={{position:"relative"}}>
                        <h1 className="placement">
                        <motion.span exit={{opacity: 0}}>Go to 
                        <a href="http://www.eunicebaiden.com">E.B.'s Folio</a>
                        </motion.span>
                        </h1>
                    </div>
                    
                </div>
                <div style={{background: "#131212", width:"100%", position:"relative", color:"peachpuff"}}>
                    <Link to="/home">
                    <div
                     className="header" >
                        <motion.div exit={{opacity:0}} transition={transition}>Continue to</motion.div>
                        E.B.'s Lab
                    </div>
                    </Link>
                    
                </div>
            </div>
            
        </div>
    )
}
