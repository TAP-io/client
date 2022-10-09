import React, { useContext } from "react";
import Login from "../components/auth/loginMethods";
import { Container, Text } from "../components/core";
import ScreenWrapper from "../components/core/screenWrapper";
import DeepLinking from "../components/linking/DeepLinking";
import TransactionCard from "../components/transaction/transactionCard";
import { Context } from "../Providers/provider";
import { GlobalStyles } from "../styles/styles";

export default function Home() {
	const { address, isSpanish } = useContext(Context);
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
	const title = isSpanish ? "" : "¿Que esta Tappeando?";
	return (
		<ScreenWrapper scrollEnabled>
			<DeepLinking />
			{/* {address === "" && <Login />} */}
			<Container style={GlobalStyles.pageHeader}>
				<Text title primaryDark>
					{title}
				</Text>
			</Container>
			{transactions.map((item) => {
				return <TransactionCard item={item} />;
			})}
		</ScreenWrapper>
	);
}
