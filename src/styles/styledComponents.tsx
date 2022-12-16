import styled from "styled-components";
import ColourSwatch from "../components/ColourSwatch";
import { TextInput, SubmitInput } from "../components/Inputs";
import { NavLink } from "react-router-dom";

// **GENERAL
export const SubmitSC = styled(SubmitInput)`
	cursor: pointer;
	font-family: var(--font-para);
	font-size: var(--font-size-small);
	margin: 1%;
	padding: 1%;
	border-radius: 5px;
	box-shadow: -5px 5px var(--accent-blue);
	transition: all 0.3s ease-in-out;
	&:hover {
		box-shadow: 5px 5px var(--accent-blue);
	}
	&:active {
		box-shadow: 0 0 2px var(--o-black) inset;
	}
`;

// **HEADER
export const AppHeaderSC = styled.header`
	background-image: linear-gradient(#043742, var(--accent-blue));
	width: 100vw;
	border-bottom: 2px solid var(--o-white);
	position: sticky;
	top: 0;
`;
export const AppTitleSC = styled.h1`
	font-family: var(--font-title);
	font-size: var(--font-size-title);
	margin: 1% auto;
	color: var(--text-background);
	text-shadow: 3px 3px var(--text-colour);
`;
export const NavContainer = styled.nav`
	display: flex;
	justify-content: space-between;
	width: 70vw;
	margin: 1.5% auto;
`;
export const NavButton = styled(NavLink)`
	font-family: var(--font-para);
	font-size: calc(var(--font-size-small) * 1.1);
	text-decoration: none;
	background-color: var(--accent-pink);
	padding: 0.8%;
	border-radius: 10px;
	box-shadow: -5px -5px var(--accent-yellow);
	transition: all 0.3s ease-out;

	&:link,
	&:visited {
		color: white;
		text-shadow: 1px 1px 1px var(--o-black);
	}
	&:hover {
		box-shadow: 5px -5px var(--accent-yellow);
	}
	&:active {
		box-shadow: 3px -3px var(--accent-yellow);
	}
`;
// **LOGIN
export const LoginFormSC = styled.form`
	display: flex;
	flex-direction: column;
	place-items: center;
`;
export const LoginInputSC = styled.input`
	font-family: var(--font-para);
	font-size: var(--font-size-small);
	text-align: center;
	width: 60vw;
	margin: 1%;
	padding: 1%;
	border-radius: 5px;
`;
export const LoginLabelSC = styled.label`
	font-family: var(--font-para);
	font-size: var(--font-size-small);
	color: var(--accent-blue);
`;
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
// **CONTAINER
export const PaletteHeaderSC = styled.h2`
	font-family: var(--font-display);
	font-size: var(--font-size-med);
`;
export const ColourPaletteSC = styled.article`
	display: flex;
	height: 70vh;
	width: 90vw;
	margin: 5vh auto;
	padding: 5%;
	background-color: var(--light-background);
	box-shadow: 0 0 4px 4px var(--dark-background) inset;
	border: 5px double var(--accent-blue);
	border-radius: 30px;
`;

// **SWATCH
export const ColourSwatchSC = styled(ColourSwatch)`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr repeat(5, min-content) 1fr;
	justify-items: center;
	flex-grow: 1;
	width: 100%;
	box-shadow: 0 0 0 2px var(--dark-background);
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
	border: 1px solid white;
	border-radius: 50%;
	height: 10em;
	width: 10em;
	&:hover {
		box-shadow: 0 0 4px 2px var(--o-white);
	}
	&::-webkit-color-swatch {
		border-radius: 50%;
		border: none;
	}
	&::-moz-color-swatch {
		border-radius: 50%;
		border: none;
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
		opacity: 100%;
		filter: drop-shadow(0 0 4px var(--o-white));
	}
`;
export const PlusButtonSC = styled.button`
	grid-row: 3 / 4;
	font-family: var(--font-title);
	font-size: var(--font-size-large);
	opacity: 50%;
	&:hover {
		opacity: 100%;
		text-shadow: 0 0 4px var(--o-white);
	}
`;
//  **SIDEBAR NAV
export const SidebarUlSC = styled.ul``;
export const SidebarLiSC = styled.li``;
export const SidebarLinkSC = styled(NavLink)``;
// **THEMES
export const ThemeContainerSC = styled.section``;
export const ThemeHeaderSC = styled.h3``;
