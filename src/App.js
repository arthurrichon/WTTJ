import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './normalize.css';
import './App.css';
import logo from './logo.svg';


import Header from './Header';
import Footer from './Footer';
import Grid from './Grid';
import data from './data.json';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <Header/>
            <Route path="/col=:column&line=:line" render={props => (<Grid data={data} {...props} />) }/>
            <Footer/>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
