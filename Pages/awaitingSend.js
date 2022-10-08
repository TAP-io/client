import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Container, ScreenWrapper, Text } from "../components/core";
import ScanImage from "../components/transaction/scanImage";
import { GlobalStyles } from "../styles/styles";
import SelectContact from "./selectContact";

export default function AwaitingSend() {
	const navigation = useNavigation();
	return (
		<ScreenWrapper goBack>
			<Container style={GlobalStyles.pageHeader}>
				<Text title center>
					Transaction Ready
				</Text>
			</Container>
			<SelectContact />
			<Container
				marginT={40}
				onPress={() => {
					// facilitate transaction
					navigation.navigate("finish-transaction");
				}}>
				<ScanImage />
			</Container>
			<Text center>Hold to send</Text>
		</ScreenWrapper>
	);
}
