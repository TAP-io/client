import React, { useContext } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dim, ModalStyles } from "../../styles/styles";
import Modal from "react-native-modal";
import { Container, Text } from "../core";
import { Context } from "../../Providers/provider";

export default function AccountModal({ modalVisible, setModalVisible }) {
	const { address, loggedIn } = useContext(Context);
	return (
		<Modal
			isVisible={modalVisible}
			animationIn='slideInDown'
			animationOut={"slideOutUp"}
			style={ModalStyles.modalWrapperTop}
		>
			<Container
				style={{
					...ModalStyles.modalTop,
					paddingTop: 80,
					paddingHorizontal: 20,
				}}
				bg
			>
				<Container row justifyStart fullWidth>
					<Container
						style={{
							height: 100,
							width: 100,
							borderRadius: 50,
							marginRight: 10,
							backgroundColor: "gray",
						}}
					></Container>
					<Container>
						<Text title>Brendan</Text>
					</Container>
				</Container>
			</Container>
			<TouchableOpacity
				style={ModalStyles.behindModal}
				onPress={() => setModalVisible(false)}
			>
				<Text>Close</Text>
			</TouchableOpacity>
		</Modal>
	);
}
