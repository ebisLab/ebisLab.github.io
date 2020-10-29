import React from 'react';
import {BrowserRouter as Router, HashRouter, Route, Link, Switch, useLocation, useRouteMatch} from "react-router-dom"
import {AnimatePresence, motion} from 'framer-motion'
import './App.css';
import Intro from './components/Intro';
import Intro2 from './components/Intro2';
import About from './components/About';
import Contact from './components/Contact';
import Main from './components/Main';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Tester from './components/Tester';

const transition ={duration: .6, ease:[.6,.01,-.05,.9]}

function App() {
  const location=useLocation()

  return (

    <div className="App">


  <Navigation />

        <AnimatePresence exitBeforeEnter>
      
        {/* <Navigation />   */}
          <Switch location={location} key={location.pathname}>
             
            <Route exact path="/" component={Intro2} />
            <Route exact path="/home" component={Home} />
            
            <Route path="/about" component={About} />
            
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/tester" component={Tester} />
               
            
          
          </Switch>
         
        </AnimatePresence>

        


    </div>


  );
}

export default App;
