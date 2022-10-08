import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import ContactCard from "../components/contacts/contactCard";
import { Container, Icon, Text, TextInput } from "../components/core";
import ScreenWrapper from "../components/core/screenWrapper";
import { GlobalStyles } from "../styles/styles";

export default function Contacts() {
	const [searchField, setSearchField] = useState("");
	return (
		<ScreenWrapper>
			<Container style={GlobalStyles.pageHeader}>
				<Text title>My Contacts</Text>
			</Container>
			<TextInput
				value={searchField}
				placeholder="Vitalik"
				leftAdornment={<Icon name="search" secondary lg />}
			/>
			<ContactCard name="sam" />
			<ContactCard name="marcos" />
			<ContactCard name="bryan" />
		</ScreenWrapper>
	);
}
