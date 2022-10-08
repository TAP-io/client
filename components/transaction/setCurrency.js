import React, { useEffect, useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { Colors } from "../../styles/styles";
import { Container, Icon, Text } from "../core";
export default function SetCurrency({ currency, isFiat }) {
	const [value, setValue] = useState(0);
	const [error, setError] = useState();
	function handleChange(newValue) {
		if (isFiat) {
			if (newValue > currency.fiat) {
				console.log("its bigger, not allowed");
				return;
			} else {
				console.log("its smaller");
				setValue(newValue);
			}
		} else {
			if (newValue > currency.balance) {
				return;
			} else {
				setValue(newValue);
			}
		}
	}

	return (
		<Container>
			<Container
				row
				justifyCenter
				alignEnd
				style={{
					borderBottomWidth: 1,
					borderStyle: "solid",
					borderColor: Colors.border,
				}}>
				<Text marginR={5} marginB={4}>
					{isFiat ? "$" : currency.ticker}
				</Text>

				<TextInput
					placeholder={"0.00"}
					value={value}
					onChangeText={(newValue) => handleChange(newValue)}
					style={{ fontSize: 35, fontFamily: "Ubuntu_500Medium" }}
				/>
			</Container>
			<Text>
				{isFiat
					? `$ ${currency.fiat}`
					: `${currency.ticker} ${currency.balance}`}
			</Text>
		</Container>
	);
}
