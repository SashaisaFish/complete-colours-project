import React from "react";
//import { getOnePalette } from "../functions/getData";
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
type PaletteState = {
	palette: PaletteInterface;
	colours: string[];
};

class ColourPalette extends React.Component<PaletteProps, PaletteState> {
	state: PaletteState = {
		palette: {
			id: -2,
			name: "",
			theme: "",
			colours: "#ffffff",
			user_id: 0,
			public: 0,
		},
		colours: ["#ffffff"],
	};
	updateParent = () => {
		this.setState({});
	};
	initialisePalette = (input: PaletteInterface) => {
		this.setState({ palette: input });
	};
	initialiseColours = (colours: string[]) => {
		this.setState({ colours: colours });
	};
	setPalette = (input: PaletteInterface) => {
		this.setState({ palette: input });
		console.log("set palette", this.state.palette);
	};
	setColours = (colour: string, index: number) => {
		const newColours = this.state.colours;
		newColours[index] = colour;

		this.setState({ colours: newColours });
	};
	addColours = (colour: string) => {
		const newColours = this.state.colours;
		newColours.push(colour);
		this.setState({ colours: newColours });
	};
	removeColours = (index: number) => {
		const newColours = this.state.colours;
		newColours.splice(index, 1);

		this.setState({ colours: newColours });
	};

	// updatePalette = () => {
	// 	const newPalette: PaletteInterface = await getOnePalette(
	// 		this.props.palette.id
	// 	);
	// 	//console.log("updatePalette:", newPalette);
	// 	this.setPalette(newPalette);
	// 	//console.log("state palette update", this.state.palette);
	// 	//this.props.setUpdate(update);
	// };

	render() {
		if (this.state.palette.id === -2) {
			this.initialisePalette(this.props.palette);
			this.initialiseColours(
				this.props.palette.colours
					.slice(1, -1)
					.replace(/[']/g, "")
					.split(", ")
			);
			console.log("state palette null", this.state.palette);
			//this.props.setUpdate(this.state.palette);
			console.log("props palette null", this.props.palette);
		}
		// if (this.state.palette.colours !== this.props.palette.colours) {
		// 	this.updatePalette();
		// 	console.log("state palette update", this.state.palette);
		// 	this.props.setUpdate(this.state.palette);
		// 	console.log("props palette update", this.props.palette);
		// }
		//updatePalette();
		// const swatches = this.state.palette.colours
		// 	.slice(1, -1)
		// 	.replace(/[']/g, "")
		// 	.split(", ");
		return (
			<ColourPaletteSC id={this.props.palette.name}>
				<PaletteHeaderSC>{this.props.palette.name}</PaletteHeaderSC>
				<SwatchContainerSC>
					{this.state.colours.map((color, index) => {
						//console.log(InputColour, hexToHSV(InputColour));
						//console.log(InputColour);
						return (
							<ColourSwatchSC
								paletteId={this.props.palette.id}
								hex={color}
								id={color}
								index={index}
								key={color}
								updateParent={this.updateParent}
								setColours={this.setColours}
								addColours={this.addColours}
								removeColours={this.removeColours}
							></ColourSwatchSC>
						);
					})}
				</SwatchContainerSC>
				<GradientBarSC
					gradient={this.state.colours.join(",")}
				></GradientBarSC>
			</ColourPaletteSC>
		);
	}
}

export default ColourPalette;
