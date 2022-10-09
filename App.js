import React, { useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";

import { Context, Provider } from "./Providers/provider";
import {
	useFonts,
	Ubuntu_300Light,
	Ubuntu_300Light_Italic,
	Ubuntu_400Regular,
	Ubuntu_400Regular_Italic,
	Ubuntu_500Medium,
	Ubuntu_500Medium_Italic,
	Ubuntu_700Bold,
	Ubuntu_700Bold_Italic,
} from "@expo-google-fonts/ubuntu";
import {
	Roboto_100Thin,
	Roboto_100Thin_Italic,
	Roboto_300Light,
	Roboto_300Light_Italic,
	Roboto_400Regular,
	Roboto_400Regular_Italic,
	Roboto_500Medium,
	Roboto_500Medium_Italic,
	Roboto_700Bold,
	Roboto_700Bold_Italic,
	Roboto_900Black,
	Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";
import TabNavigator from "./Router/tabNavigator";
import Login from "./components/auth/loginMethods";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
	let [fontsLoaded] = useFonts({
		Ubuntu_300Light,
		Ubuntu_300Light_Italic,
		Ubuntu_400Regular,
		Ubuntu_400Regular_Italic,
		Ubuntu_500Medium,
		Ubuntu_500Medium_Italic,
		Ubuntu_700Bold,
		Ubuntu_700Bold_Italic,
		Roboto_100Thin,
		Roboto_100Thin_Italic,
		Roboto_300Light,
		Roboto_300Light_Italic,
		Roboto_400Regular,
		Roboto_400Regular_Italic,
		Roboto_500Medium,
		Roboto_500Medium_Italic,
		Roboto_700Bold,
		Roboto_700Bold_Italic,
		Roboto_900Black,
		Roboto_900Black_Italic,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<>
				<StatusBar style="auto" />
				<Provider>
					<NavigationContainer>
						<TabNavigator />
					</NavigationContainer>
				</Provider>
			</>
		);
	}
}
