// File: Reusable loading wrapper
// Default
import React from "react";
// Libraries
import { BarIndicator } from "react-native-indicators";
import { View } from "react-native";
import { Colors } from "../../styles/styles";

export default function LoadingWrapper({
	loading,
	children,
	type,
	fullHeight,
}) {
	if (loading) {
		return (
			<View style={{ padding: 20, height: fullHeight ? "100%" : undefined }}>
				{(!type || type === "wave") && <BarIndicator color={Colors.primary} />}
				{/* {type === "bar" && (
					<RaceBy className='loader' color={themeStyle.COLOR_PRIMARY_LIGHT} />
				)}
				{type === "ripples" && (
					<Ripples className='loader' color={themeStyle.COLOR_PRIMARY_LIGHT} />
				)}
				{type === "dot-spinner" && (
					<DotSpinner
						className='loader'
						color={themeStyle.COLOR_PRIMARY_LIGHT}
					/>
				)} */}
			</View>
		);
	} else return children;
}
