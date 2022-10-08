import React, { useState } from "react";
import { CardStyles, Colors } from "../../styles/styles";
import { Container, Text } from "../core";

export default function CurrencyCard({ item, index, selected, setSelected }) {
	return (
		<Container
			row
			justifyBetween
			fullWidth
			style={{
				backgroundColor: index === selected ? Colors.fg : "transparent",
				paddingHorizontal: 10,
				paddingVertical: 5,
				borderRadius: 10,
			}}
			onPress={() => {
				if (selected === index) {
					setSelected(null);
				} else {
					setSelected(index);
				}
			}}>
			<Container alignStart>
				<Text title>{item.ticker}</Text>
				<Text small secondary>
					{item.name}
				</Text>
			</Container>
			<Container alignEnd>
				<Text title>{item.balance}</Text>
				<Text>${item.fiat}</Text>
			</Container>
		</Container>
	);
}
