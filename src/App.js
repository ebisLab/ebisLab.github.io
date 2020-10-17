import React from 'react';
import logo from './logo.svg';
import Home from './components/Home'
import Init from './components/Init'
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import {AnimatePresence} from 'framer-motion'
import './App.css';
import Intro from './components/Intro';
import Test from './components/Test';

function App() {
  return (
    <Router>
    <div className="App">
    <div style={{
      position: "absolute",  width: "100%", zIndex: 1}}>
      <Link to="/home">Home</Link>
    </div>
      <Route render={({location})=>(
    <AnimatePresence exitBeforeEnter>

    <Switch location={location} key={location.pathname}>

<Router exact path="/"><Intro/></Router>
    <Route exact path="/home"><Test/></Route>

    </Switch>

    </AnimatePresence>
      )}/>

    </div>
    </Router>
  );
}

export default App;
