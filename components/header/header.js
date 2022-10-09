import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Container, Text } from "../core";
import Icon from "../core/icon";
import AccountModal from "../modals/accountModal";
import ProfileBadge from "./profileBadge";
import { Platform, SafeAreaView } from "react-native";
import { Colors } from "../../styles/styles";

export default function Header({ goBack }) {
	const [modalVisible, setModalVisible] = useState(false);

	const navigation = useNavigation();
	return (
		<>
			<SafeAreaView>
				<Container
					row
					justifyBetween
					fullWidth
					paddingX={10}
					paddingY={5}
					// band-aid for android
					paddingT={Platform.OS === "android" ? 50 : 0}>
					{goBack ? (
						<Container
							onPress={() => {
								navigation.goBack();
							}}>
							<Icon name="arrow-back" lg />
						</Container>
					) : (
						<Container
							style={{
								backgroundColor: Colors.primaryDark,
								padding: 2,
								borderRadius: "50%",
							}}
							// todo: this does not work on any tab except for home tab
							onPress={() => {}}>
							<Icon
								name="contactless-payment"
								primary
								type={"MaterialCommunity"}
								lg
							/>
						</Container>
					)}

					<ProfileBadge name={"Brendan"} setModalVisible={setModalVisible} />
					{/* make this icon open up the docs */}
					<Container
						onPress={() => {
							console.log("open docs");
						}}>
						<Icon name="help" lg />
					</Container>
				</Container>
			</SafeAreaView>
			<AccountModal
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
			/>
		</>
	);
}
