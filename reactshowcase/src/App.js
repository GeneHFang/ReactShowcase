import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import ThreeColumns from './containers/ThreeColumns';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './router/Navbar';
import InfiniteScroll from './containers/InfiniteScroll';


function App() {
  return (
      <Router>
        <Navbar/>
        <Route path="/3Col" component={ThreeColumns} />
        <Route path="/inf-scroll" component={InfiniteScroll} />
      </Router>
  );
}

export default App;
