import React, { useState } from "react";
import { Button, Container, Text } from "../components/core";
import ContactsModal from "../components/modals/contactsModal";

export default function SelectContact({}) {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<>
			<Button onPress={() => setModalVisible(true)} variant="variant">
				Send To Contact
			</Button>
			<ContactsModal
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
			/>
		</>
	);
}
