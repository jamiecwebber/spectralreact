import { useEffect } from "react";

export default ({ gainNode, gain = 50 } = {}) =>
	useEffect(
		() => {
			if (gainNode) {
				gainNode.gain.value = gain/100;
			}
		},
		[gain]
	);