import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import CombinationTone from "./components/molecules/CombinationTone";

function App() {

  let frequencies = [650, 750, 850, 950]
  return (
    <div className="App">
        {frequencies.map(freq => <CombinationTone oscFrequency={freq} />)}
    </div>
  );
}

export default App;
