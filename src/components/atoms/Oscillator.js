import React, { useEffect, useState } from "react";

import useCreateOscillator from "../hooks/useCreateOscillator";
import useSetFrequency from "../hooks/useSetFrequency";
import useAudioContext from "../hooks/useAudioContext";
//import useSetGain from "../hooks/useSetGain";

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
		console.log(gainNode);

		oscillator.connect(gainNode);
		gainNode.connect(audioContext.destination);
	}, [])
	
	useSetFrequency({ oscillator, frequency });

	//
	const useSetGain = ({ gainNode, gain = 50 } = {}) => {
		useEffect(
			() => {
				if (gainNode) {
					gainNode.gain.value = gain/100;
				}
			},
			[gain]
		);
	}

	useSetGain({ gainNode, gain});


	return null;
}