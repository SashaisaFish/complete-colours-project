// **IMPORTS
import React, { useState } from "react";
import {
	AddNewSC,
	ColourHexSC,
	ColourInputLabelSC,
	ColourInputSC,
} from "../styles/styledComponents";
import { LetterA, LetterC } from "./SvgComponents";
import {
	getAnalogousColour,
	getComplementaryColour,
	getRandomColour,
	hexToHSV,
} from "../functions/colourFunctions";
import { newPaletteColour, updatePaletteColour } from "../functions/updateData";
// import "../assets/LetterC.svg";

// **TYPES
type SwatchProps = {
	className?: string;
	paletteId: number;
	id: string;
	index: number;
	hex: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// values on database:
// hex

const ColourSwatch: React.FC<SwatchProps> = (props) => {
	const [loaded, setLoaded] = useState(false);
	const [InputColour, setColour] = useState<string>("");
	//console.log(InputColour, hexToHSV(InputColour));
	//console.log(InputColour);

	if (!loaded) {
		setColour(props.hex);
		setLoaded(true);
	}

	return (
		<div
			className={props.className}
			id={`${props.index}-${props.id}-container`}
			style={{ backgroundColor: InputColour }}
		>
			<ColourHexSC>{InputColour}</ColourHexSC>
			<AddNewSC
				className="add-analogous"
				onClick={(e) => {
					const newColour = getAnalogousColour(InputColour);
					newPaletteColour(props.paletteId, newColour);
				}}
			>
				{/* onClick perform function to find analogous colour and then perform fetch
				to POST new entry with that colour value on database */}

				<LetterA />
			</AddNewSC>
			<AddNewSC
				className="add-complementary"
				onClick={(e) => {
					const newColour = getComplementaryColour(InputColour);
					newPaletteColour(props.paletteId, newColour);
				}}
			>
				{/* onClick perform function to find complementary colour and then perform fetch
				to POST on database, then refetch all  */}
				<LetterC />
			</AddNewSC>
			<ColourInputLabelSC htmlFor={props.id}>
				Click to Change Colour
			</ColourInputLabelSC>
			<ColourInputSC
				onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
					if (e.target.value) {
						setColour(e.target.value);
					}
				}}
				onBlur={async (e) => {
					// PUT colour value in database to InputColour
					// paletteid, hex, index
					updatePaletteColour(
						props.paletteId,
						InputColour,
						props.index
					);
				}}
				type="color"
				name={props.id}
				id={props.id}
				value={InputColour}
				style={{
					backgroundColor: InputColour,
				}}
			/>
		</div>
	);
};

export default ColourSwatch;
