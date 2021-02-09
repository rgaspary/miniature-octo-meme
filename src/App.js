import './styles/App.css';
import React from 'react';

import Calendar from './components/calendar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Miniature Octo Meme</h1>
        <p>A calendar application to keep track of bills and budgets</p>
      </header>
      <h2>Components</h2>
      <div className="component-container">
        <h3>Calendar Component</h3>
        <Calendar/>
      </div>
    </div>
  );
}

export default App;
