export function getRandomColour(): string {
	let hex = "#" + Math.floor(Math.random() * 16777215).toString(16);
	while (hex.length < 7) {
		hex = `${hex}7`;
	}

	return hex;
}

// function getRandomColor(): string {
// 	// Generate random values for hue, saturation, and value
// 	let h = Math.floor(Math.random() * 360);
// 	let s = Math.random();
// 	let v = Math.random();

// 	// Convert the HSV values to a hex color string
// 	return HSVToHex({h, s, v});
//   }

//   console.log(getRandomColor());  // Prints a random color

export function getAnalogousColour(inputColour: string): string {
	// convert inputColour (hex) to hsv
	let convertedInput = hexToHSV(inputColour);
	console.log(convertedInput);
	// get random number between 30 and 60
	let randomNumberH = Math.floor(Math.random() * 31) + 30;
	// randomise 0 and 1
	let zeroOrOneH = Math.floor(Math.random() * 2);
	// if 0, subtract random number from h value
	if (zeroOrOneH === 0) {
		convertedInput.h -= randomNumberH;
	}
	// if 1, add random number to h value
	else if (zeroOrOneH === 1) {
		convertedInput.h += randomNumberH;
	}
	// if convertedInput is greater than 360, subtract 360
	if (convertedInput.h > 360) {
		convertedInput.h -= 360;
	}

	// do same with s but with smaller values
	let randomNumberS = Math.floor(Math.random() * 11);
	let zeroOrOneS = Math.floor(Math.random() * 2);

	if (zeroOrOneS === 0) {
		convertedInput.s -= randomNumberS;
	} else if (zeroOrOneS === 1) {
		convertedInput.s += randomNumberS;
	}
	// and v
	let randomNumberV = Math.floor(Math.random() * 11);
	let zeroOrOneV = Math.floor(Math.random() * 2);

	if (zeroOrOneV === 0) {
		convertedInput.v -= randomNumberV;
	} else if (zeroOrOneV === 1) {
		convertedInput.v += randomNumberV;
	}

	// if either are greater than 100, subtract 10
	if (convertedInput.s > 100) {
		convertedInput.s -= 10;
	}
	if (convertedInput.v > 100) {
		convertedInput.v -= 10;
	}
	// convert to hex
	let outputColour = HSVToHex(convertedInput);
	return outputColour;
}

export function getComplementaryColour(inputColour: string): string {
	// convert inputColour (hex) to hsv
	let convertedInput = hexToHSV(inputColour);
	console.log(convertedInput);
	// get random number between 120 and 180
	let randomNumberH = Math.floor(Math.random() * 61) + 120;
	// add random number to h value
	convertedInput.h += randomNumberH;
	// if convertedInput is greater than 360, subtract 360
	if (convertedInput.h > 360) {
		convertedInput.h -= 360;
	}

	// get random number between 0 and 20
	let randomNumberS = Math.floor(Math.random() * 21);
	// randomise 0 or 1
	let zeroOrOneS = Math.floor(Math.random() * 2);
	// if 0, subtract random number from s
	if (zeroOrOneS === 0) {
		convertedInput.s -= randomNumberS;
	}
	// if 1, add random number to s
	if (zeroOrOneS === 1) {
		convertedInput.s += randomNumberS;
	}
	// same with v
	let randomNumberV = Math.floor(Math.random() * 21);
	let zeroOrOneV = Math.floor(Math.random() * 2);
	if (zeroOrOneV === 0) {
		convertedInput.v -= randomNumberV;
	}
	if (zeroOrOneV === 1) {
		convertedInput.v += randomNumberV;
	}

	// if either are greater than 100, subtract 20
	if (convertedInput.s > 100) {
		convertedInput.s -= 20;
	}
	if (convertedInput.v > 100) {
		convertedInput.v -= 20;
	}
	// convert to hex
	let outputColour = HSVToHex(convertedInput);
	return outputColour;
}

// need function to convert HSV > RGB > Hex and Hex > RGB > HSV
// https://www.rapidtables.com/convert/color/hsv-to-rgb.html
// https://www.rapidtables.com/convert/color/how-rgb-to-hex.html

// export function HSVToHex(hsv: { h: number; s: number; v: number }): string {
// 	// Convert the hue to a value between 0 and 6
// 	let s = hsv.s / 100;
// 	console.log("s", s);
// 	let v = hsv.v / 100;
// 	console.log("v", v);
// 	let hue = hsv.h / 60;
// 	let chroma = v * s;
// 	let x = chroma * (1 - Math.abs((hue % 2) - 1));

// 	// Determine the values for R, G, and B
// 	let r: number, g: number, b: number;
// 	if (hue >= 0 && hue < 1) {
// 		[r, g, b] = [chroma, x, 0];
// 	} else if (hue >= 1 && hue < 2) {
// 		[r, g, b] = [x, chroma, 0];
// 	} else if (hue >= 2 && hue < 3) {
// 		[r, g, b] = [0, chroma, x];
// 	} else if (hue >= 3 && hue < 4) {
// 		[r, g, b] = [0, x, chroma];
// 	} else if (hue >= 4 && hue < 5) {
// 		[r, g, b] = [x, 0, chroma];
// 	} else if (hue >= 5 && hue < 6) {
// 		[r, g, b] = [chroma, 0, x];
// 	} else {
// 		// Hue is a multiple of 6, so R, G, and B are all 0
// 		[r, g, b] = [0, 0, 0];
// 	}
// 	console.log("pre-m r", r, "g", g, "b", b);
// 	// Calculate the final values for R, G, and B by adding the
// 	// lightness value to each component
// 	let m = v - chroma;
// 	r += m;
// 	g += m;
// 	b += m;
// 	console.log("r", r, "g", g, "b", b);

// 	// this should work to convert rgb to hex
// 	// Convert R, G, and B to hex strings and return the result
// 	return (
// 		"#" +
// 		[r, g, b]
// 			.map(
// 				(x) =>
// 					Math.round(x * 255)
// 						.toString(16)
// 						.padStart(2, "0")
// 				//x.toString(16).padStart(2, "0")
// 			)
// 			.join("")
// 	);
// }

// { h: number; s: number; v: number }

export function hexToHSV(hex: string): { h: number; s: number; v: number } {
	// Check that the hex string is a valid color
	if (!/^#[0-9A-F]{6}$/i.test(hex)) {
		return { h: 0, s: 0, v: 0 };
		//return "error";
	}
	console.log("hexToHSV");

	// Remove the leading '#' character from the hex string
	let hexWithoutHash = hex.slice(1);

	// Convert the hex string to an array of integers
	let rgb = hexWithoutHash.match(/.{2}/g)?.map((x) => parseInt(x, 16)) || [];
	console.log("rgb", rgb);

	// Normalize the red, green, and blue values to the range [0, 1]
	let [r, g, b] = rgb.map((x) => x / 255);

	// Calculate the maximum and minimum values of R, G, and B
	let max = Math.max(r, g, b);
	let min = Math.min(r, g, b);
	console.log("max", max, "min", min);

	let h = 0;
	let s = 0;
	const v = max;

	const d = max - min;
	s = max === 0 ? 0 : d / max;

	if (max === min) {
		h = 0; // achromatic
	} else {
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
		}

		h *= 60;
	}

	console.log("h", h, "s", s, "v", v);

	// // Calculate the hue
	// let h = 0; // Default value for h
	// if (max !== min) {
	// 	if (max === r) {
	// 		h = ((60 * (g - b)) / (max - min)) % 360;
	// 	} else if (max === g) {
	// 		h = (60 * (b - r)) / (max - min) + 120;
	// 	} else if (max === b) {
	// 		h = (60 * (r - g)) / (max - min) + 240;
	// 	}
	// }

	// // Calculate the saturation
	// let s = max === 0 ? 0 : (max - min) / max;
	// let v = max;

	const hValue = h.toPrecision(3);
	const sValue = (s * 100).toPrecision(2);
	const vValue = (v * 100).toPrecision(2);

	// Return the HSV value
	//return `${hValue}, ${sValue}, ${vValue}`;
	return { h: +hValue, s: +sValue, v: +vValue };
}

//TESTING HSV TO RGB
function HSVToHex(hsv: { h: number; s: number; v: number }): string {
	const h = hsv.h / 360;
	const s = hsv.s / 100;
	const v = hsv.v / 100;

	const i = Math.floor(h * 6);
	const f = h * 6 - i;
	const p = v * (1 - s);
	const q = v * (1 - f * s);
	const t = v * (1 - (1 - f) * s);

	let r = 0,
		g = 0,
		b = 0;
	switch (i % 6) {
		case 0:
			r = v;
			g = t;
			b = p;
			break; // fix here
		case 1:
			r = q;
			g = v;
			b = p;
			break; // fix here
		case 2:
			r = p;
			g = v;
			b = t;
			break; // fix here
		case 3:
			r = p;
			g = q;
			b = v;
			break; // fix here
		case 4:
			r = t;
			g = p;
			b = v;
			break; // fix here
		case 5:
			r = v;
			g = p;
			b = q;
			break; // fix here
	}
	console.log("end HSVToHex");
	return (
		"#" +
		[r, g, b]
			.map(
				(x) =>
					Math.round(x * 255)
						.toString(16)
						.padStart(2, "0")
				//x.toString(16).padStart(2, "0")
			)
			.join("")
	);
}

const hex = "#008000";
const hsv = hexToHSV(hex);
const outcome = HSVToHex(hsv);
//const outcome = HSVToHex({ h: 60, s: 100, v: 100 });
//const hsv = { h: 240, s: 70, v: 60 };
console.log("hex", hex);
console.log("hsv", hsv);
console.log("hex outcome", outcome);
