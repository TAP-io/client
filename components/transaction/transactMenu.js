import React from "react";
import { Container, Icon, Text } from "../core";
import ScreenWrapper from "../core/screenWrapper";
import { CardStyles, Colors, Dim } from "../../styles/styles";
import { useNavigation } from "@react-navigation/native";

export default function TransactionMenu() {
	const navigation = useNavigation();
	const options = [
		{
			icon: <Icon name="currency-btc" type="MaterialCommunity" lg />,
			text: "Currency",
			color: Colors.accent1Light,
			destination: "send-currency",
			pressHandler: () => console.log("pressed"),
			params: {
				toAddress: "",
				amount: 0,
				currency: "",
			},
		},
		{
			icon: <Icon name="wallet-giftcard" type="MaterialCommunity" lg />,
			text: "NFT",
			color: Colors.primary,
			destination: "send-nft",

			pressHandler: () => console.log("pressed"),
		},
		{
			icon: <Icon name="person-add" lg />,
			text: "Contact",
			color: Colors.accent2Light,
			destination: "send-contact",
			pressHandler: () => console.log("pressed"),
		},
	];
	let moduleButton = {
		width: Dim.width * 0.28,
		height: Dim.width * 0.28,
		borderRadius: 30,
		marginHorizontal: 4,
	};
	return (
		<Container style={{ marginTop: 50 }}>
			<Text title marginB={10}>
				Or Do You Want to Send?
			</Text>
			<Container
				bg
				style={{
					...CardStyles.sectionCard,
					width: Dim.width - 20,
					borderRadius: 30,
				}}>
				<Container row justifyCenter>
					{options.map((item) => {
						return (
							<Container
								onPress={() =>
									navigation.navigate(item.destination, item.params)
								}
								column
								justifyCenter
								style={{ ...moduleButton, backgroundColor: item.color }}>
								{item.icon}
								<Text subTitle marginTop={10}>
									{item.text}
								</Text>
							</Container>
						);
					})}
				</Container>
			</Container>
		</Container>
	);
}
