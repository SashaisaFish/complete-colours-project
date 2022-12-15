import React from "react";
import {
	ColourPaletteSC,
	ColourSwatchSC,
	PaletteHeaderSC,
} from "../styles/styledComponents";

interface Palette {
	name: string;
	theme?: string;
	colours: string[];
}
interface PaletteProps {
	palette: Palette;
}

const ColourPalette: React.FC<PaletteProps> = ({ palette }) => {
	const swatches: string[] = palette.colours;
	return (
		<ColourPaletteSC id={palette.name}>
			<PaletteHeaderSC>{palette.name}</PaletteHeaderSC>
			{swatches.map((color, index) => {
				return (
					<ColourSwatchSC
						hex={color}
						id={`${index}-${color}`}
						key={`${index}-${color}`}
					></ColourSwatchSC>
				);
			})}
		</ColourPaletteSC>
	);
};

export default ColourPalette;
