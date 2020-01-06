import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

/*/

class App extends Component{
  render(){
  return (
<div className="App"> 
<header className="App-header">
<img src={logo} className="App-logo" alt="logo"/>
<h1 className="App-title">Bienvenido a React</h1>
</header>
<p className="App-intro">
Hola, prueba <code>src/App.js </code> y guardar para cargar.App </p>

</div>
);


  }
}
export default App;