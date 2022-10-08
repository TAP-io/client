import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import InitialRouter from "./Router/initialRouter";
import * as WebBrowser from "expo-web-browser";
import Web3Auth, {
	LOGIN_PROVIDER,
	OPENLOGIN_NETWORK,
	State,
} from "@web3auth/react-native-sdk";
import WalletConnectProvider from "@walletconnect/react-native-dapp";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Provider } from "./Providers/provider";
import { Platform } from "react-native";

export default function App() {
	const web3auth = new Web3Auth(WebBrowser, {
		clientId:
			"BC5bANkU4-BLhFktms1_sFdBxErmTjBKhvgmgIklYJhGBxb-U0j0sdYT6JYoeFXW_Vyn7FdUX3fHfoNKwzR8P1uPvwvsF6c-c",
		network: OPENLOGIN_NETWORK.TESTNET,
		whiteLabel: {
			name: "My App",
			logoLight: "https://web3auth.io/images/logo-light.png",
			logoDark: "https://web3auth.io/images/logo-dark.png",
			defaultLanguage: "en",
			dark: true,
			theme: {
				primary: "#cddc39",
			},
		},
	});
	return (
		// <WalletConnectProvider
		// 	redirectUrl={Platform.OS === "web" ? window.location.origin : "ETHBogota"}
		// 	storageOptions={{ asyncStorage: AsyncStorage }}>
		<Provider>
			<NavigationContainer>
				<InitialRouter />
			</NavigationContainer>
		</Provider>
		// </WalletConnectProvider>
	);
}
