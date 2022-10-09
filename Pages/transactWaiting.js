import React, { useContext } from "react";
import { Alert, TouchableOpacity, View } from "react-native";
import Login from "../components/auth/loginMethods";
import {
	Button,
	Container,
	Icon,
	ScreenWrapper,
	Text,
} from "../components/core";
import ScanImage from "../components/transaction/scanImage";
import TransactionMenu from "../components/transaction/transactMenu";
import { Context } from "../Providers/provider";
import { Colors, GlobalStyles } from "../styles/styles";
import { readNFC, readNFCWithCallback } from "../Services/nfc";
import { useState } from "react";
export default function Transact() {
	const { address, isSpanish } = useContext(Context);
	const [value, setValue] = useState("");
	const title = isSpanish ? "" : "Waiting to Read Scan";
	const direction = isSpanish
		? ""
		: "Bring your phone close to another phone or an NFC tag and hold to scan";
	return (
		<ScreenWrapper>
			{/* {address === "" && <Login />} */}
			<Text>Hello</Text>
			<Container style={GlobalStyles.pageHeader}>
				<Text title>{title}</Text>
			</Container>
			<Text>{direction}</Text>
			<Button
				onPress={async () => {
					Alert.alert("Hey");
				}}
			>
				Reg Alert
			</Button>
			<Button
				onPress={async () => {
					console.log("pressed");
					await readNFC();
				}}
			>
				Method 1
			</Button>
			<TouchableOpacity
				onPress={async () => {
					console.log("pressed");
					await readNFCWithCallback();
				}}
			>
				<ScanImage />
			</TouchableOpacity>
			<TransactionMenu />
		</ScreenWrapper>
	);
}
