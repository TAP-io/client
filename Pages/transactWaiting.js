import React, { useContext } from "react";
import { View } from "react-native";
import Login from "../components/auth/loginMethods";
import { Container, Icon, ScreenWrapper, Text } from "../components/core";
import ScanImage from "../components/transaction/scanImage";
import TransactionMenu from "../components/transaction/transactMenu";
import { Context } from "../Providers/provider";
import { Colors, GlobalStyles } from "../styles/styles";

export default function Transact() {
	const { address } = useContext(Context);
	return (
		<ScreenWrapper>
			{/* {address === "" && <Login />} */}
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
