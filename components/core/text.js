import React from "react";
import { Text as RN_Text } from "react-native";
import { Colors, Font } from "../../styles/styles";

/*
  -- DOCUMENTATION --
  children (string): Text to be rendered.
  title | titleBold | subTitle | subTitleBold | bodyLarge | body (default) | small | smallBold
  Italic: ^^ + _Italic 
  Positioning: left (default) | right | center 
  style (JS Object): All style props.

  Colors: (defaults to text. only apply one.)
  These should be updated periodically to reflect styles.js
  colors.text
  secondary =  colors.textSecondary //dynamic
  primary = Colors.COLOR_PRIMARY_DEFAULT 
  accent1 = Colors.COLOR_ACCENT_DEFAULT
  accent2 = Colors.COLOR_ACCENT2_DEFAULT



  RN Text props (see RN docs):
    numberOfLines (number)
    ellipsisMode (string)
    onPress (function)
    textBreakStrategy (string)
*/

export default function Text(props) {
	let color = Colors.text;
	let textAlign = "left";
	let font = Font.body;
	let wrap = 0;
	if (props.extraLarge) {
		font = Font.extraLarge;
	} else if (props.title) {
		font = Font.title;
	} else if (props.titleBold) {
		font = Font.titleBold;
	} else if (props.subTitle) {
		font = Font.subTitle;
	} else if (props.subTitleBold) {
		font = Font.subTitleBold;
	} else if (props.bodyLarge) {
		font = Font.bodyLarge;
	} else if (props.bodyBold) {
		font = Font.bodyBold;
	} else if (props.small) {
		font = Font.small;
	} else if (props.smallBold) {
		font = Font.smallBold;
	} else if (props.title_Italic) {
		font = Font.title_Italic;
	} else if (props.titleBold_Italic) {
		font = Font.titleBold_Italic;
	} else if (props.subTitle_Italic) {
		font = Font.subTitle_Italic;
	} else if (props.subTitleBold_Italic) {
		font = Font.subTitleBold_Italic;
	} else if (props.body_Italic || props.italic) {
		font = Font.body_Italic;
	} else if (props.bodyLarge_Italic) {
		font = Font.bodyLarge_Italic;
	} else if (props.bodyBold_Italic) {
		font = Font.bodyBold_Italic;
	} else if (props.small_Italic) {
		font = Font.small_Italic;
	} else if (props.smallBold_Italic) {
		font = Font.smallBold_Italic;
	} else if (props.buttonText) {
		font = Font.buttonText;
	} else if (props.buttonTextSmall) {
		font = Font.buttonTextSmall;
	} else if (props.buttonTextLarge) {
		font = Font.buttonTextLarge;
	}

	if (props.center) {
		textAlign = "center";
	} else if (props.right) {
		textAlign = "right";
	} else {
		textAlign = "left";
	}

	if (props.secondary) {
		color = Colors.textSecondary;
	} else if (props.primary) {
		color = Colors.primary;
	} else if (props.accent1) {
		color = Colors.accent1;
	} else if (props.accent2) {
		color = Colors.accent2;
	} else if (props.success) {
		color = Colors.success;
	} else if (props.error) {
		color = Colors.danger;
	} else if (props.link) {
		color = Colors.textLink;
	}

	if (props.white) {
		color = Colors.white;
	}
	if (props.black) {
		color = Colors.black;
	}
	if (props.urgent) {
		color = Colors.urgent;
	}
	if (props.wrap) {
		wrap = 1;
	}

	return (
		<RN_Text
			numberOfLines={props.numberOfLines}
			ellipsisMode={props.ellipsizeMode}
			onPress={props.onPress}
			textBreakStrategy={props.textBreakStrategy}
			style={{
				color,
				fontSize: font.size,
				fontFamily: font.family,
				textAlign: textAlign,
				paddingVertical: props.paddingY,
				paddingHorizontal: props.paddingX,
				paddingLeft: props.paddingL,
				paddingRight: props.paddingR,
				paddingTop: props.paddingT,
				paddingBottom: props.paddingB,
				padding: props.padding,
				marginVertical: props.marginY,
				marginHorizontal: props.marginX,
				marginLeft: props.marginL,
				marginRight: props.marginR,
				marginTop: props.marginT,
				marginBottom: props.marginB,
				margin: props.margin,
				flexShrink: wrap,

				...props.style,
			}}>
			{props.children}
		</RN_Text>
	);
}
