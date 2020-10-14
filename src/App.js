import React from 'react';
import logo from './logo.svg';
import Home from './components/Home'
import Init from './components/Init'
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import './App.css';
import Intro from './components/Intro';

function App() {
  return (
    <Router>
    <div className="App">
      <div>
        <Link to="/home">Home</Link>
      </div>
<Intro/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Route path="/home" component={Home}/>
      <Router path="/" component={Init}/>
    </div>
    </Router>
  );
}

export default App;
