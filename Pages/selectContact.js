import React, { useState } from "react";
import { useContext } from "react";
import { Button, Container, Text } from "../components/core";
import ContactsModal from "../components/modals/contactsModal";
import { Context } from "../Providers/provider";

export default function SelectContact({}) {
	const { isSpanish } = useContext(Context);
	const [modalVisible, setModalVisible] = useState(false);
	const buttonText = isSpanish ? "" : "Send to Contact";
	return (
		<>
			<Button onPress={() => setModalVisible(true)} variant="variant">
				{buttonText}
			</Button>
			<ContactsModal
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
			/>
		</>
	);
}
