import React, { useEffect } from "react";
import { useState } from "react";
import ColourPalette from "../components/ColourPalette";
import { useNavigate } from "react-router-dom";
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
	const [Themes, setThemes] = useState<string[]>([]);
	const [Palettes, setPalettes] = useState<PaletteInterface[]>([]);
	const [loaded, setLoaded] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		const loggedInUser = localStorage.getItem("id");
		if (!loggedInUser || loggedInUser === "-1") {
			navigate("/");
		}
	});
	const setDataThemes = async () => {
		if (typeof id === "string") {
			const data = await getThemes(id);
			console.log("themes", data);
			setThemes(data);
		}
	};
	useEffect(() => {
		setDataThemes();
	}, []);

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
				//setLoaded(false);
				// for each theme, fetch all palettes in that theme
				const setThemedPalettes = async () => {
					const data: PaletteInterface[] = await getThemedPalettes(
						id,
						theme
					);
					setPalettes(data);
					console.log("Palettes:", Palettes);
				};
				if (!loaded) {
					setThemedPalettes();
					setLoaded(true);
				}
				// response: data = [{Palette}]
				//setPalettes(data);
				//const palettes: Palette[] = data;
				return (
					<ThemeContainerSC id={theme} key={theme}>
						<ThemeHeaderSC>{theme}</ThemeHeaderSC>
						{Palettes.map((palette: PaletteInterface) => {
							return (
								<ColourPalette
									palette={palette}
									key={`${palette.name}-${palette.id}`}
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
