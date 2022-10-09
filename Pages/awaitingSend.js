import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { Container, ScreenWrapper, Text } from "../components/core";
import ScanImage from "../components/transaction/scanImage";
import { Context } from "../Providers/provider";
import { GlobalStyles } from "../styles/styles";
import SelectContact from "./selectContact";

export default function AwaitingSend() {
  const { isSpanish } = useContext(Context);
  const navigation = useNavigation();
  const title = isSpanish ? "" : "Transacción Lista";
  const direction = isSpanish ? "" : "Presione para Enviar";
  return (
    <ScreenWrapper goBack>
      <Container style={GlobalStyles.pageHeader}>
        <Text title center>
          {title}
        </Text>
      </Container>
      <SelectContact />
      <Container
        marginT={40}
        onPress={() => {
          // facilitate transaction
          navigation.navigate("finish-transaction");
        }}
      >
        <ScanImage />
      </Container>
      <Text center>{direction}</Text>
    </ScreenWrapper>
  );
}
