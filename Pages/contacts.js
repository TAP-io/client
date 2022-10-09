import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import ContactCard from "../components/contacts/contactCard";
import { Container, Icon, Text, TextInput } from "../components/core";
import ScreenWrapper from "../components/core/screenWrapper";
import NewContactModal from "./addContact";
import { GlobalStyles } from "../styles/styles";
import { useNavigation } from "@react-navigation/native";

export default function Contacts() {
	const navigation = useNavigation();
	const [searchField, setSearchField] = useState("");
	return (
		<>
			<ScreenWrapper>
				<Container
					style={{
						...GlobalStyles.pageHeader,
						justifyContent: "space-between",
					}}>
					<Text title primaryDark>
						My Contacts
					</Text>
					<TouchableOpacity
						onPress={() => {
							navigation.navigate("new-contact");
						}}>
						<Icon name="person-add" lg primaryDark />
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
		</>
	);
}
