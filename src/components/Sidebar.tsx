import React from "react";
import { SidebarButtonSC } from "../styles/styledComponents";
import { LeftArrow, RightArrow } from "./SvgComponents";

interface SidebarProps {
	className?: string;
	show?: boolean;
	onClick?: () => void;
	children?: React.ReactNode[] | React.ReactNode | undefined;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
	if (props.show) {
		return <div className={props.className}>{props.children}</div>;
	}
	return <div className={props.className}></div>;
};

export const SidebarButton: React.FC<SidebarProps> = (props) => {
	if (props.show) {
		return (
			<SidebarButtonSC>
				<LeftArrow size={32} />
			</SidebarButtonSC>
		);
	} else {
		return (
			<SidebarButtonSC>
				<RightArrow size={32} />
			</SidebarButtonSC>
		);
	}
};

export default Sidebar;
