import React, { useContext } from "react";
import { View } from "react-native";
import Login from "../components/auth/loginMethods";
import { Container, Icon, ScreenWrapper, Text } from "../components/core";
import ScanImage from "../components/transaction/scanImage";
import TransactionMenu from "../components/transaction/transactMenu";
import { Context } from "../Providers/provider";
import { Colors, GlobalStyles } from "../styles/styles";

export default function Transact() {
	const { address, isSpanish } = useContext(Context);
	const title = isSpanish ? "" : "Waiting to Read Scan";
	const direction = isSpanish
		? ""
		: "Bring your phone close to another phone or an NFC tag and hold to scan";
	return (
		<ScreenWrapper>
			{/* {address === "" && <Login />} */}
			<Container style={GlobalStyles.pageHeader}>
				<Text title>{title}</Text>
			</Container>
			<Text>{direction}</Text>
			<ScanImage />
			<TransactionMenu />
		</ScreenWrapper>
	);
}
