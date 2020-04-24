import React, { useEffect, useState } from "react";

import useCreateOscillator from "../hooks/useCreateOscillator";
import useSetFrequency from "../hooks/useSetFrequency";
import useAudioContext from "../hooks/useAudioContext";
import useSetGain from "../hooks/useSetGain";

export default ({ frequency = 200, type = "sine", gain = 50 } = {}) => {
	
	const { audioContext } = useAudioContext();
	const [oscillator, setOscillator] = useState(undefined);
	const [gainNode, setGainNode] = useState(undefined);
	
	useEffect(() => {
		console.log('did mount');

		const oscillator = audioContext.createOscillator();
		oscillator.frequency.value = frequency;
		oscillator.type = type;
		oscillator.start();
		setOscillator(oscillator);

		const gainNode = audioContext.createGain();
		gainNode.value = gain;
		setGainNode(gainNode);

		oscillator.connect(gainNode);
		gainNode.connect(audioContext.destination);

		return () => {
			oscillator.stop();
			oscillator.disconnect();
		}
	}, [])
	
	useSetFrequency({ oscillator, frequency });
	useSetGain({ gainNode, gain });

	return null;
}