import React from "react";
import Text from "./text";
import Container from "./container";
import { Colors, Dim } from "../../styles/styles";
import { TouchableOpacity, View } from "react-native";
import { MaterialIndicator } from "react-native-indicators";

/**
 Props: 
 size: sm | md (default) | lg | isFullWidth (100%)
 variant: contained| outlined | text
 icon: 
	iconType (string) = icon library to pull from
	iconName (string) = name of icon - no icon if name is not supplied
	iconEnd = icon on left

 */
export default function Button(props) {
	// size / position / text
	let width = null;
	let minWidth = null;
	let padding = 4;
	let margin = 1;
	let fontSize = 18;
	let fontWeight = 500;
	let fontFamily = "Ubuntu_400Regular";
	if (props.margin) {
		margin = props.margin;
	}
	if (props.size === "xs") {
		padding = 4;
		fontSize = 12;
		minWidth = 50;
		fontFamily = "Ubuntu_400Regular";
	}
	if (props.size === "sm") {
		padding = 5;
		minWidth = 60;
		fontSize = 14;
		fontFamily = "Ubuntu_400Regular";
	} else if (props.size === "md" || props.size === undefined) {
		padding = 6;
		minWidth = 90;
		fontSize = 16;
		fontFamily = "Ubuntu_500Medium";
	} else if (props.size === "lg") {
		padding = 8;
		minWidth = 120;
		fontSize = 20;
		fontFamily = "Ubuntu_600SemiBold";
	}
	if (props.isFullWidth) {
		width = "100%";
	}
	if (props.isHalfWidth) {
		width = "48%";
	}
	if (props.minWidth) {
		width = null;
		minWidth = null;
	}
	if (props.width) {
		width = props.width;
	}

	// border
	let borderWidth = 0;
	let borderColor = null;
	let borderRadius = 5;
	// color
	let textColor = Colors.text;
	let backgroundColor = Colors.button;
	let opacity = 1;

	if (props.disabled) {
		opacity = 0.5;
	}
	// Variants
	if (props.variant === "contained") {
		backgroundColor = Colors.primary;
		borderWidth = 1;
		borderColor = Colors.primary;
	}
	if (props.variant === "primary") {
		backgroundColor = Colors.primaryButton;
		textColor = Colors.primaryButtonText;
		borderColor = "transparent";
	}
	if (props.variant === "accent1") {
		backgroundColor = Colors.accent1Button;
		textColor = Colors.accent1ButtonText;
		borderColor = "transparent";
	}
	if (props.variant === "accent2") {
		backgroundColor = Colors.accent2Button;
		textColor = Colors.accent2ButtonText;
		borderColor = "transparent";
	}
	if (props.variant === "outlined") {
		borderWidth = 1;
		backgroundColor = "transparent";
		borderColor = Colors.border;
		textColor = Colors.text;
	} else if (props.variant === "text") {
		backgroundColor = "transparent";
		borderColor = "transparent";
		textColor = Colors.text;
	} else if (props.variant === "link") {
		backgroundColor = "transparent";
		borderColor = "transparent";
		textColor = Colors.textLink;
	} else if (props.variant === "success") {
		backgroundColor = Colors.success;
		borderColor = Colors.success;
	} else if (props.variant === "danger") {
		backgroundColor = Colors.danger;
		borderColor = Colors.danger;
	}

	return (
		<TouchableOpacity
			onPress={props.onPress}
			disabled={props.disabled}
			style={{
				width: width,
				alignSelf: "center",
				padding: margin,
				paddingTop: props.marginT,
				paddingBottom: props.marginB,
				paddingLeft: props.marginL,
				paddingRight: props.marginR,
				paddingHorizontal: props.marginX,
				marginVertical: props.marginY,
			}}>
			<Container
				alignCenter
				justifyCenter
				row
				style={{
					width: !props.isHalfWidth ? width : "100%",
					minWidth: minWidth,
					opacity: opacity,
					backgroundColor: backgroundColor,
					borderColor: borderColor,
					borderWidth: borderWidth,
					paddingVertical: padding,
					paddingHorizontal: padding * 2 + 5,
					borderRadius: borderRadius,
					borderTopLeftRadius: borderRadius,
					borderBottomLeftRadius: borderRadius,
					alignSelf: "center",
					flexDirection: "row",
					flex: props.flex,
					...props.style,
				}}>
				{props.isLoading && (
					<View marginRight={props.loadingText ? 5 : 0}>
						<MaterialIndicator size={fontSize} color={textColor} />
					</View>
				)}
				{props.leftIcon && !props.isLoading && (
					<View marginRight={padding / 2}>{props.leftIcon}</View>
				)}

				<Text
					buttonText
					center
					style={{
						color: textColor,
						fontSize: fontSize,
						fontFamily: fontFamily,
					}}>
					{!props.isLoading
						? props.children
						: props.loadingText
						? props.loadingText
						: ""}
				</Text>
				{props.rightIcon && !props.isLoading && (
					<View marginLeft={padding / 2}>{props.rightIcon}</View>
				)}
			</Container>
		</TouchableOpacity>
	);
}
