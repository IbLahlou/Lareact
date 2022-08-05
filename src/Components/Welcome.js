import React from 'react';
import logo from '../logo.svg';

class Welcome extends React.Component {
  render() {
    return (
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Hello World !</h1>
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
        </header>
    </div>
    )
  }
}

export default Welcome;
