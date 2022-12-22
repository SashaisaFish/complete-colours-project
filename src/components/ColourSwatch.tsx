// **IMPORTS
import React from "react";
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
						// find analagous colour based on current colour
						const newColour: string = getAnalogousColour(
							this.state.InputColour
						);
						// PUT to database
						newPaletteColour(this.props.paletteId, newColour);
						// update parent
						this.props.addColours(newColour);
					}}
				>
					<LetterA />
				</AddNewSC>
				<AddNewSC
					className="add-complementary"
					onClick={(e) => {
						// find complementary colour based on current colour
						const newColour: string = getComplementaryColour(
							this.state.InputColour
						);
						// PUT to database
						newPaletteColour(this.props.paletteId, newColour);
						// update parent
						this.props.addColours(newColour);
					}}
				>
					<LetterC />
				</AddNewSC>
				<ColourInputLabelSC htmlFor={this.props.id}>
					Colour Picker
				</ColourInputLabelSC>
				<ColourInputSC
					onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
						if (e.target.value) {
							this.setColour(e.target.value);
						}
					}}
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
						// update parent
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
						// PUT to database
						deletePaletteColour(
							this.props.paletteId,
							this.props.index
						);
						// update parent
						this.props.removeColours(this.props.index);
					}}
				>
					x
				</DeleteColourSC>
			</div>
		);
	}
}

export default ColourSwatch;
