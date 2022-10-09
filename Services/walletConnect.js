import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Button, Container, Text } from "../components/core";
import { Context } from "../Providers/provider";
import { GlobalStyles } from "../styles/styles";

export default function WalletConnect() {
	const navigation = useNavigation();
	const { setLoggedIn } = useContext(Context);
	return (
		<Container>
			<Button
				isFullWidth
				variant="contained"
				onPress={() => {
					setLoggedIn(true);
					navigation.navigate("tabs");
				}}>
				Add A Wallet
			</Button>
		</Container>
	);
}
