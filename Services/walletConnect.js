import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Container, Text } from "../components/core";
import { Context } from "../Providers/provider";
import { GlobalStyles } from "../styles/styles";

export default function WalletConnect() {
	const navigation = useNavigation();
	const { setLoggedIn } = useContext(Context);
	return (
		<Container>
			<Container
				style={GlobalStyles.button}
				onPress={() => {
					setLoggedIn(true);
					navigation.navigate("tabs");
				}}>
				<Text style={GlobalStyles.buttonText}>Login With Wallet Connect</Text>
			</Container>
		</Container>
	);
}
