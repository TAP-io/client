import React, { useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Container, Icon, Button } from "../components/core";
import "react-native-get-random-values";
import "@ethersproject/shims";

import { ethers } from "ethers";
import { Context } from "../Providers/provider";
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
	const { setAddress } = useContext(Context);
	const navigation = useNavigation();
	const [key, setKey] = useState("");
	const [errorMsg, setErrorMsg] = useState("");
	const [userInfo, setUserInfo] = useState(null);

	const login = async () => {
		try {
			console.log("here");
			const state = await getWeb3AuthState();
			console.log("just fetched state");
			console.log(state.userInfo);

			setKey(state.privKey || "no key");
			setUserInfo(state);
			console.log("now here");
			const provider = new ethers.providers.InfuraProvider(
				"maticmum",
				"85dd1f2ff5714888b2ad407c14147db5"
			);
			// Add the keys back in
			const signer = new ethers.Wallet(key, provider);
			console.log(state.privKey, signer.address, state.userInfo.name);
			await AsyncStorage.setItem("@priv_key", "0x" + state.privKey);
			await AsyncStorage.setItem("@address", signer.address);
			if (state.userInfo.name) {
				await AsyncStorage.setItem("@name", state.userInfo.name);
			}
			setAddress(signer.address);

			// navigation.navigate("tabs");
		} catch (e) {
			console.error(e);
			setErrorMsg(JSON.stringify(e));
		}
	};
	return (
		<>
			<Button
				onPress={login}
				marginB={5}
				marginT={10}
				variant="contained"
				leftIcon={<Icon name="google" type="MaterialCommunity" primaryDark />}>
				Login with Google
			</Button>
		</>
	);
}
