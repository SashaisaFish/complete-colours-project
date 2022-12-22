import React from "react";

// Components
// > ColourSwatch.tsx

// export const ColourInput: React.FC<ColourInputProps> = (
// 	props,
// 	{ setColour }
// ) => {
// 	return (
// 		<input
// 			onChange={(e) => {
// 				setColour(e.target.value);
// 			}}
// 			className={props.className}
// 			type="color"
// 			name={`${props.id}-input`}
// 			id={`${props.id}-input`}
// 		/>
// 	);
// };

// ColourSwatch inside ColourPalette

// <ColourSwatchSC
// 		id={`${index}-${color}-container`}
// 		style={{ backgroundColor: swatches[index] }}
// 		key={`${index}-${color}`}
// 	>
// 		<ColourHexSC>{color}</ColourHexSC>
// 		<AddNewSC className="add-analogous">
// 			{/* onClick perform function to find analogous colour and then perform fetch
// 		to POST new entry with that colour value on database */}
// 			<LetterA />
// 		</AddNewSC>
// 		<AddNewSC className="add-complementary">
// 			{/* onClick perform function to find complementary colour and then perform fetch
// 		to POST on database, then refetch all  */}
// 			<LetterC />
// 		</AddNewSC>
// 		<ColourInputLabelSC htmlFor={color}>
// 			Click to Change Colour
// 		</ColourInputLabelSC>
// 		<ColourInputSC
// 			onInput={(
// 				e: React.ChangeEvent<HTMLInputElement>
// 			) => {
// 				if (e.target.value) {
// 					setColour(e.target.value);
// 				}
// 			}}
// 			onBlur={async (e) => {
// 				// PUT colour value in database to InputColour
// 				// paletteid, hex, index
// 				console.log(
// 					"palette id",
// 					palette.id,
// 					"colour",
// 					InputColour,
// 					"index",
// 					index
// 				);
// 				updatePaletteColour(
// 					palette.id,
// 					InputColour,
// 					index
// 				);
// 				const newSwatchArray = swatches;
// 				newSwatchArray[index] = InputColour;
// 				setSwatches(newSwatchArray);
// 				console.log(
// 					"updated colours",
// 					newSwatchArray
// 				);
// 			}}
// 			type="color"
// 			name={color}
// 			id={color}
// 			value={color}
// 			style={{
// 				backgroundColor: swatches[index],
// 			}}
// 		/>
// 	</ColourSwatchSC>
// );
