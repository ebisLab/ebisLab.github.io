import React from 'react';
import {Link} from "react-router-dom";
import { motion } from "framer-motion"


const transition ={duration: .6, ease:[.6,.01,-.05,.9]}

export default function About() {
    return (
        <
        // motion.
        div
        // exit={{ 
        //     y: "0%",
        //     opacity: 0
        //   }}   
          
        //   transition={transition}

        >

            {/* MENU COMPONENT  */}
                            <div 
                      
                style={{
      position: "absolute",  width: "100%", zIndex: 1, padding: "20px"}}>
      <Link to="/home" style={{padding:"10px", color:"peachpuff"}}>Home</Link>
      <Link to="/about" style={{padding:"10px", color:"peachpuff"}}>About</Link>
      <Link to="/contact" style={{padding:"10px", color:"peachpuff"}}>Contact</Link>
    </div>

    {/* END MENU COMPONENT */}

    <div style={{display: "inline-flex", height:"100vh", width:"100%"}}>


<div style={{background: "#131212", width:"100%", color:"peachpuff"}}>
                    <div   
                    style={{ top:"22.5%", position:"relative",
                    fontSize:"3em",
                }}
                    >
                    <h1>
                        <div>E.B.'s Lab</div>
                         
                        </h1>
                    </div>
                </div>

            
            </div>

            <div style={{background: "dimgray", color:"peachpuff", margin: "0px 7%", position:"relative", top:"-300px"}}
>
    <motion.div
            exit={{ 
                y: "0%",
                opacity: 0
              }}   
             transition={transition}
     >
                <p>
                With so many new technologies being developed in the web development world, who wouldn't want to play around with them?
                I've dedicated this space as my playground to experiment and see how they pair with the user experience.
                Some projects showcase my art work ranging from sketches, digital illustrations, graphic design projects, others are full on programs I've developed over the years.  
                Each project I showcase is a reminder that no matter how random or inactive it is, it's brought me closer to being a better developer. 
                </p>
            </motion.div>
            </div>


            </
            // motion.
            div>
            
    )
}
