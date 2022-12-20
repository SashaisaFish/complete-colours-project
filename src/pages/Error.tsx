import React from "react";
import {
	ErrorContainerSC,
	ErrorHeaderSC,
	ErrorMessageSC,
} from "../styles/styledComponents";

const Error: React.FC = () => {
	return (
		<main>
			<ErrorContainerSC>
				<ErrorHeaderSC>Oops!</ErrorHeaderSC>
				<ErrorMessageSC>Something went wrong!</ErrorMessageSC>
			</ErrorContainerSC>
		</main>
	);
};

export default Error;
