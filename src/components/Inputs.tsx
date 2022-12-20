import React from "react";
import { RadioLegendSC } from "../styles/styledComponents";

interface InputProps {
	className?: string;
	id?: string;
	value?: string | number;
	label?: string;
	legend?: string;
	autocomplete?: "on" | "off";
	required?: boolean;
	checked?: boolean;
	children?: React.ReactNode | React.ReactNode[];
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
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
export const CheckInput: React.FC<InputProps> = (props) => {
	return (
		<>
			<label htmlFor={props.id}>{props.label}</label>
			<input
				type="checkbox"
				name={props.id}
				id={props.id}
				value={props.value}
				checked={props.checked}
			/>
		</>
	);
};
export const RadioInput: React.FC<InputProps> = (props) => {
	return (
		<div className={props.className}>
			<label htmlFor={props.label}>{props.label}</label>
			<input
				type="radio"
				name={props.id}
				id={props.label}
				value={props.value}
				checked={props.checked}
			/>
		</div>
	);
};
export const RadioField: React.FC<InputProps> = (props) => {
	return (
		<fieldset className={props.className}>
			<RadioLegendSC>{props.legend}</RadioLegendSC>
			{props.children}
		</fieldset>
	);
};
export const SubmitInput: React.FC<InputProps> = (props) => {
	return (
		<input className={props.className} type="submit" value={props.value} />
	);
};
