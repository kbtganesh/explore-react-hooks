import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Hooks
          </p>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          <Example />
        </header>
      </div>
    );
  }
}

const Example = () => {
  // Declare a new state variable, which we'll call "count"
  const [Count, setCountkbt] = useState(0);
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${Count} times, updated directly to DOM`;
  });
  // let count = 1;

  return (
    <div>
      <p>You Clicked {Count} timeskbt</p>
      <button onClick={()=>setCountkbt(Count+1)}>
        Click me
      </button>
    </div>
  );
}

export default App;
