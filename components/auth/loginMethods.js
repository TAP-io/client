import React, { useContext } from "react";
import { Button, Container, Icon, ScreenWrapper, Text } from "../core";
import WalletConnect from "../../Services/walletConnect";
import LoginButton from "../../Services/web3Auth";
import { Colors, Dim, GlobalStyles } from "../../styles/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Linking from "expo-linking";
import { Share } from "react-native";
import { Context } from "../../Providers/provider";

export default function Login() {
	const { isSpanish } = useContext(Context);
	const title = isSpanish ? "" : "Welcome to Tap Me";
	const subTitle = isSpanish ? "" : "Ready to get tappin'?";

	const line1 = isSpanish ? "" : "New to web3?";
	const line2 = isSpanish ? "" : "Have a wallet?";
	let loginWrapper = {
		position: "absolute",
		height: Dim.height,
		width: Dim.width,
		backgroundColor: Colors.fg,
		zIndex: 100,
		paddingTop: 100,
	};
	return (
		<Container
			style={{
				...loginWrapper,
			}}>
			<Container
				style={{
					backgroundColor: Colors.primaryDark,
					padding: 10,
					borderRadius: 50,
				}}>
				<Icon
					name="contactless-payment"
					primary
					type={"MaterialCommunity"}
					xl
				/>
			</Container>
			<Container style={GlobalStyles.pageHeader}>
				<Text title primaryDark>
					{title}
				</Text>
			</Container>
			<Text subTitle primaryDark>
				{subTitle}
			</Text>
			<Container paddingT={20} column justifyStart alignCenter>
				<Text>{line1}</Text>
				<LoginButton />
				<Text marginT={30}>{line2}</Text>
				<WalletConnect />
			</Container>
		</Container>
	);
}
