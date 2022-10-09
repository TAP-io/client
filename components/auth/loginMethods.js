import React from "react";
import { Container, Icon, ScreenWrapper, Text } from "../core";
import WalletConnect from "../../Services/walletConnect";
import LoginButton from "../../Services/web3Auth";
import { Colors, Dim, GlobalStyles } from "../../styles/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
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
					borderRadius: "50%",
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
					Welcome to Tap.io
				</Text>
			</Container>
			<Text subTitle primaryDark>
				Ready to get tappin'?
			</Text>
			<Container paddingT={20} column justifyStart alignCenter>
				<Text>New to crypto?</Text>
				<LoginButton />
				<Text marginT={30}>Have a wallet?</Text>
				<WalletConnect />
			</Container>
		</Container>
	);
}
