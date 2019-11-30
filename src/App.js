import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      title: 'Hello, Ali'
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.title}</p>
          <button onClick={() => this.setState({ title: 'Hello, Tuba' })}>
            Change Text
          </button>
        </header>
      </div>
    );
  }
}

export default App;
