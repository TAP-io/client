import React from "react";
import { Container, Text } from "../components/core";
import ScreenWrapper from "../components/core/screenWrapper";
import DeepLinking from "../components/linking/DeepLinking";
import TransactionCard from "../components/transaction/transactionCard";
import { GlobalStyles } from "../styles/styles";

export default function Home() {
	let transactions = [
		{
			from: "Sam",
			to: "You",
			date: "now",
			type: "currency",
			amount: "245.56",
			what: "DOGE",
		},
		{
			from: "AirDrop",
			to: "Bryan",
			date: "yesterday",
			type: "NFT",
			title: "Beans",
			description: "He's a cat",
		},
		{
			who: "Mukund",
			date: "",
			type: "contact",
		},
	];
	return (
		<ScreenWrapper scrollEnabled>
			<DeepLinking />
			<Container style={GlobalStyles.pageHeader}>
				<Text title primaryDark>
					What's Tappin'?
				</Text>
			</Container>
			{transactions.map((item) => {
				return <TransactionCard item={item} />;
			})}
		</ScreenWrapper>
	);
}
