import React, { useEffect, useState } from "react";
import { getThemedPalettes } from "../functions/getData";
import getUserId from "../functions/getUserId";
import {
	PaletteListSC,
	ThemeContainerSC,
	ThemeHeaderSC,
	ThemeListSC,
} from "../styles/styledComponents";
import PaletteInterface from "../types/paletteInterface";
import ColourPalette from "./ColourPalette";

interface ThemeProps {
	theme: string;
}

const ThemedPalettes: React.FC<ThemeProps> = (props) => {
	const id = getUserId();
	console.log("themes list", props.theme);
	const [Palettes, setPalettes] = useState<PaletteInterface[]>([]);
	const [loaded, setLoaded] = useState<boolean>(false);
	const setThemedPalettes = async () => {
		const data: PaletteInterface[] = await getThemedPalettes(
			id,
			props.theme
		);
		setPalettes(data);
		// console.log("Palettes:", data);
	};

	useEffect(() => {
		setThemedPalettes();
	}, []);

	return (
		<ThemeContainerSC id={props.theme} key={props.theme}>
			<ThemeHeaderSC>{props.theme}</ThemeHeaderSC>
			<PaletteListSC>
				{Palettes.map((palette: PaletteInterface) => {
					return (
						<ColourPalette
							palette={palette}
							key={`${palette.id}`}
						></ColourPalette>
					);
				})}
			</PaletteListSC>
		</ThemeContainerSC>
	);
};

export default ThemedPalettes;
