// **IMPORTS
import React, { useState } from "react";
import {
	AddNewSC,
	ColourHexSC,
	ColourInputLabelSC,
	ColourInputSC,
	DeleteColourSC,
	SubmitColourSC,
} from "../styles/styledComponents";
import { LetterA, LetterC } from "./SvgComponents";
import {
	getAnalogousColour,
	getComplementaryColour,
	getRandomColour,
	hexToHSV,
} from "../functions/colourFunctions";
import {
	deletePaletteColour,
	newPaletteColour,
	updatePaletteColour,
} from "../functions/updateData";
// import "../assets/LetterC.svg";

// **TYPES
type SwatchProps = {
	className?: string;
	paletteId: number;
	id: string;
	index: number;
	hex: string;
	updateParent: () => void;
	setColours: (colour: string, index: number) => void;
	addColours: (colour: string) => void;
	removeColours: (index: number) => void;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
type SwatchStates = {
	loaded: boolean;
	InputColour: string;
};

// values on database:
// hex

class ColourSwatch extends React.Component<SwatchProps, SwatchStates> {
	constructor(props: SwatchProps) {
		super(props);
	}
	state: SwatchStates = {
		loaded: false,
		InputColour: "",
	};
	setLoaded(input: boolean) {
		this.setState({ loaded: input });
	}
	setColour(input: string) {
		this.setState({ InputColour: input });
	}
	render() {
		//const [loaded, setLoaded] = useState(false);
		//const [InputColour, setColour] = useState<string>("");
		//console.log(InputColour, hexToHSV(InputColour));
		//console.log(InputColour);

		if (!this.state.loaded) {
			this.setColour(this.props.hex);
			this.setLoaded(true);
		}

		return (
			<div
				className={this.props.className}
				id={`${this.props.index}-${this.props.id}-container`}
				style={{ backgroundColor: this.state.InputColour }}
			>
				<ColourHexSC>{this.state.InputColour}</ColourHexSC>
				<AddNewSC
					className="add-analogous"
					onClick={(e) => {
						const newColour: string = getAnalogousColour(
							this.state.InputColour
						);
						newPaletteColour(this.props.paletteId, newColour);
						this.props.addColours(newColour);
					}}
				>
					{/* onClick perform function to find analogous colour and then perform fetch
				to POST new entry with that colour value on database */}

					<LetterA />
				</AddNewSC>
				<AddNewSC
					className="add-complementary"
					onClick={(e) => {
						const newColour: string = getComplementaryColour(
							this.state.InputColour
						);
						newPaletteColour(this.props.paletteId, newColour);
						this.props.addColours(newColour);
					}}
				>
					{/* onClick perform function to find complementary colour and then perform fetch
				to POST on database, then refetch all  */}
					<LetterC />
				</AddNewSC>
				<ColourInputLabelSC htmlFor={this.props.id}>
					Click to Change Colour
				</ColourInputLabelSC>
				<ColourInputSC
					onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
						if (e.target.value) {
							this.setColour(e.target.value);
						}
					}}
					// instead of onBlur, add submit button to colour swatch
					type="color"
					name={this.props.id}
					id={this.props.id}
					value={this.state.InputColour}
					style={{
						backgroundColor: this.state.InputColour,
					}}
				/>
				<SubmitColourSC
					onClick={async (e) => {
						// PUT colour value in database to this.state.InputColour
						// paletteid, hex, index
						updatePaletteColour(
							this.props.paletteId,
							this.state.InputColour,
							this.props.index
						);
						this.props.setColours(
							this.state.InputColour,
							this.props.index
						);
					}}
				>
					SUBMIT
				</SubmitColourSC>
				<DeleteColourSC
					onClick={async (e) => {
						deletePaletteColour(
							this.props.paletteId,
							this.props.index
						);
						this.props.removeColours(this.props.index);
					}}
				>
					DELETE
				</DeleteColourSC>
			</div>
		);
	}
}

export default ColourSwatch;
