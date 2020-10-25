import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch, useLocation} from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import Navigation from './Navigation';
import Home from './Home';
import Contact from './Contact';
import About from './About';



const transition ={duration: .6, ease:[.6,.01,-.05,.9]}

export default function Main() {
   const location= useLocation()
    return (
        <div>
            <Router>

            {/* MENU COMPONENT  */}
                            <div 
                      
                style={{
      position: "absolute",  width: "100%", zIndex: 1, padding: "20px 0"}}>
          <Navigation/>
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
            <AnimatePresence exitBeforeEnter>
            {/* <Switch location={location} key={location.pathname}> */}
            <Switch>
            <Route path="/about"><About/></Route>
            <Route  path="/contact"><Contact/></Route>
            <Route exact path="/home"><Home/></Route>
            </Switch>
            </AnimatePresence>

            
            </Router>

            </div>
            
    )
}

// import React from "react";
// import ReactDOM from "react-dom";
// import { Router, Link, Location } from "@reach/router";

// import { AnimatePresence } from "framer-motion";

// import Home from "./Home";
// import About from "./About";

// const FramerRouter = ({ children }) => (
//   <Location>
//     {({ location }) => (
//       <div style={{ position: "relative" }}>
//         <AnimatePresence>
//           <Router key={location.key} location={location}>
//             {children}
//           </Router>
//         </AnimatePresence>
//       </div>
//     )}
//   </Location>
// );

// const Main = () => (
//   <div>
//     <FramerRouter>
//       <Home path="/" />
//       <About path="/about" />
//     </FramerRouter>
//   </div>
// );

// export default Main
