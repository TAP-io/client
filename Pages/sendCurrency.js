import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useContext, useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import {
	Container,
	ScreenWrapper,
	Text,
	Icon,
	Button,
} from "../components/core";
import CurrencyCard from "../components/transaction/currencyCard";
import SetCurrency from "../components/transaction/setCurrency";
import { Context } from "../Providers/provider";
import { GlobalStyles } from "../styles/styles";

import * as API from "../api/wallet";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SendCurrency() {
	const { isSpanish } = useContext(Context);

	const navigation = useNavigation();
	const [selected, setSelected] = useState(0);
	const { toAddress, amount, currency } = useRoute().params;
	const [address, setAddress] = useState("");

	const [tokens, setTokens] = useState([]);
	const [nfts, setNFTs] = useState([]);
	const [loading, setLoading] = useState(true);
	const [currencies, setCurrencies] = useState([]);

	useEffect(() => {
		init();
	}, []);

	async function init() {
		//let add = await AsyncStorage.getItem("@address");
		let add = "0x8cF84867ba54bd078F678fb276BB1a103efce7d3";

		setAddress(add);
		getWalletAssets(add);
	}

	async function getWalletAssets(add) {
		//get tokens held
		let tokens = await API.getTokenBalances(add);
		let nfts = await API.getAllNfts(add);

		setTokens(tokens);
		setNFTs(nfts);
		console.log("========================");
		console.log(tokens);

		let tokensDone = [];
		for (let i = 0; i < tokens.length; i++) {
			let obj = {
				ticker: tokens[i].metadata.symbol || "SYM",

				balance: tokens[i].balance,
			};
			console.log(obj);
			tokensDone.push(obj);
		}
		setCurrencies(tokensDone);
		console.log(currencies);
		setLoading(false);
	}

	return (
		<ScreenWrapper goBack>
			<Container
				style={{ ...GlobalStyles.pageHeader, justifyContent: "space-between" }}>
				<Text title>{isSpanish ? "" : "Enviar Moneda"}</Text>
			</Container>

			<SetCurrency currency={currencies[selected]} />
			{currencies.map((item, idx) => {
				return (
					<CurrencyCard
						item={item}
						index={idx}
						selected={selected}
						setSelected={setSelected}
					/>
				);
			})}
			<Button
				isFullWidth
				variant="contained"
				onPress={() => {
					navigation.navigate("awaiting-send");
				}}>
				{isSpanish ? "" : "Next"}
			</Button>
		</ScreenWrapper>
	);
}
