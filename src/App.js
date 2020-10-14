import React from 'react';
import logo from './logo.svg';
import Home from './components/Home'
import Init from './components/Init'
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import {AnimatePresence} from 'framer-motion'
import './App.css';
import Intro from './components/Intro';

function App() {
  return (
    <Router>
    <div className="App">
    <div style={{background:"limegreen", position: "absolute",  width: "100%"}}>
      <Link to="/home">Home</Link>
    </div>
      <Route render={({location})=>(
    <AnimatePresence exitBeforeEnter location={location}>


    <Intro style={{marginTop:"-50px"}}/>
    {/* <Switch location={location} key={location.pathname}> */}
    <Route path="/home" component={Home}/>
    <Router path="/" component={Init}/>
    {/* </Switch> */}

    </AnimatePresence>
      )}/>
    {/* // <AnimatePresence exitBeforeEnter>
    //   <div style={{background:"limegreen", position: "absolute",  width: "100%"}}>
    //     <Link to="/home">Home</Link>
    //   </div>

    //   <Intro style={{marginTop:"-50px"}}/>
    //   <Route path="/home" component={Home}/>
    //   <Router path="/" component={Init}/>
    //   </AnimatePresence> */}

    </div>
    </Router>
  );
}

export default App;
