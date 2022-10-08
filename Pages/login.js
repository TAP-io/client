import React from "react";
import { ScreenWrapper, Text } from "../components/core";
import LoginButton from "../Services/web3Auth";

export default function Login() {
	return (
		<ScreenWrapper>
			<Text>Login</Text>
			<LoginButton />
		</ScreenWrapper>
	);
}
