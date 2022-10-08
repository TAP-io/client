import React from "react";
import { Container, ScreenWrapper, Text } from "../components/core";
import { GlobalStyles } from "../styles/styles";

export default function SendCurrency() {
	return (
		<ScreenWrapper goBack>
			<Container style={GlobalStyles.pageHeader}>
				<Text title>Send Currency</Text>
			</Container>
		</ScreenWrapper>
	);
}
