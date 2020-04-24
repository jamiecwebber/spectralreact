import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import CombinationTone from "./components/molecules/CombinationTone";

function App() {

  return (
    <div className="App">
        <CombinationTone />
        <CombinationTone />
        <CombinationTone />
        <CombinationTone />
    </div>
  );
}

export default App;
