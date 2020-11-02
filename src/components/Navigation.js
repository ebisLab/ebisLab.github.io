// import React from 'react';
// import { motion, useTransform, useViewportScroll } from "framer-motion";
// import {Link, useRouteMatch} from "react-router-dom";



// const transition={duration: .6, ease: [.43, .13, .23, .96]}

// const boxitem2 = {
//     hidden: {opacity:0, marginTop: "-50px",},
//     visible: {
//       marginTop: "0px",
//       opacity:1,
//       transition: {
//         delay: .5,
//       }
//     }
//   };


// export default function Navigation() {
//   const match = useRouteMatch("/")
//   if (match.isExact) return null
//     return (
//       <>
//         <motion.div 
//         variants={boxitem2}
//         transition={transition}
//         initial="hidden"
//         animate="visible"
// style={{
// position: "absolute",  width: "100%", zIndex: 1, padding: "20px"}}>
// <>
// <Link to="/home" style={{padding:"10px", color:"peachpuff"}}>Home</Link>
// <Link to="/about" style={{padding:"10px", color:"peachpuff"}}>About</Link>
// <Link to="/contact" style={{padding:"10px", color:"peachpuff"}}>Contact</Link>
// </>
//  </motion.div>
//  <div style={{background: "#131212", width:"100%", color:"peachpuff", position:"absolute", top:"11%",}}>
//                     <div   
//                     style={{  position:"relative",
//                     fontSize:"3em",
//                 }}
//                     >
//                     <h1>
//                         <div>E.B.'s Lab</div>
                         
//                         </h1>
//                     </div>
//                 </div>
//  </>
//     )
// }


import React from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const transition = { duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9] };
const transition2 = { delay: 2, ease: [0.6, 0.01, -0.05, 0.9] };
const container = {
  hidden: { marginTop: 50, opacity: 0 },
  visible: {
    marginTop: 0,
    opacity: 1,
    scale: 1,
    transition: {
      delay: 2,
      when: "beforeChildren",
      staggerChildren: 3.0
    }
  }
};

const trans={
  opacity:1,
  ...transition,
}
// const col={
//   match.isExact && {background:"red"
// }}

const Navigation = () => {
  const match = useRouteMatch("/");
  // if (match.isExact) return null;
  const history = useHistory()


  const styl={opacity:1}
  

  return (
    <>
    <motion.div
      key="1"
      exit={{ opacity: 0 }}
      className="container"
      // transition={transition}
      initial={{
        marginTop: 45, 
        opacity: 0, 
        // position:"absolute",
        background: "none", 
        width:"100%", 
      }}
      style={{color:"peachpuff"}}
      animate={!match.isExact && styl}
    >
      <motion.div 
      className="cols"
      initial={{opacity:0, marginTop:-500}}
      animate={{opacity:1, marginTop: 0, transition: {delay:.5}}}
      style={{position:"absolute",width:"100%"}}>

        <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      
      {/* <Link to="/tester">Tester</Link> */}


</motion.div>
      
<div style={{background: "#131212", width:"100%", color:"peachpuff"}}>
                    <div   
                    style={{ 
                      top:"50px", 
                    position:"relative", 
                    width: "100%", 
                    fontSize:"3em",
                }}
                    >
                    <h1>
                        <div>E.B.'s Lab</div>
                         
                        </h1>
                    </div>
                </div>
      
      
    </motion.div>
    
    </>
  );
};

export default Navigation;
