import React, { useEffect, useState } from "react";
import {
	ColourPaletteSC,
	ColourSwatchSC,
	GradientBarSC,
	PaletteHeaderSC,
	SwatchContainerSC,
} from "../styles/styledComponents";
import PaletteInterface from "../types/paletteInterface";
import ColourSwatch from "./ColourSwatch";

interface PaletteProps {
	palette: PaletteInterface;
}

const ColourPalette: React.FC<PaletteProps> = ({ palette }) => {
	const swatches: string[] = palette.colours
		.slice(1, -1)
		.replace(/[']/g, "")
		.split(", ");
	//console.log(swatches);
	const [Gradient, setGradient] = useState(swatches.join(","));
	return (
		<ColourPaletteSC id={palette.name}>
			<PaletteHeaderSC>{palette.name}</PaletteHeaderSC>
			{/* {sampleSwatches.map((color: string) => {
				console.log(color);
				return (
					<ColourSwatchSC
						hex={color}
						id={color}
						key={color}
					></ColourSwatchSC>
				);
			})} */}
			<SwatchContainerSC>
				{swatches.map((color, index) => {
					return (
						<ColourSwatchSC
							paletteId={palette.id}
							hex={color}
							id={color}
							index={index}
							key={color}
						></ColourSwatchSC>
					);
				})}
			</SwatchContainerSC>
			<GradientBarSC
				numColour={swatches.length}
				gradient={Gradient}
			></GradientBarSC>
		</ColourPaletteSC>
	);
};

export default ColourPalette;
