import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Button, Container, ScreenWrapper, Text } from "../components/core";
import NftModal from "../components/modals/nftModal";
import NFTCard from "../components/transaction/nftCard";
import { Context } from "../Providers/provider";
import { GlobalStyles } from "../styles/styles";
import * as API from "../api/wallet";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SendNFT() {
  const { isSpanish } = useContext(Context);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [focusedId, setFocusedId] = useState("");
  const [selected, setSelected] = useState("");
  function openModal(id) {
    setFocusedId(id);
    setModalVisible(true);
  }

  const [tokens, setTokens] = useState([]);
  const [NFTS, setNFTs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currencies, setCurrencies] = useState([]);
  const [address, setAddress] = useState("");

  useEffect(() => {
    init();
  }, []);

  async function init() {
    //let add = await AsyncStorage.getItem("@address");
    let add = "0x8cF84867ba54bd078F678fb276BB1a103efce7d3";

    setAddress(add);
    getWalletAssets(add);
  }

  async function getWalletAssets(add) {
    //get tokens held
    let tokens = await API.getTokenBalances(add);
    let nfts = await API.getAllNfts(add);

    setNFTs(nfts);
    console.log("========================");

    setNFTs(nfts);
    console.log(nfts);
    setLoading(false);
  }

  return (
    <ScreenWrapper goBack>
      <Container style={GlobalStyles.pageHeader}>
        <Text title>{isSpanish ? "" : "Send NFT"}</Text>
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
          }}
        >
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
