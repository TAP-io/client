import { useRoute } from "@react-navigation/native";
import React from "react";
import { Container, Icon, ScreenWrapper, Text } from "../components/core";
import ScanImage from "../components/transaction/scanImage";
import TransactionMenu from "../components/transaction/transactMenu";
import { Colors, GlobalStyles } from "../styles/styles";

export default function Transact() {
	return (
		<ScreenWrapper>
			<Container style={GlobalStyles.pageHeader}>
				<Text title>Waiting To Read Scan</Text>
			</Container>
			<Text>
				Bring your phone close to another phone or an NFC tag and hold to scan
			</Text>
			<ScanImage />
			<TransactionMenu />
		</ScreenWrapper>
	);
}
