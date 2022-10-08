import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import ContactCard from "../components/contacts/contactCard";
import { Container, Icon, Text, TextInput } from "../components/core";
import ScreenWrapper from "../components/core/screenWrapper";
import NewContactModal from "../components/modals/newContact";
import { GlobalStyles } from "../styles/styles";

export default function Contacts() {
	const [searchField, setSearchField] = useState("");
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<>
			<ScreenWrapper>
				<Container
					style={{
						...GlobalStyles.pageHeader,
						justifyContent: "space-between",
					}}>
					<Text title>My Contacts</Text>
					<TouchableOpacity onPress={() => setModalVisible(true)}>
						<Icon name="person-add" lg primary />
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
			</ScreenWrapper>
			<NewContactModal
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
			/>
		</>
	);
}
