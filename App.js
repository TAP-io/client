import React, { useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import InitialRouter from "./Router/initialRouter";
import AppLoading from "expo-app-loading";

import { Context, Provider } from "./Providers/provider";
import { getWeb3AuthState } from "./Services/web3Auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
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

export default function App() {
	const { setAddress, setLoggedIn } = useContext(Context);
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

	// async function checkLogin() {
	// 	let address = await AsyncStorage.getItem("@privKey")
	// 	if (!address){

	// 		const state = await getWeb3AuthState();
	// 		address = state.privKey
	// 	}
	// 	if (state.privKey ) {
	// 		setLoggedIn(true);
	// 		setAddress(state.privKey);
	// 	}
	// }

	// useEffect(() => {}, []);
	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<Provider>
				<NavigationContainer>
					<InitialRouter />
				</NavigationContainer>
			</Provider>
		);
	}
}
