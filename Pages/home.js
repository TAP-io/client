import React from "react";
import { Text, View } from "react-native";
import ScreenWrapper from "../components/core/screenWrapper";
import DeepLinking from "../components/linking/DeepLinking";

export default function Home() {
	return (
		<ScreenWrapper>
			<DeepLinking />
			<Text>Home Screen</Text>
		</ScreenWrapper>
	);
}
