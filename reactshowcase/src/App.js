import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import ThreeColumns from './containers/ThreeColumns';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './router/Navbar';


function App() {
  return (
      <Router>
        <Navbar/>
        <Route path="/3Col" component={ThreeColumns} />
      </Router>
  );
}

export default App;
