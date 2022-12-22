import React, { useEffect } from "react";
import {
	PaletteFormSC,
	PaletteHeaderSC,
	PaletteInputNameSC,
	SubmitSC,
	PaletteInputThemeSC,
	RadioFieldSC,
	RadioInputSC,
	RadioDivSC,
	RadioLabelSC,
} from "../styles/styledComponents";
import { getRandomColour } from "../functions/colourFunctions";
import { useState } from "react";
import ColourPalette from "../components/ColourPalette";
import getUserId from "../functions/getUserId";
import { useNavigate } from "react-router-dom";
import request from "../functions/request";
import PaletteInterface from "../types/paletteInterface";

interface NewPaletteInterface {
	name: string;
	theme: string | null;
	colours: string[];
	public: string;
	user_id: string;
}

// create new button sets name to undefined

const NewPalette: React.FC = () => {
	const id = getUserId();

	const [Name, setName] = useState("");
	const [Theme, setTheme] = useState<string | null>(null);
	const [Public, setPublic] = useState<string>("0");
	const [Swatches, setSwatches] = useState<string[]>([]);
	const [palette, setPalette] = useState<PaletteInterface>({
		id: -1,
		name: "",
		theme: "",
		colours: "",
		public: 0,
		user_id: +id,
	});
	const [Submitted, setSubmitted] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		const loggedInUser = localStorage.getItem("id");
		if (!loggedInUser || loggedInUser === "-1") {
			navigate("/");
		}
	});
	useEffect(() => {});
	if (Submitted === false) {
		return (
			<main>
				<PaletteFormSC
					onSubmit={async (e: React.ChangeEvent<HTMLFormElement>) => {
						e.preventDefault();
						let initialSwatch = getRandomColour();
						const data: NewPaletteInterface = {
							name: Name,
							theme: Theme,
							colours: [`${initialSwatch}`],
							public: Public,
							user_id: id,
						};
						// fetch request to database POST NewPalette
						const res = await request(
							`/palettes`,
							{
								method: "POST",
							},
							data
						);
						const resData: PaletteInterface = await res.json();
						if (res.ok) {
							//set response to NewPalette and console log
							console.log("NewPalette:", resData);
							setPalette(resData);
							// clean up colours data, set to Swatches, and log
							const swatchArray = resData.colours
								.slice(1, -1)
								.replace(/[']/g, "")
								.split(", ");
							setSwatches(swatchArray);
							console.log("Swatches:", Swatches);
						} else {
							console.log("error:", resData);
							return "error";
						}
						// setNewPalette(data)
						// on backend: create DB entry for palette
						setSubmitted(true);
					}}
				>
					<PaletteHeaderSC>Name Your Creation!</PaletteHeaderSC>
					<label htmlFor="palette-name">Name</label>
					<PaletteInputNameSC
						type="text"
						name="palette-name"
						id="palette-name"
						autoComplete="off"
						required
						onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
							setName(e.target.value);
							console.log(Name);
						}}
					/>
					<label htmlFor="palette-theme">Theme</label>
					<PaletteInputThemeSC
						type="text"
						id="palette-theme"
						name="palette-theme"
						onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
							setTheme(e.target.value);
							console.log(Theme);
						}}
					/>
					<RadioFieldSC legend="Make Public?">
						<RadioDivSC>
							<RadioLabelSC>Yes</RadioLabelSC>
							<RadioInputSC
								type="radio"
								name="make-public"
								id="yes"
								onInput={(
									e: React.ChangeEvent<HTMLInputElement>
								) => {
									setPublic("1");
									console.log(Public);
								}}
								required
							/>
						</RadioDivSC>
						<RadioDivSC>
							<RadioLabelSC>No</RadioLabelSC>
							<RadioInputSC
								type="radio"
								name="make-public"
								id="no"
								onInput={(
									e: React.ChangeEvent<HTMLInputElement>
								) => {
									setPublic("0");
									console.log(Public);
								}}
								required
							/>
						</RadioDivSC>
					</RadioFieldSC>
					<SubmitSC value="Submit" />
				</PaletteFormSC>
			</main>
		);
	}

	return (
		<main>
			<ColourPalette palette={palette} />
		</main>
	);
};

export default NewPalette;
