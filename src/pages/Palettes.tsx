import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ColourPalette from "../components/ColourPalette";
import { LeftArrow, RightArrow } from "../components/SvgComponents";
import { getPalettes } from "../functions/getData";
import getUserId from "../functions/getUserId";
import {
	PaletteListSC,
	SidebarButtonSC,
	SidebarDivSC,
	SidebarLinkSC,
	SidebarLiSC,
	SidebarMainSC,
	SidebarSC,
	SidebarUlSC,
} from "../styles/styledComponents";
import PaletteInterface from "../types/paletteInterface";

const Palettes: React.FC = () => {
	const id = getUserId();
	const [Palettes, setPalettes] = useState<PaletteInterface[]>([]);
	//const [loaded, setLoaded] = useState(false);
	// to show sidebar
	const [show, setShow] = useState(false);
	// get all palettes for user
	const setData = async () => {
		if (typeof id === "string") {
			const data: PaletteInterface[] = await getPalettes(id);
			// response: data = [{Palette}]
			setPalettes(data);
		}
	};
	// call get palettes function on load
	useEffect(() => {
		setData();
	}, []);
	// to navigate pages
	const navigate = useNavigate();
	useEffect(() => {
		const loggedInUser = localStorage.getItem("id");
		if (!loggedInUser || loggedInUser === "-1") {
			navigate("/");
		}
	});
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
						{Palettes.map((palette: PaletteInterface, index) => {
							return (
								<SidebarLiSC key={`${index}-${palette.name}`}>
									<SidebarLinkSC href={`#${palette.name}`}>
										{palette.name}
									</SidebarLinkSC>
								</SidebarLiSC>
							);
						})}
					</SidebarUlSC>
				</SidebarSC>
			</SidebarDivSC>
			<PaletteListSC>
				{Palettes.map((palette: PaletteInterface) => {
					//setUpdate(palette);
					return <ColourPalette palette={palette} key={palette.id} />;
				})}
			</PaletteListSC>
		</SidebarMainSC>
	);
};

export default Palettes;
