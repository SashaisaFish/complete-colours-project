import React from "react";
import { useState } from "react";
import ColourPalette from "../components/ColourPalette";
import { getPalettes } from "../functions/getData";
import {
	SidebarLinkSC,
	SidebarLiSC,
	SidebarUlSC,
} from "../styles/styledComponents";

interface Palette {
	name: string;
	theme?: string;
	colours: string[];
}

const Palettes: React.FC = () => {
	const [Palettes, setPalettes] = useState([]);

	// fetch all user palettes
	// response: data = [{Palette}]
	const setData = async () => {
		const data = await getPalettes();
		setPalettes(data);
	};
	setData();

	return (
		<main>
			<nav>
				<SidebarUlSC>
					{Palettes.map((palette: Palette, index) => {
						return (
							<SidebarLiSC key={`${index}-${palette.name}`}>
								<SidebarLinkSC to={`#${palette.name}`}>
									{palette.name}
								</SidebarLinkSC>
							</SidebarLiSC>
						);
					})}
				</SidebarUlSC>
			</nav>
			{Palettes.map((palette: Palette) => {
				return (
					<ColourPalette
						palette={palette}
						key={palette.name}
					></ColourPalette>
				);
			})}
		</main>
	);
};

export default Palettes;
