import React from 'react';
import logo from './logo.svg';
import Home from './components/Home'
import Init from './components/Init'
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import {AnimatePresence} from 'framer-motion'
import './App.css';
import Intro from './components/Intro';
import Test from './components/Test';
import About from './components/About';

function App() {
  return (
    <Router>
    <div className="App">
    {/* <div style={{
      position: "absolute",  width: "100%", zIndex: 1, background: "peachpuff", padding: "20px"}}>
      <Link to="/home">Home</Link>
    </div> */}
      <Route render={({location})=>(
    <AnimatePresence exitBeforeEnter initial={true} >

    <Switch location={location} key={location.pathname}>

<Route exact path="/"><Intro/></Route>
    <Route exact path="/home"><Test/></Route>
    {/* <Route exact path="/about"><About/></Route> */}

    </Switch>
    <Route exact path="/about"><About/></Route>


    </AnimatePresence>
      )}/>

    </div>
    </Router>
  );
}

export default App;
