import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import { motion } from "framer-motion"

const transition={duration: .6, ease: [.43, .13, .23, .96]}
export default function Intro() {
    return (
        <div>
            <div style={{display: "inline-flex", height:"100vh", width:"100%"}}>
                <div style={{background: "pink", width:"100%"}}>
                <div style={{position:"relative"}}>
                        <h1 className="placement">
                        <motion.span exit={{opacity: 0}}>Go to </motion.span>
                        <a href="http://www.eunicebaiden.com">E.B.'s Folio</a>
                        </h1>
                    </div>
                    
                </div>
                <div style={{background: "gold", width:"100%"}}>
                    <div style={{position:"relative"}}>
                        <h1 className="placement">
                        Continue to
                        E.B.'s lab
                        {/* <motion.span exit={{opacity: 0}}> */}
                            <motion.img transition={transition} whileHover={{scale:1.1}} style={{height:"250px"}} exit={{opacity: 0}}  alt="something" src="https://i.imgur.com/PXeqdsH.jpg"/>
                        {/* </motion.span> */}
                        <motion.div exit={{opacity:0}} transition={transition}>Some words here boah bio</motion.div>
                         
                        </h1>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}
