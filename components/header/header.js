import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Container, Text } from "../core";
import Icon from "../core/icon";
import AccountModal from "../modals/accountModal";
import ProfileBadge from "./profileBadge";
import { SafeAreaView } from "react-native";

export default function Header({ goBack }) {
	const [modalVisible, setModalVisible] = useState(false);

	const navigation = useNavigation();
	return (
		<>
			<Container
				flex
				row
				justifyBetween
				fullWidth
				paddingX={10}
				paddingY={5}
				// band-aid for android
				paddingT={50}
			>
				{goBack ? (
					<Container
						onPress={() => {
							navigation.goBack();
						}}
					>
						<Icon name='arrow-back' lg />
					</Container>
				) : (
					<Container
						// todo: this does not work on any tab except for home tab
						onPress={() => {
							navigation.toggleDrawer();
						}}
					>
						<Icon name='menu' lg />
					</Container>
				)}

				<ProfileBadge name={"Brendan"} setModalVisible={setModalVisible} />
				{/* make this icon open up the docs */}
				<Container
					onPress={() => {
						console.log("open docs");
					}}
				>
					<Icon name='help' lg />
				</Container>
			</Container>
			<AccountModal
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
			/>
		</>
	);
}
