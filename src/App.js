import React from 'react';
import './App.css';
import Stock from './components/Stock'

function App() {
  console.log(process.env.REACT_APP_ALPHAVANTAGE_API_KEY)

  return (
    <div className="App">
      <h1>HerschMersch</h1>
      <Stock />
    </div>
  );
}

export default App;
