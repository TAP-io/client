import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useContext, useState } from "react";
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

export default function SendCurrency() {
	const { isSpanish } = useContext(Context);

	const navigation = useNavigation();
	const [selected, setSelected] = useState(0);
	const [isFiat, setIsFiat] = useState(false);
	const { toAddress, amount, currency } = useRoute().params;

	let currencies = [
		{
			name: "USD Coin",
			ticker: "USDC",
			balance: 200,
			fiat: 200,
		},
		{
			name: "Etherium",
			ticker: "ETH",
			balance: 200,
			fiat: 0.02,
		},
		{
			name: "Bitcoin",
			ticker: "BTC",
			balance: 200,
			fiat: 0.001,
		},
	];
	return (
		<ScreenWrapper goBack>
			<Container
				style={{ ...GlobalStyles.pageHeader, justifyContent: "space-between" }}>
				<Text title>{isSpanish ? "" : "Send Currency"}</Text>
				<TouchableOpacity onPress={() => setIsFiat(!isFiat)} style={{}}>
					<Icon
						name="swap-horizontal-circle-outline"
						type={"MaterialCommunity"}
					/>
				</TouchableOpacity>
			</Container>

			<SetCurrency currency={currencies[selected]} isFiat={isFiat} />
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
