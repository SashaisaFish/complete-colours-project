import React from "react";
import { useState } from "react";
import ColourPalette from "../components/ColourPalette";
import { NavLink } from "react-router-dom";
import {
	SidebarUlSC,
	SidebarLiSC,
	SidebarLinkSC,
	ThemeContainerSC,
	ThemeHeaderSC,
} from "../styles/styledComponents";

interface Palette {
	name: string;
	theme?: string;
	colours: string[];
}

const Themes: React.FC = () => {
	const [Palettes, setPalettes] = useState([]);
	// fetch all user palettes
	// response: data = [{Palette}]
	const dirtyThemesArray: string[] = data.theme;
	let themesArray: string[] = [];
	dirtyThemesArray.forEach((theme) => {
		//iterate through themesArray and check if theme === array[i]
		//if theme exists already, do nothing
		//if theme does not exist, push to themesArray
	});

	return (
		<main>
			<nav>
				<SidebarUlSC>
					{themesArray.map((theme, index) => {
						return (
							<SidebarLiSC key={`${index}-${theme}`}>
								<SidebarLinkSC to={`#${theme}`}>
									{theme}
								</SidebarLinkSC>
							</SidebarLiSC>
						);
					})}
				</SidebarUlSC>
			</nav>
			{themesArray.map((theme) => {
				// fetch all palettes with theme
				// response: data = [{Palette}]
				setPalettes(data)
				//const palettes: Palette[] = data;
				return (
					<ThemeContainerSC id={theme}>
						<ThemeHeaderSC>{theme}</ThemeHeaderSC>
						{Palettes.map((palette: Palette) => {
							return (
								<ColourPalette
									palette={palette}
									key={palette.name}
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
