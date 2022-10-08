import React from "react";
import { Container, Text } from "../core";

export default function ContactCard({ name }) {
	return (
		<Container flex row justifyStart paddingX={10} paddingY={5}>
			<Container
				style={{
					height: 50,
					width: 50,
					borderRadius: 25,
					marginRight: 10,
					backgroundColor: "gray",
				}}></Container>
			<Text subTitle>{name}</Text>
		</Container>
	);
}
