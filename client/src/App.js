import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="bg-blue-darker h-screen flex justify-center items-center text-blue-lighter">
        <header className="object-fill object-center text-center leading-loose">
          <img src={logo} className="logo pointer-events-none select-none" alt="logo" />
          <p class="text-4xl">Edit <code class="text-white">src/App.js</code> and save to reload.</p>
          <a className="text-2xl btn-outline-blue" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
        </header>
      </div>
    );
  }
}

export default App;
