import React, { useContext } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dim, ModalStyles } from "../../styles/styles";
import Modal from "react-native-modal";
import { Container, Text } from "../core";
import { Context } from "../../Providers/provider";
import Button from "../core/button";

export default function NewContactModal({ modalVisible, setModalVisible }) {
	const { address, loggedIn } = useContext(Context);
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
				<Container row justifyStart fullWidth>
					<Container
						style={{
							height: 100,
							width: 100,
							borderRadius: 50,
							marginRight: 10,
							backgroundColor: "gray",
						}}></Container>
					<Container>
						<Text title>Brendan</Text>
					</Container>
				</Container>
				<Button onPress={() => setModalVisible(false)}>Save Contact</Button>
			</Container>
		</Modal>
	);
}
