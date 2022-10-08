import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Web3Auth, {
	LOGIN_PROVIDER,
	OPENLOGIN_NETWORK,
	State,
} from "@web3auth/react-native-sdk";
import Constants, { AppOwnership } from "expo-constants";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import { Buffer } from "buffer";

global.Buffer = global.Buffer || Buffer;

const scheme = "web3authexposample";

const resolvedRedirectUrl =
	Constants.appOwnership == AppOwnership.Expo ||
	Constants.appOwnership == AppOwnership.Guest
		? Linking.createURL("web3auth", {})
		: Linking.createURL("web3auth", { scheme: scheme });

export default function LoginButton() {
	const [key, setKey] = useState("");
	const [errorMsg, setErrorMsg] = useState("");
	const [userInfo, setUserInfo] = useState(null);
	const login = async () => {
		try {
			const web3auth = new Web3Auth(WebBrowser, {
				clientId:
					"BC5bANkU4-BLhFktms1_sFdBxErmTjBKhvgmgIklYJhGBxb-U0j0sdYT6JYoeFXW_Vyn7FdUX3fHfoNKwzR8P1uPvwvsF6c-c",
				network: OPENLOGIN_NETWORK.TESTNET,
			});
			const state = await web3auth.login({
				loginProvider: LOGIN_PROVIDER.GOOGLE,
				redirectUrl: resolvedRedirectUrl,
			});
			setKey(state.privKey || "no key");
			setUserInfo(state);
		} catch (e) {
			console.error(e);
			setErrorMsg(JSON.stringify(e));
		}
	};
	return (
		<View style={styles.container}>
			{key !== "" ? <Text>Key: {key}</Text> : null}
			{userInfo !== null ? (
				<Text>UserInfo: {JSON.stringify(userInfo)}</Text>
			) : null}
			{errorMsg !== "" ? <Text>Error: {errorMsg}</Text> : null}
			<Text>Linking URL: {resolvedRedirectUrl}</Text>
			<Button title="Login with Web3Auth" onPress={login} />
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
