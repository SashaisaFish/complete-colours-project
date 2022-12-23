import React, { useEffect } from "react";
import { useState } from "react";
import ColourPalette from "../components/ColourPalette";
import { useNavigate } from "react-router-dom";
import {
	SidebarUlSC,
	SidebarLiSC,
	SidebarLinkSC,
	ThemeContainerSC,
	ThemeHeaderSC,
	PaletteListSC,
	SidebarMainSC,
	SidebarDivSC,
	SidebarButtonSC,
	SidebarSC,
	ThemeListSC,
} from "../styles/styledComponents";
import PaletteInterface from "../types/paletteInterface";
import getUserId from "../functions/getUserId";
import { getThemedPalettes, getThemes } from "../functions/getData";
import { LeftArrow, RightArrow } from "../components/SvgComponents";
import ThemedPalettes from "../components/ThemedPalettes";

const Themes: React.FC = () => {
	const id = getUserId();
	const [show, setShow] = useState(false);
	const [ThemesList, setThemesList] = useState<string[]>([]);
	const [Palettes, setPalettes] = useState<PaletteInterface[]>([]);
	const [loaded, setLoaded] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const loggedInUser = localStorage.getItem("id");
		if (!loggedInUser || loggedInUser === "-1") {
			navigate("/");
		}
	});
	const setDataThemes = async () => {
		if (typeof id === "string") {
			const data = await getThemes(id);
			console.log("themes", data);
			setThemesList(data);
		}
	};
	const setThemedPalettes = async (index: number) => {
		const data: PaletteInterface[] = await getThemedPalettes(
			id,
			ThemesList[index]
		);
		return data;
		// setPalettes(data);
		// console.log("Palettes:", data);
	};
	useEffect(() => {
		setDataThemes();
	}, []);

	return (
		<SidebarMainSC>
			<SidebarDivSC>
				<SidebarButtonSC
					style={{ display: show ? "unset" : "none" }}
					onClick={() => {
						setShow(!show);
					}}
				>
					<LeftArrow />
				</SidebarButtonSC>
				<SidebarButtonSC
					style={{ display: show ? "none" : "unset" }}
					onClick={() => {
						setShow(!show);
					}}
				>
					<RightArrow />
				</SidebarButtonSC>
				<SidebarSC style={{ display: show ? "unset" : "none" }}>
					<SidebarUlSC>
						{ThemesList.map((theme: string, index: number) => {
							return (
								<SidebarLiSC key={`${index}-${theme}`}>
									<SidebarLinkSC href={`#${theme}`}>
										{theme}
									</SidebarLinkSC>
								</SidebarLiSC>
							);
						})}
					</SidebarUlSC>
				</SidebarSC>
			</SidebarDivSC>
			<ThemeListSC>
				{ThemesList.map((theme: string) => {
					return <ThemedPalettes theme={theme} />;
				})}
			</ThemeListSC>
		</SidebarMainSC>
	);
};

export default Themes;
