import React, { Component } from 'react';
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
      <div className="App">
        <Header/>
        <Grid data={data}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
