import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { Button, Container, Icon, Text } from "../components/core";
import { Context } from "../Providers/provider";

export default function WalletConnect() {
	const navigation = useNavigation();
	return (
		<Button
			variant="contained"
			onPress={() => {
				navigation.navigate("tabs");
			}}
			leftIcon={<Icon name="wallet" type="MaterialCommunity" primaryDark />}>
			Add A Wallet
		</Button>
	);
}
