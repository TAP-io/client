import React from "react";
import {
	MaterialIcons,
	MaterialCommunityIcons,
	Ionicons,
	SimpleLineIcons,
	Feather,
	FontAwesome,
	FontAwesome5,
} from "react-native-vector-icons";
import { Colors } from "../../styles/styles";
/* 
DOCUMENTATION
Props: icon type: Material (default) | Ion | MaterialCommunity .... keep adding as you need
    size : sm | md (default)| lg | xl

    color : text (default)  | textSecondary
            primary | primaryLight | primaryDark
            accent1 | accent1Light | accent1Light
            accent2 | accent2Light | accent2Dark
	positioning: 
		
*/
export default function Icon(props) {
	let color = Colors.text;
	let size = 18;

	if (props.sm) {
		size = 14;
	} else if (props.md) {
		size = 20;
	} else if (props.lg) {
		size = 28;
	} else if (props.xl) {
		size = 45;
	} else if (props.xxl) {
		size = 60;
	} else if (props.customSize) {
		size = props.customSize;
	}

	if (props.color) {
		color = props.color;
	}

	if (props.secondary) {
		color = Colors.textSecondary;
	} else if (props.border) {
		color = Colors.border;
	} else if (props.primary) {
		color = Colors.primary;
	} else if (props.primaryLight) {
		color = Colors.primaryLight;
	} else if (props.primaryDark) {
		color = Colors.primaryDark;
	} else if (props.accent1) {
		color = Colors.accent1;
	} else if (props.accent1Light) {
		color = Colors.accent1Light;
	} else if (props.accent1Dark) {
		color = Colors.accent1Dark;
	} else if (props.accent2) {
		color = Colors.accent2;
	} else if (props.accent2Light) {
		color = Colors.accent2Light;
	} else if (props.accent2Dark) {
		color = Colors.accent2Dark;
	} else if (props.danger) {
		color = Colors.danger;
	} else if (props.success) {
		color = Colors.success;
	} else if (props.yellow) {
		color = Colors.yellow;
	} else if (props.primaryButtonText) {
		color = Colors.primaryButtonText;
	} else if (props.accent1ButtonText) {
		color = Colors.accent1ButtonText;
	} else if (props.accent2ButtonText) {
		color = Colors.accent2ButtonText;
	}
	if (props.white) {
		color = Colors.white;
	}
	if (props.black) {
		color = Colors.black;
	}

	const iconStyle = {
		fontSize: size,
		color: color,
		paddingRight: props.paddingR,
		paddingLeft: props.paddingL,
		paddingHorizontal: props.paddingX,
		paddingVertical: props.paddingY,
		padding: props.padding,
		marginRight: props.marginR,
		marginLeft: props.marginL,
		marginTop: props.marginT,
		marginBottom: props.marginB,
		marginHorizontal: props.marginX,
		marginVertical: props.marginY,
		margin: props.margin,
		...(props.white && {
			color: "white",
		}),
	};

	if (props.type === "MaterialCommunity") {
		return (
			<MaterialCommunityIcons
				name={props.name}
				style={{ ...iconStyle, ...props.style }}
			/>
		);
	}

	if (props.type === "Ion") {
		return (
			<Ionicons name={props.name} style={{ ...iconStyle, ...props.style }} />
		);
	}
	if (props.type === "SimpleLine") {
		return (
			<SimpleLineIcons
				name={props.name}
				style={{ ...iconStyle, ...props.style }}
			/>
		);
	}
	if (props.type === "Feather") {
		return (
			<Feather name={props.name} style={{ ...iconStyle, ...props.style }} />
		);
	}
	if (props.type === "FontAwesome") {
		return (
			<FontAwesome name={props.name} style={{ ...iconStyle, ...props.style }} />
		);
	}
	if (props.type === "FontAwesome5") {
		return (
			<FontAwesome5
				name={props.name}
				style={{ ...iconStyle, ...props.style }}
			/>
		);
	} else {
		return (
			<MaterialIcons
				name={props.name}
				style={{ ...iconStyle, ...props.style }}
			/>
		);
	}
}
