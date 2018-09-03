import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header';
import Footer from './Footer';
import Grid from './Grid';
import data from './data.json';
import './App.css';
import './normalize.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Grid data={data}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer/>
      </div>
    );
  }
}

export default App;
