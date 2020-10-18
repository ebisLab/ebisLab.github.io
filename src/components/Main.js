import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import Navigation from './Navigation';
import Home from './Home';
import Contact from './Contact';
import About from './About';


const transition ={duration: .6, ease:[.6,.01,-.05,.9]}

export default function Main() {
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
            <Route exact path="/about"><About/></Route>
            <Route exact path="/home"><Home/></Route>
            <Route exact path="/contact"><Contact/></Route>
            </Router>

            </div>
            
    )
}
