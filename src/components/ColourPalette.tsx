import React, { useEffect, useState } from "react";
import {
	ColourPaletteSC,
	ColourSwatchSC,
	GradientBarSC,
	PaletteHeaderSC,
	SwatchContainerSC,
} from "../styles/styledComponents";
import PaletteInterface from "../types/paletteInterface";

interface PaletteProps {
	palette: PaletteInterface;
}

const ColourPalette: React.FC<PaletteProps> = ({ palette }) => {
	// for palette
	const [swatches, setSwatches] = useState<string[]>([""]);
	useEffect(() => {
		setSwatches(
			palette.colours.slice(1, -1).replace(/[']/g, "").split(", ")
		);
	}, [palette.colours]);
	// for gradient
	const [Gradient, setGradient] = useState(swatches.join(","));
	useEffect(() => {
		setGradient(swatches.join(","));
	}, [swatches]);
	return (
		<ColourPaletteSC id={palette.name}>
			<PaletteHeaderSC>{palette.name}</PaletteHeaderSC>
			<SwatchContainerSC>
				{swatches.map((color, index) => {
					//console.log(InputColour, hexToHSV(InputColour));
					//console.log(InputColour);
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
			<GradientBarSC gradient={Gradient}></GradientBarSC>
		</ColourPaletteSC>
	);
};

export default ColourPalette;
