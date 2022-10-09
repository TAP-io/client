import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Web3Auth, {
	LOGIN_PROVIDER,
	OPENLOGIN_NETWORK,
	State,
} from "@web3auth/react-native-sdk";
import Constants, { AppOwnership } from "expo-constants";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import { Buffer } from "buffer";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../styles/styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Container, Icon, Button } from "../components/core";
import "react-native-get-random-values";
import "@ethersproject/shims";
import { ethers } from "ethers";
global.Buffer = global.Buffer || Buffer;

const scheme = "ETHBogota";

const resolvedRedirectUrl =
	Constants.appOwnership == AppOwnership.Expo ||
	Constants.appOwnership == AppOwnership.Guest
		? Linking.createURL("web3auth", {})
		: Linking.createURL("web3auth", { scheme: scheme });
const web3auth = new Web3Auth(WebBrowser, {
	clientId:
		"BLhFktms1_sFdBxErmTjBKhvgmgIklYJhGBxb-U0j0sdYT6JYoeFXW_Vyn7FdUX3fHfoNKwzR8P1uPvwvsF6c-c",
	network: OPENLOGIN_NETWORK.TESTNET,
});

export async function getWeb3AuthState() {
	const state = await web3auth.login({
		loginProvider: LOGIN_PROVIDER.GOOGLE,
		redirectUrl: resolvedRedirectUrl,
	});
	return state;
}
export default function LoginButton() {
	const navigation = useNavigation();
	const [key, setKey] = useState("");
	const [errorMsg, setErrorMsg] = useState("");
	const [userInfo, setUserInfo] = useState(null);

	const login = async () => {
		try {
			const state = await getWeb3AuthState();
			console.log(state);
			setKey(state.privKey || "no key");

			setUserInfo(state);

			const provider = ethers.providers.InfuraProvider();
			// Add the keys back in
			const signer = new ethers.Wallet(key, provider);
			console.log({ signer });
			console.log("=======================================");
			// await AsyncStorage.setItem("address", state.privKey);
			// navigation.navigate("tabs");
		} catch (e) {
			console.error(e);
			setErrorMsg(JSON.stringify(e));
		}
	};
	return (
		<View style={styles.container}>
			{/* <Text>Address: {address}</Text>
			{key !== "" ? <Text>Key: {key}</Text> : null}
			{userInfo !== null ? (
				<Text>UserInfo: {JSON.stringify(userInfo)}</Text>
			) : null}
			{errorMsg !== "" ? <Text>Error: {errorMsg}</Text> : null}
			<Text>Linking URL: {resolvedRedirectUrl}</Text> */}
			<Button
				onPress={login}
				marginB={5}
				marginT={10}
				variant="contained"
				isFullWidth>
				Login with Socials
			</Button>

			<Container row justifyCenter>
				<Icon name="google" type="MaterialCommunity" secondary />
			</Container>

			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
