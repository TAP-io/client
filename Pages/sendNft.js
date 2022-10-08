import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Button, Container, ScreenWrapper, Text } from "../components/core";
import NftModal from "../components/modals/nftModal";
import NFTCard from "../components/transaction/nftCard";
import { GlobalStyles } from "../styles/styles";

export default function SendNFT() {
	const navigation = useNavigation();
	const [modalVisible, setModalVisible] = useState(false);
	const [focusedId, setFocusedId] = useState("");
	const [selected, setSelected] = useState("");
	function openModal(id) {
		setFocusedId(id);
		setModalVisible(true);
	}
	let NFTS = [
		{
			name: "dog",
			id: "dog",
		},
		{
			name: "cat",
			id: "cat",
		},
		{
			name: "cow",
			id: "cow",
		},
		{
			name: "lion",
			id: "lion",
		},
	];
	return (
		<ScreenWrapper goBack>
			<Container style={GlobalStyles.pageHeader}>
				<Text title>Send NFT</Text>
			</Container>
			<Container flex row wrap justifyCenter alignStart>
				{NFTS.map((item) => {
					return (
						<NFTCard
							item={item}
							openModal={openModal}
							selected={selected}
							setSelected={setSelected}
						/>
					);
				})}
			</Container>
			{selected !== "" && (
				<Button
					marginT={20}
					variant="contained"
					isFullWidth
					onPress={() => {
						navigation.navigate("awaiting-send");
					}}>
					Next
				</Button>
			)}
			<NftModal
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
				id={focusedId}
			/>
		</ScreenWrapper>
	);
}
