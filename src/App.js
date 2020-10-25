import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import {AnimatePresence} from 'framer-motion'
import './App.css';
import Intro from './components/Intro';
import Intro2 from './components/Intro2';
import Test from './components/Test';
import About from './components/About';
import Contact from './components/Contact';
import Main from './components/Main';

function App() {
  return (
    <Router>
    <div className="App">
      <Route render={({location})=>(
    <AnimatePresence exitBeforeEnter initial={true} >

    <Switch location={location} key={location.pathname}>

<Route exact path="/"><Intro2/></Route>

    <Route exact path="/about" render={()=> <About/> }/>

    <Route exact path="/home" render={()=> <Main/> }/>


    
    </Switch>
    </AnimatePresence>
      )}/>

    </div>
    </Router>
  );
}

export default App;
