import React, { useContext, useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors, Dim, ModalStyles } from "../../styles/styles";
import Modal from "react-native-modal";
import { Container, Text, Button } from "../core";
import { Context } from "../../Providers/provider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Share } from "react-native";

export default function AccountModal({ modalVisible, setModalVisible }) {
	const { address, setAddress, isSpanish } = useContext(Context);
	const [name, setName] = useState("");
	async function getName() {
		let tempName = await AsyncStorage.getItem("@name");
		if (!tempName) {
			setName("Add your name");
		} else {
			setName(tempName);
		}
	}
	const link = `https://www.tapme.contact/contact/${address}/${name}`;
	const share = () => {
		Share.share({ url: link });
	};
	const deleteAccount = async () => {
		await AsyncStorage.removeItem("@address");
		await AsyncStorage.removeItem("@priv_key");
		await AsyncStorage.removeItem("@name");

		setAddress("");
	};
	useEffect(() => {
		getName();
	}, [address]);
	return (
		<Modal
			isVisible={modalVisible}
			animationIn="slideInDown"
			animationOut={"slideOutUp"}
			style={ModalStyles.modalWrapperTop}>
			<Container
				style={{
					...ModalStyles.modalTop,
					paddingTop: 80,
					paddingHorizontal: 20,
				}}
				bg>
				<Container row justifyStart fullWidth>
					<Container
						style={{
							height: 100,
							width: 100,
							borderRadius: 50,
							marginRight: 10,
							backgroundColor: Colors.accent1Light,
						}}></Container>
					<Container alignStart>
						<Text title>{name}</Text>
						<Text>{address.slice(0, 20)}...</Text>
					</Container>
				</Container>
				<Container row justifyCenter marginT={50}>
					<Button variant="contained" onPress={share}>
						{isSpanish ? "" : "Comparte tu Perfil"}
					</Button>
					<Button variant="danger" onPress={deleteAccount}>
						{isSpanish ? "" : "Elimina tu Perfil"}
					</Button>
				</Container>
			</Container>

			<TouchableOpacity
				style={ModalStyles.behindModal}
				onPress={() => setModalVisible(false)}></TouchableOpacity>
		</Modal>
	);
}
