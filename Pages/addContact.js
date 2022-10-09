import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dim, ModalStyles } from "../styles/styles";
import Modal from "react-native-modal";
import { Container, ScreenWrapper, Text, TextInput } from "../components/core";
import { Context } from "../Providers/provider";
import Button from "../components/core/button";
import { useRoute } from "@react-navigation/native";

export default function NewContact({ modalVisible, setModalVisible }) {
	const { name, address } = useRoute().params;
	const [inputName, setInputName] = useState(name || "");
	const [inputAddress, setInputAddress] = useState(address || "");
	return (
		<ScreenWrapper goBack>
			<Container column justifyStart fullWidth>
				<Container
					style={{
						height: 100,
						width: 100,
						borderRadius: 50,
						marginRight: 10,
						backgroundColor: "gray",
					}}
				></Container>
				<TextInput
					value={inputName}
					onChangeText={(newName) => setInputName(newName)}
					placeholder='name'
				/>
				<TextInput
					value={inputAddress}
					onChangeText={(newAddress) => setInputAddress(newAddress)}
					placeholder='0x00000000000000000000000000000'
				/>
			</Container>
			<Button
				variant='contained'
				isFullWidth
				onPress={() => setModalVisible(false)}
			>
				Save Contact
			</Button>
		</ScreenWrapper>
	);
}
