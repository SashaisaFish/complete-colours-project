import request from "./request";

export const getPalettes = async () => {
    const res = await request("/palettes", {method: "GET"})
    if (res.ok) {
        const palettes = await res.json()
        return palettes
    } else {
        console.log(await res.json())
        return "error"
    }
};

export const getThemes = async () => {
    const res = await request("/themes", { method: "GET" });
	if (res.ok) {
		const themes = await res.json();
		return themes;
	} else {
		console.log(await res.json());
        return "error"
	}
}