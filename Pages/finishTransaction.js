import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
	Button,
	Container,
	Icon,
	ScreenWrapper,
	Text,
} from "../components/core";
import { GlobalStyles } from "../styles/styles";

export default function FinishTransaction({}) {
	const navigation = useNavigation();
	const [success, setSuccess] = useState(true);
	return (
		<ScreenWrapper>
			<Container
				onPress={() => setSuccess(!success)}
				style={{ ...GlobalStyles.pageHeader, justifyContent: "space-between" }}>
				<Text title>
					{success ? "Transaction Successful" : "Transaction Failed"}
				</Text>
				<Icon
					name={success ? "check" : "error"}
					xl
					success={success}
					danger={!success}
				/>
			</Container>
			<Button
				leftIcon={<Icon name="home" />}
				fullWidth
				variant="outlined"
				onPress={() => {
					navigation.navigate("home-tab");
				}}>
				Take Me Home
			</Button>
		</ScreenWrapper>
	);
}
