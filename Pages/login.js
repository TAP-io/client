import React, { useContext, useEffect, useState } from "react";
import { Container, ScreenWrapper, Text } from "../components/core";
import { Context } from "../Providers/provider";
import WalletConnect from "../Services/walletConnect";
import LoginButton from "../Services/web3Auth";
import { GlobalStyles } from "../styles/styles";

export default function Login() {
	const { isSpanish } = useContext(Context);
	const title = isSpanish ? "" : "Welcome";
	const line1 = isSpanish ? "" : "New to web3?";
	const line2 = isSpanish ? "" : "Have a wallet?";
	return (
		<ScreenWrapper>
			<Container style={GlobalStyles.pageHeader}>
				<Text title primaryDark>
					{title}
				</Text>
			</Container>
			<Container column justifyStart alignCenter>
				<Text>{line1}</Text>

				<LoginButton />
				<Text>{line2}</Text>
				<WalletConnect />
			</Container>
		</ScreenWrapper>
	);
}
