import React from 'react';
import './App.css';
import Weather from "./weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />
    
    <footer>
      This project was coded by <a href="https://github.com/MMRapolai/" target="_blank" rel="noreferrer">Matshelane Rapolai</a> and is <a href="https://github.com/MMRapolai/murielweek5-react" target="_blank" rel="noreferrer"> open-sourced on GitHub </a>
    </footer>
    </div>
    </div>
  );
}

export default App;
