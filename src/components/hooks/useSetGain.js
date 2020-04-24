import { useEffect } from "react";

import useAudioContext from "./useAudioContext";

export default ({ gainNode, gain = 50 } = {}) => {
	const { audioContext } = useAudioContext();

	useEffect(
		() => {
			if (gainNode) {
				gainNode.gain.setValueAtTime(gainNode.gain.value, audioContext.currentTime);
				gainNode.gain.exponentialRampToValueAtTime(gain/100 + 0.001, audioContext.currentTime + 0.05);
			}
		},
		[gain]
	);
}
