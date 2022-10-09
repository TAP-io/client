import React, { useEffect, useState } from "react";
import { Container, ScreenWrapper, Text } from "../components/core";
import WalletConnect from "../Services/walletConnect";
import LoginButton from "../Services/web3Auth";
import { GlobalStyles } from "../styles/styles";

export default function Login() {
	
	return (
		<ScreenWrapper>
			<Container style={GlobalStyles.pageHeader}>
				<Text title primaryDark>
					Welcome
				</Text>
			</Container>
			<Container column justifyStart alignCenter>
				<Text>First Time Using Crypto?</Text>

				<LoginButton />
				<Text>Have a wallet?</Text>
				<WalletConnect />
			</Container>
		</ScreenWrapper>
	);
}
