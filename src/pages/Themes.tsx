import React, { useEffect } from "react";
import { useState } from "react";
import ColourPalette from "../components/ColourPalette";
import { NavLink, useNavigate } from "react-router-dom";
import {
	SidebarUlSC,
	SidebarLiSC,
	SidebarLinkSC,
	ThemeContainerSC,
	ThemeHeaderSC,
} from "../styles/styledComponents";
import PaletteInterface from "../types/paletteInterface";
import getUserId from "../functions/getUserId";
import { getThemedPalettes, getThemes } from "../functions/getData";

const Themes: React.FC = () => {
	const id = getUserId();
	const [update, setUpdate] = useState<PaletteInterface>({
		id: -1,
		name: "",
		theme: "",
		colours: "[]",
		user_id: 0,
		public: 0,
	});
	const [Themes, setThemes] = useState([]);
	const [Palettes, setPalettes] = useState<PaletteInterface[]>([]);
	const [loadedThemes, setLoadedThemes] = useState(false);
	const [User, setUser] = useState(id);
	const navigate = useNavigate();
	useEffect(() => {
		const loggedInUser = localStorage.getItem("id");
		if (loggedInUser && loggedInUser !== "-1") {
			const id = getUserId();
			setUser(id);
		} else {
			navigate("/");
		}
	}, []);
	const setDataThemes = async () => {
		if (typeof id === "string") {
			const data = await getThemes(id);
			setThemes(data);
			setLoadedThemes(true);
		}
	};
	if (!loadedThemes) {
		setDataThemes();
	}

	return (
		<main>
			<nav>
				<SidebarUlSC>
					{Themes.map((theme, index) => {
						return (
							<SidebarLiSC key={`${index}-${theme}`}>
								<SidebarLinkSC href={`#${theme}`}>
									{theme}
								</SidebarLinkSC>
							</SidebarLiSC>
						);
					})}
				</SidebarUlSC>
			</nav>
			{Themes.map((theme: string) => {
				// for each theme, fetch all palettes in that theme
				// is there a way to ensure /palettes/id/theme returns an array of objects
				// even if there is only one?
				const setPaletteThemes = async () => {
					const data: PaletteInterface[] | "error" =
						await getThemedPalettes(id, theme);
					if (typeof data === "string") {
						console.log("ERROR");
					} else {
						setPalettes(data);
						console.log("Palettes:", Palettes);
					}
				};
				setPaletteThemes();
				// response: data = [{Palette}]
				//setPalettes(data);
				//const palettes: Palette[] = data;
				return (
					<ThemeContainerSC id={theme} key={theme}>
						<ThemeHeaderSC>{theme}</ThemeHeaderSC>
						{Palettes.map((palette: PaletteInterface) => {
							setUpdate(palette);
							return (
								<ColourPalette
									palette={update}
									key={`${palette.name}-${palette.id}`}
									setUpdate={setUpdate}
								></ColourPalette>
							);
						})}
					</ThemeContainerSC>
				);
			})}
		</main>
	);
};

export default Themes;
