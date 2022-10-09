import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dim, GlobalStyles, ModalStyles } from "../../styles/styles";
import Modal from "react-native-modal";
import { Container, Icon, Text, TextInput } from "../core";
import { Context } from "../../Providers/provider";
import ContactCard from "../contacts/contactCard";

export default function ContactsModal({ modalVisible, setModalVisible }) {
	const [searchField, setSearchField] = useState("");
	const { isSpanish } = useContext(Context);
	return (
		<Modal
			isVisible={modalVisible}
			animationIn="slideInUp"
			animationOut={"slideOutDown"}
			style={ModalStyles.modalWrapperFullScreen}>
			<Container
				style={{
					...ModalStyles.modalFull,
					paddingTop: 20,
					paddingHorizontal: 20,
				}}
				bg>
				<Container
					fullWidth
					style={{
						...GlobalStyles.pageHeader,
						justifyContent: "space-between",
					}}>
					<Text subTitle>{isSpanish ? "" : "My Contacts"}</Text>
					<TouchableOpacity onPress={() => setModalVisible(false)}>
						<Icon name="close" />
					</TouchableOpacity>
				</Container>
				<TextInput
					value={searchField}
					placeholder="Vitalik"
					leftAdornment={<Icon name="search" secondary lg marginL={3} />}
				/>
				<ContactCard name="sam" />
				<ContactCard name="marcos" />
				<ContactCard name="bryan" />
			</Container>
		</Modal>
	);
}
