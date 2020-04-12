import { useEffect } from "react";

export default ({ oscillator, frequency = 200 } = {}) =>
	useEffect(
		() => {
			if (oscillator) {
				console.log(`change freq to : ${frequency} Hz`);

				oscillator.frequency.value = frequency;
			}
		},
		[frequency]
	);