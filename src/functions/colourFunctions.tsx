export function getRandomColour(): string {
	let hex = "#" + Math.floor(Math.random() * 16777215).toString(16);
	while (hex.length < 7) {
		hex = `${hex}7`;
	}

	return hex;
	// if (hex.length === 7) {
	// 	return hex;
	// }
	// return "#E9F0F0";
}
