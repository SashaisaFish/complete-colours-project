import React from "react";
import ColourSwatch from "../components/ColourSwatch";
import {
	ColourPaletteSC,
	ColourSwatchSC,
	PaletteFormSC,
	PaletteHeaderSC,
	PaletteInputNameSC,
	PaletteFormSubmitSC,
	PaletteInputThemeSC,
} from "../styles/styledComponents";
import { getRandomColour } from "../functions/colourFunctions";
import { useState } from "react";
import ColourPalette from "../components/ColourPalette";

// create new button sets name to undefined

const NewPalette: React.FC = () => {
	const [Name, setName] = useState("");
	const [Theme, setTheme] = useState("");
	const [Swatches, setSwatches] = useState([]);
	const [NewPalette, setNewPalette] = useState({ name: "", colours: [""] });
	const [Submitted, setSubmitted] = useState(false);
	if (Submitted === false) {
		return (
			<main>
				<PaletteFormSC
					onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => {
						e.preventDefault();
						let initialSwatch = getRandomColour();

						console.log(Name, Theme);
						// setName
						// fetch request to database POST palette name & initialSwatch
						// setNewPalette(data)
						// on backend: create DB entry for palette
						setSubmitted(true);
					}}
				>
					<PaletteHeaderSC>Name Your Creation!</PaletteHeaderSC>
					<PaletteInputNameSC
						id="palette-name"
						label="Name"
						autocomplete="off"
						required={true}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setName(e.target.value);
							console.log(Name);
						}}
					/>
					<PaletteInputThemeSC
						id="palette-theme"
						label="Theme"
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setTheme(e.target.value);
							console.log(Theme);
						}}
					/>
					<PaletteFormSubmitSC value="Submit" />
				</PaletteFormSC>
			</main>
		);
	}

	return (
		<main>
			{/* 
			<ColourPalette palette={NewPalette}></ColourPalette>
			*/}
			<ColourPaletteSC id="new-palette-container">
				<ColourSwatchSC id="swatch"></ColourSwatchSC>
				<ColourSwatchSC id="swatch1"></ColourSwatchSC>
				<ColourSwatchSC id="swatch2"></ColourSwatchSC>
				<ColourSwatchSC id="swatch3"></ColourSwatchSC>
			</ColourPaletteSC>
		</main>
	);
};

export default NewPalette;
