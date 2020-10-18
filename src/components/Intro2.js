import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import { motion } from "framer-motion";
import Home from './Home';
import Navigation from './Navigation';


const transition={duration: .6, ease: [.43, .13, .23, .96]}

export default function Intro() {
    return (
        <motion.div 
        exit={{transition:{duration:8.0, background: "orange"}}}
        >
        <motion.div 
        exit={{opacity:1, transition:{delay:2, ...transition}}}
 
        style={{
position: "absolute",  width: "100%", zIndex: 1, padding: "20px 0px", right: 0, opacity:0, color:"peachpuff"}}>
<Navigation />
</motion.div>

    <div style={{display: "inline-flex", height:"100vh", width:"100%"}}>

        {/* overlayhere */}

    <div style={{width:"100%", display:"inline-flex", position:"relative"}}>
    <div style={{width: "100%", background:"#131212", position:"absolute", zIndex:-1, top:0, left:0, right:0, bottom:0}}></div>

        <motion.div
exit={{width:0, transition:{delay:.8, ...transition}}}

        style={{width: "100%", background:"lightgreen", position:"absolute",  top:0, left:0, right:0, bottom:0
        }}>
            
            <div style={{position:"relative"}}>
                        <h1 className="placement">
                        <motion.span exit={{opacity: 0}}>Go to 
                        <a href="http://www.eunicebaiden.com">E.B.'s Folio</a>
                        </motion.span>
                        </h1>
                    </div>
        
        
        
        </motion.div>
        
        
        </div>
        {/* endoverlay */}



        <div style={{background: "#131212", width:"100%", color:"peachpuff"}}>
            <div   
            initial={{fontSize:"1em"}}
            style={{ top:"44.3%", position:"relative"}}
            animate={{ fontSize:"3em", transform: "translate(-50%, -125%)", transition:{delay:.5, ...transition}}}
            >
            <Link to="/home">
                    <div
                     className="header" >
                        <motion.div exit={{opacity:0}} transition={transition}>Continue to</motion.div>
                        <motion.div exit={{
                        marginLeft: "-100%",
                        marginTop: "-10.8%",
                        fontSize: "96px",  //*need to find way to make this percentage
                        transition:{delay:1.2, ...transition}}
                        }>E.B.'s Lab</motion.div>
                    </div>
                    </Link>
            </div>
        </div>

    </div>


    </motion.div>
    )
}
