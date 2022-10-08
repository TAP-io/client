import React from "react";
import { Container, Icon, Text } from "../core";
export default function ProfileBadge({ name, setModalVisible }) {
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
