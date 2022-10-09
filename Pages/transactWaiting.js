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
	const title = isSpanish ? "" : "Esperando a Leer Tag";
	const direction = isSpanish
		? ""
		: "Acerca tu telefono al otro telefono o al tag NFC y manten presionado para escanear";
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
