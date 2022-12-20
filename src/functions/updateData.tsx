import request from "./request";

export const updatePaletteColour = async (
	id: number,
	hex: string,
	index: number
) => {
	console.log("id", id);
	const resPalette = await request(`/palette/${id}`, { method: "GET" });
	const paletteData = await resPalette.json();
	console.log("this palette", paletteData);
	const colours = paletteData["colours"];
	const coloursArray = colours.slice(1, -1).replace(/[']/g, "").split(", ");
	console.log("colours array", coloursArray);
	console.log("this colour:", coloursArray[index]);
	console.log("hex", hex);
	coloursArray[index] = hex;
	console.log("updated colour:", coloursArray[index]);
	const sendData = { "id": id, "colours": coloursArray };
	console.log("sendData:", sendData);
	const res = await request(`/palettes/colour`, { method: "PUT" }, sendData);
	const data = await res.json();
	console.log("res:", data);
	return data;
};
