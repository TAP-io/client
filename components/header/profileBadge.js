import React, { useContext, useEffect, useState } from "react";
import { Container, Icon, Text } from "../core";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Context } from "../../Providers/provider";

export default function ProfileBadge({ setModalVisible }) {
	const { address } = useContext(Context);
	const [name, setName] = useState("");
	async function getName() {
		let tempName = await AsyncStorage.getItem("@name");
		console.log({ tempName });
		if (!tempName) {
			setName("Add your name");
		} else {
			setName(tempName);
		}
	}
	useEffect(() => {
		getName();
	}, [address]);

	return (
		<Container
			flex
			row
			justifyCenter
			alignCenter
			onPress={() => {
				setModalVisible(true);
			}}>
			<Container
				style={{
					height: 35,
					width: 35,
					borderRadius: 25,
					backgroundColor: "gray",
				}}></Container>
			<Text marginX={5} subTitle>
				{name}
			</Text>
			<Icon name="caret-down-outline" type="Ion" border />
		</Container>
	);
}
