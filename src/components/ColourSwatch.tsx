// **IMPORTS
import React, { useState } from "react";
import {
	AddNewSC,
	ColourHexSC,
	ColourInputLabelSC,
	ColourInputSC,
} from "../styles/styledComponents";
import { LetterA, LetterC } from "./SvgComponents";
import { getRandomColour } from "../functions/colourFunctions";
// import "../assets/LetterC.svg";

// **TYPES
type SwatchProps = {
	className?: string;
	id: string;
	hex?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// values on database:
// hex
// hue
// saturation
// value

const ColourSwatch: React.FC<SwatchProps> = (props) => {
	const [InputColour, setColour] = useState(getRandomColour());
	if (props.hex) {
		setColour(props.hex);
	}

	return (
		<div
			className={props.className}
			id={`${props.id}-container`}
			style={{ backgroundColor: InputColour }}
		>
			<ColourHexSC>{InputColour}</ColourHexSC>
			<AddNewSC className="add-analogous">
				{/* onClick perform function to find analogous colour and then perform fetch
				to POST new entry with that colour value on database */}
				<LetterA />
			</AddNewSC>
			<AddNewSC className="add-complementary">
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
				onBlur={(e) => {
					// PUT colour value in database to InputColour
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
