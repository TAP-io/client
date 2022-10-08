import React, { useState } from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CardStyles, Dim, Colors } from "../../styles/styles";
import { Container, Icon, Text } from "../core";

export default function NFTCard({ item, openModal, selected, setSelected }) {
	let NFTStyle = {
		width: Dim.width * 0.45,
		margin: 5,
		padding: 0,
		borderRadius: 5,
	};
	let imageStyle = {
		height: 100,
		width: "100%",
		backgroundColor: "gray",
		borerTopRightRadius: 5,
		borerTopLeftRadius: 5,
	};
	let footer = {
		paddingHorizontal: 10,
		paddingVertical: 5,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
	};
	return (
		<Container
			bg
			style={{
				...CardStyles.sectionCard,
				...NFTStyle,
				borderWidth: 2,
				borderColor: item.id === selected ? Colors.primary : Colors.border,
				shadowColor: item.id === selected ? Colors.primary : "transparent",
			}}
			onPress={() => {
				if (selected == item.id) {
					setSelected("");
				} else {
					setSelected(item.id);
				}
			}}>
			{/* todo: make this an image */}
			<View style={{ ...imageStyle }} />
			<Container style={{ ...footer }}>
				<Text>{item.name}</Text>
				<TouchableOpacity
					onPress={() => {
						openModal(item.id);
						// change this it id
					}}>
					<Icon name="more-vert" />
				</TouchableOpacity>
			</Container>
		</Container>
	);
}
