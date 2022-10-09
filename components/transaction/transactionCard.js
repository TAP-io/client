import React from "react";
import { Image } from "react-native";
import { CardStyles, GlobalStyles } from "../../styles/styles";
import { Button, Container, Icon, Text } from "../core";
import SampleNFT from "../../assets/beans.png";
import { TouchableOpacity } from "react-native-gesture-handler";
export default function TransactionCard({ item }) {
	if (item.type === "currency") {
		return (
			<Container
				fullWidth
				bg
				style={{ ...CardStyles.card, ...CardStyles.shadow }}>
				<Container row justifyBetween fullWidth>
					<Text subTitle>
						{item.from} tapped with {item.to}
					</Text>
					<Text>{item.date}</Text>
				</Container>
				<Container row justifyBetween fullWidth>
					<Text title>
						{item.what} {item.amount}
					</Text>
				</Container>
			</Container>
		);
	} else if (item.type === "NFT") {
		return (
			<Container
				fullWidth
				bg
				style={{ ...CardStyles.card, ...CardStyles.shadow }}>
				<Container row justifyBetween fullWidth>
					<Text subTitle>
						{item.to} tapped a {item.from}
					</Text>
					<Text>{item.date}</Text>
				</Container>
				<Image
					source={SampleNFT}
					style={{ width: "100%", borderRadius: 40, marginVertical: 10 }}
				/>
				<Container row justifyBetween fullWidth>
					<Container>
						<Text title>{item.title}</Text>
						<Text>{item.description}</Text>
					</Container>
					<TouchableOpacity>
						<Icon name="more-vert" lg />
					</TouchableOpacity>
				</Container>
			</Container>
		);
	} else if (item.type === "contact") {
		return (
			<Container
				fullWidth
				bg
				style={{ ...CardStyles.card, ...CardStyles.shadow }}>
				<Container row justifyStart fullWidth>
					<Image
						source={SampleNFT}
						style={{ height: 75, width: 75, borderRadius: 50, margin: 5 }}
					/>
					<Container flex column alignStart>
						<Text subTitle marginB={5}>
							Your contact {item.who} just joined Tap.io!
						</Text>
						<Button>Send them a welcome NFT!</Button>
					</Container>
				</Container>
			</Container>
		);
	} else {
		return <></>;
	}
}
