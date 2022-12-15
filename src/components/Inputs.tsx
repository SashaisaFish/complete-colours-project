import React from "react";

interface InputProps {
	className?: string;
	id?: string;
	value?: string;
	label?: string;
	autocomplete?: "on" | "off";
	required?: boolean;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput: React.FC<InputProps> = (props) => {
	return (
		<>
			<label htmlFor={props.id}>{props.label}</label>
			<input
				className={props.className}
				type="text"
				name={props.id}
				id={props.id}
				autoComplete={props.autocomplete}
				required={props.required}
			/>
		</>
	);
};
export const SubmitInput: React.FC<InputProps> = (props) => {
	return (
		<input className={props.className} type="submit" value={props.value} />
	);
};
