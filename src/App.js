import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
}
  render() {
    return (
      <div className="App">
        <header><h1>Fibonacci</h1></header>
        <main></main>
      </div>
    );
  }
}

export default App;
