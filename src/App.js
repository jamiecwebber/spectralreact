import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Oscillator from "./components/atoms/Oscillator";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

function App() {
    const [frequency, setFrequency] = useState(200);
    const [gain, setGain] = useState(50);

  return (
    <div className="App">
        <Slider
            min={200}
            max={300}
            value={frequency}
            style={{ width: 200, margin: 10 }}
            onChange={setFrequency}
        />
        <Slider
            min={0}
            max={100}
            value={gain}
            style={{ width: 200, margin: 10 }}
            onChange={setGain}
        />
        <Oscillator frequency={frequency} gain={gain} />
    </div>
  );
}

export default App;
