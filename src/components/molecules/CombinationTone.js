import React, { useEffect, useState } from "react";

import Oscillator from "../atoms/Oscillator";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default ({ oscFrequency = 200, oscGain = 50} = {}) => {

  const [frequency, setFrequency] = useState(oscFrequency);
  const [gain, setGain] = useState(oscGain);

  return (
    <div className="CombinationTone">
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