import React from "react";
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
	{
		/* fetch all user palettes */
	}
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
								<SidebarLinkSC to={`#${theme}`}>{theme}</SidebarLinkSC>
							</SidebarLiSC>
						);
					})}
				</SidebarUlSC>
			</nav>
			{themesArray.map((theme) => {
				// fetch all palettes with theme
				const palettes: Palette[] = data.theme;
				return (
					<ThemeContainerSC id={theme}>
						<ThemeHeaderSC>{theme}</ThemeHeaderSC>
						{palettes.map((palette) => {
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
