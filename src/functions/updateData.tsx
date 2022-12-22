import request from "./request";

export const updatePaletteColour = async (
	id: number,
	hex: string,
	index: number
) => {
	//console.log("id", id);
	const resPalette = await request(`/palette/${id}`, { method: "GET" });
	const paletteData = await resPalette.json();
	//console.log("this palette", paletteData);
	const colours = paletteData["colours"];
	const coloursArray = colours.slice(1, -1).replace(/[']/g, "").split(", ");
	//console.log("colours array", coloursArray);
	//console.log("this colour:", coloursArray[index]);
	//console.log("hex", hex);
	coloursArray[index] = hex;
	console.log("updated colour:", coloursArray[index]);
	const sendData = { "id": id, "colours": coloursArray };
	console.log("sendData:", sendData);
	const res = await request(`/palettes/colour`, { method: "PUT" }, sendData);
	const data = await res.json();
	//console.log("res:", data);
	return data;
};

export const deletePaletteColour = async (id: number, index: number) => {
	//console.log("id", id);
	const resPalette = await request(`/palette/${id}`, { method: "GET" });
	const paletteData = await resPalette.json();
	const colours = paletteData["colours"];
	const coloursArray = colours.slice(1, -1).replace(/[']/g, "").split(", ");
	coloursArray.splice(index, 1);
	const sendData = { "id": id, "colours": coloursArray };
	console.log("sendData:", sendData);
	const res = await request(`/palettes/colour`, { method: "PUT" }, sendData);
	const data = await res.json();
	//console.log("res:", data);
	return data;
};

export const newPaletteColour = async (id: number, hex: string) => {
	//console.log("id", id);
	const resPalette = await request(`/palette/${id}`, { method: "GET" });
	const paletteData = await resPalette.json();
	//console.log("this palette", paletteData);
	const colours = paletteData["colours"];
	const coloursArray = colours.slice(1, -1).replace(/[']/g, "").split(", ");
	//console.log("colours array", coloursArray);
	//console.log("hex", hex);
	coloursArray.push(hex);
	const sendData = { "id": id, "colours": coloursArray };
	console.log("sendData:", sendData);
	const res = await request(`/palettes/colour`, { method: "PUT" }, sendData);
	const data = await res.json();
	//console.log("res:", data);
	return data;
};
