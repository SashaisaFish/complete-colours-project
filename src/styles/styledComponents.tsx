import styled from "styled-components";
import ColourSwatch from "../components/ColourSwatch";
import { TextInput, SubmitInput } from "../components/Inputs";
import { NavLink } from "react-router-dom";

// **NEW PALETTE
export const PaletteFormSC = styled.form`
	display: flex;
	flex-direction: column;
	place-items: center;
	background-color: var(--light-background);
	border: 6px double var(--accent-blue);
	box-shadow: 20px 20px var(--accent-yellow), -20px -20px var(--accent-pink);
	border-radius: 20px;
	padding: 3% 5%;
	margin: 5% auto;
`;

export const PaletteInputNameSC = styled(TextInput)`
	font-family: var(--font-para);
	font-size: var(--font-size-small);
	text-align: center;
	width: 60vw;
	margin: 1%;
	padding: 1%;
	border-radius: 5px;
`;
export const PaletteInputThemeSC = styled(TextInput)`
	font-family: var(--font-para);
	font-size: var(--font-size-small);
	text-align: center;
	width: 60vw;
	margin: 1%;
	padding: 1%;
	border-radius: 5px;
`;
export const PaletteFormSubmitSC = styled(SubmitInput)`
	font-family: var(--font-para);
	font-size: var(--font-size-small);
	margin: 1%;
	padding: 1%;
	border-radius: 5px;
	&:hover {
		box-shadow: 0 0 2px 1px white;
	}
	&:active {
		box-shadow: 0 0 2px var(--o-black) inset;
	}
`;

// **CONTAINER
export const PaletteHeaderSC = styled.h2`
	font-family: var(--font-display);
	font-size: var(--font-size-med);
`;
export const ColourPaletteSC = styled.article`
	display: flex;
	height: 60vh;
	width: 85vw;
	margin: 5vh auto;
`;

// **SWATCH
export const ColourSwatchSC = styled(ColourSwatch)`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr repeat(5, min-content) 1fr;
	justify-items: center;
	flex-grow: 1;
	width: 100%;
`;
export const ColourHexSC = styled.p`
	grid-row: 2 / 3;
	grid-column: 1 / 3;
	font-family: var(--font-para);
	font-weight: bolder;
	font-size: calc(var(--font-size-medium) * 2);
	text-shadow: 1px 1px 1px white;
	text-transform: uppercase;
`;
export const ColourInputSC = styled.input`
	grid-row: 4 / 5;
	grid-column: 1 / 3;
	margin: 2% auto;
	padding: 0;
	border: none;
	height: 10em;
	width: 10em;
	&::-webkit-color-swatch {
		border-radius: 50%;
		border: 1px solid white;
		box-shadow: 0 0 4px 2px var(--o-white);
	}
	&::-moz-color-swatch {
		border-radius: 50%;
		border: 1px solid white;
		box-shadow: 0 0 4px 2px var(--o-white);
	}
`;
export const ColourInputLabelSC = styled.label`
	grid-row: 5 / 6;
	grid-column: 1 / 3;
	font-family: var(--font-para);
	font-weight: bold;
	font-size: calc(var(--font-size-small) * 0.8);
	text-shadow: 1px 1px 1px white;
`;
export const AddNewSC = styled.button`
	grid-row: 3 / 4;
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;
	background-color: transparent;
	height: fit-content;
	width: fit-content;
	opacity: 50%;
	margin: 0;
	padding: 0;
	&:hover {
		filter: opacity(100%) drop-shadow(0 0 4px 2px white);
	}
`;
//  **SIDEBAR NAV
export const SidebarUlSC = styled.ul``;
export const SidebarLiSC = styled.li``;
export const SidebarLinkSC = styled(NavLink)``;
// **THEMES
export const ThemeContainerSC = styled.section``;
export const ThemeHeaderSC = styled.h3``;
