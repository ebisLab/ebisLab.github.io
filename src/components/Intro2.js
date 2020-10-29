import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import { motion } from "framer-motion";


const transition={duration: .6, ease: [.43, .13, .23, .96]}

export default function Intro() {
    return (
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={transition}
        exit={{ transition:{delay:1.2, ...transition}}}
        >

    <div style={{display: "inline-flex", height:"100vh", width:"100%", position:"absolute", top:0, left:0}}>

        {/* overlayhere */}

    <div style={{width:"100%", display:"inline-flex", position:"relative", 
    background:"#131212"
    }}>
        
            <motion.div
            exit={{width:0, transition:{delay:.8, ...transition}}}
            style={{width: "100%", background:"peachpuff", position:"absolute",  top:0, left:0, right:0, bottom:0}}>
            <div   
            initial={{fontSize:"1em"}}
            style={{ top:"44.3%", position:"relative"}}
            animate={{ fontSize:"3em", transform: "translate(-50%, -125%)", transition:{delay:.5, ...transition}}}
            >
            <a href="http://www.eunicebaiden.com">
                    <div
                     className="header">
                        <motion.div 
                        exit={{opacity: 0}}
                        style={{color:"#131212"}}>Go to <br/>
                            Eunice Baiden
                        </motion.div>
                    </div>
                    </a>
            </div>
        </motion.div>



    {/* <div style={{width: "100%", background:"#131212", position:"absolute", zIndex:-1, top:0, left:0, right:0, bottom:0}}></div>

        <motion.div
exit={{width:0, transition:{delay:.8, ...transition}}}

        style={{width: "100%", background:"peachpuff", position:"absolute",  top:0, left:0, right:0, bottom:0
        }}>
            
            <div style={{position:"relative"}}>
                        <h1 className="placement">
                        <motion.span 
                        style={{top:"44.3%", position:"absolute"}}
                        exit={{opacity: 0, 
                        // transition:{delay:22}
                    }}>Go to <br/>
                        <a href="http://www.eunicebaiden.com">E.B.'s Folio</a>
                        </motion.span>
                        </h1>
                    </div> 
        
        
        
        </motion.div>*/}
        
        
        </div>

        {/* endoverlay */}



        <div style={{background: "#131212", width:"100%", color:"peachpuff", zIndex:1}}>
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
                        marginTop: "-27.3%",
                        fontSize: "96px",  //*need to find way to make this percentage
                        transition:{delay:1.2, ...transition}
                    }
                        }>E.B.'s Lab</motion.div>
                    </div>
                    </Link>
            </div>
        </div>



    </div>


    </motion.div>
    )
}

