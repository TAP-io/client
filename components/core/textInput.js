import React, { useEffect, useState } from "react";
import {
	KeyboardAvoidingView,
	TextInput as RN_TextInput,
	View,
	Platform,
} from "react-native";
import { Font, Dim, Colors } from "../../styles/styles";
import Container from "./container";
export default function TextInput(props) {
	let width = undefined;
	const [focused, setFocused] = useState(false);
	let marginVertical = 10;
	if (props.sm) {
		width = Dim.width * 0.4;
	} else if (props.md) {
		width = Dim.width * 0.6;
	} else if (props.lg) {
		width = Dim.width * 0.8;
	}
	if (props.fullWidth) {
		width = "100%";
	}
	if (props.marginY) {
		marginVertical = marginY;
	}
	// useEffect(() => {
	// 	if (props.ref) {
	// 		const mounted = props.ref.current;
	// 		console.log({ mounted });
	// 	}
	// }, []);

	return (
		<View
			style={{
				flex: props.flex,
				width,
				minHeight: 20,
				borderColor: !props.borderColor
					? focused
						? Colors.primary
						: Colors.textSecondary + "70"
					: props.borderColor,
				borderWidth: 1.125,
				borderRadius: 5,
				paddingRight: 1,
				marginVertical: marginVertical,
				marginHorizontal: props.marginX,
				marginTop: props.marginT,
				marginRight: props.marginR,
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-between",
				flexWrap: "nowrap",
			}}>
			{props.leftAdornment && (
				<Container column justifyCenter alignCenter flex={0}>
					{props.leftAdornment}
				</Container>
			)}

			<RN_TextInput
				style={{
					flex: 1,
					width: "100%",
					color: Colors.text,
					paddingVertical: 8,
					paddingHorizontal: 10,
					fontSize: Font.body.size,
					fontFamily: Font.body.family,
					alignSelf: "center",
					...props.style,
				}}
				keyboardType={props.keyboardType || "default"}
				placeholderTextColor={Colors.textSecondary}
				selectionColor={Colors.primary}
				onFocus={() => {
					setFocused(true);
				}}
				onBlur={() => {
					setFocused(false);
				}}
				clearButtonMode="always"
				// TODO: ^ make clear mode dynamic
				ref={props.inputRef}
				{...props}
			/>
			{props.rightAdornment && <View>{props.rightAdornment}</View>}
		</View>
	);
}
