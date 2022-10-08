import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dim, ModalStyles } from "../../styles/styles";
import Modal from "react-native-modal";
import { Container, Text, TextInput } from "../core";
import { Context } from "../../Providers/provider";
import Button from "../core/button";

export default function NewContactModal({ modalVisible, setModalVisible }) {
	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	return (
		<Modal
			isVisible={modalVisible}
			animationIn="slideInUp"
			animationOut={"slideOutDown"}
			style={ModalStyles.modalWrapperFullScreen}>
			<Container
				style={{
					...ModalStyles.modalFull,
					paddingTop: 80,
					paddingHorizontal: 20,
				}}
				bg>
				<Container column justifyStart fullWidth>
					<Container
						style={{
							height: 100,
							width: 100,
							borderRadius: 50,
							marginRight: 10,
							backgroundColor: "gray",
						}}></Container>
					<TextInput
						value={name}
						onChangeText={(newName) => setName(newName)}
						placeholder="name"
					/>
					<TextInput
						value={address}
						onChangeText={(newAddress) => setAddress(newAddress)}
						placeholder="0x00000000000000000000000000000"
					/>
				</Container>
				<Button
					variant="contained"
					isFullWidth
					onPress={() => setModalVisible(false)}>
					Save Contact
				</Button>
			</Container>
		</Modal>
	);
}
