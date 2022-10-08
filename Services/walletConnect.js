import React from "react";
import { useWalletConnect } from "@walletconnect/react-native-dapp";
import { Container } from "../components/core";
export default function ConnectWallet({}) {
	const connector = useWalletConnect();
	return (
		<Container
			onPress={() => {
				connector.connect();
			}}>
			<Text>Connect Wallet</Text>
		</Container>
	);
}
