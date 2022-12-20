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

// need function to convert HSV > RGB > Hex and Hex > RGB > HSV
// https://www.rapidtables.com/convert/color/hsv-to-rgb.html
// https://www.rapidtables.com/convert/color/how-rgb-to-hex.html

// export function HSVtoRGB(): string {
// 	let RGBValue = "";

// 	return RGBValue;
// }

// export function RGBtoHex(): string {
// 	let HexValue = "";

// 	return HexValue;
// }

// export function HextoRGB():string {
// 	let RGBValue = "";

// 	return RGBValue;
// }

// export function RGBtoHSV():string {
// 	let HSVValue = "";

// 	return HSVValue;
// }

export function HSVToHex(hsv: { h: number; s: number; v: number }): string {
	// Convert the hue to a value between 0 and 6
	let hue = hsv.h / 60;
	let chroma = hsv.v * hsv.s;
	let x = chroma * (1 - Math.abs((hue % 2) - 1));

	// Determine the values for R, G, and B
	let r: number, g: number, b: number;
	if (hue >= 0 && hue < 1) {
		[r, g, b] = [chroma, x, 0];
	} else if (hue >= 1 && hue < 2) {
		[r, g, b] = [x, chroma, 0];
	} else if (hue >= 2 && hue < 3) {
		[r, g, b] = [0, chroma, x];
	} else if (hue >= 3 && hue < 4) {
		[r, g, b] = [0, x, chroma];
	} else if (hue >= 4 && hue < 5) {
		[r, g, b] = [x, 0, chroma];
	} else if (hue >= 5 && hue < 6) {
		[r, g, b] = [chroma, 0, x];
	} else {
		// Hue is a multiple of 6, so R, G, and B are all 0
		[r, g, b] = [0, 0, 0];
	}

	// Calculate the final values for R, G, and B by adding the
	// lightness value to each component
	let m = hsv.v - chroma;
	r += m;
	g += m;
	b += m;

	// Convert R, G, and B to hex strings and return the result
	return (
		"#" +
		[r, g, b]
			.map((x) =>
				Math.round(x * 255)
					.toString(16)
					.padStart(2, "0")
			)
			.join("")
	);
}

// { h: number; s: number; v: number }

export function hexToHSV(hex: string): { h: number; s: number; v: number } {
	// Check that the hex string is a valid color
	if (!/^#[0-9A-F]{6}$/i.test(hex)) {
		return { h: 0, s: 0, v: 0 };
		//return "error";
	}

	// Remove the leading '#' character from the hex string
	let hexWithoutHash = hex.slice(1);

	// Convert the hex string to an array of integers
	let rgb = hexWithoutHash.match(/.{2}/g)?.map((x) => parseInt(x, 16)) || [];

	// Normalize the red, green, and blue values to the range [0, 1]
	let [r, g, b] = rgb.map((x) => x / 255);

	// Calculate the maximum and minimum values of R, G, and B
	let max = Math.max(r, g, b);
	let min = Math.min(r, g, b);

	// Calculate the hue
	let h = 0; // Default value for h
	if (max !== min) {
		if (max === r) {
			h = ((60 * (g - b)) / (max - min)) % 360;
		} else if (max === g) {
			h = (60 * (b - r)) / (max - min) + 120;
		} else if (max === b) {
			h = (60 * (r - g)) / (max - min) + 240;
		}
	}

	// Calculate the saturation
	let s = max === 0 ? 0 : (max - min) / max;
	let v = max;

	const hValue = h.toPrecision(3);
	const sValue = (s * 100).toPrecision(2);
	const vValue = (v * 100).toPrecision(2);

	// Return the HSV value
	//return `${hValue}, ${sValue}, ${vValue}`;
	return { h: +hValue, s: +sValue, v: +vValue };
}
