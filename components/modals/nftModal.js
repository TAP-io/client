import React, { useContext } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dim, ModalStyles } from "../../styles/styles";
import Modal from "react-native-modal";
import { Container, Text } from "../core";
import { Context } from "../../Providers/provider";

export default function NftModal({ modalVisible, setModalVisible, id }) {
	return (
		<Modal
			isVisible={modalVisible}
			animationIn="slideInDown"
			animationOut={"slideOutUp"}
			style={{ ...ModalStyles.modalWrapperTop, height: Dim.height }}>
			<Container
				style={{
					...ModalStyles.modalTop,
					paddingTop: 80,
					paddingHorizontal: 20,
				}}
				bg>
				<Container
					style={{
						height: 300,
						width: Dim.width - 30,
						borderRadius: 5,
						marginRight: 10,
						backgroundColor: "gray",
					}}></Container>
				<Container alignStart fullWidth>
					<Text title>{id}</Text>
					<Text>$346</Text>
					<Text>0x1203947s0823408ghioger0-90u</Text>
				</Container>
			</Container>
			<TouchableOpacity
				style={ModalStyles.behindModal}
				onPress={() => setModalVisible(false)}></TouchableOpacity>
		</Modal>
	);
}
