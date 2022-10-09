import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import ContactCard from "../components/contacts/contactCard";
import { Container, Icon, Text, TextInput } from "../components/core";
import ScreenWrapper from "../components/core/screenWrapper";
import NewContactModal from "./addContact";
import { GlobalStyles } from "../styles/styles";
import { useNavigation } from "@react-navigation/native";
import Login from "../components/auth/loginMethods";
import { Context } from "../Providers/provider";

export default function Contacts() {
	const { address } = useContext(Context);
	const navigation = useNavigation();
	const [searchField, setSearchField] = useState("");
	return (
		<>
			<ScreenWrapper>
				{/* {address === "" && <Login />} */}
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
