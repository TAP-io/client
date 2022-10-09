import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import {
  Button,
  Container,
  Icon,
  ScreenWrapper,
  Text,
} from "../components/core";
import { Context } from "../Providers/provider";
import { GlobalStyles } from "../styles/styles";

export default function FinishTransaction({}) {
  const { isSpanish } = useContext(Context);
  const navigation = useNavigation();
  const [success, setSuccess] = useState(true);
  const buttonText = isSpanish ? "" : "Llevame al Inicio";
  const failedMessage = isSpanish ? "" : "Transacción Failed";
  const successMessage = isSpanish ? "" : "Transacciónes Exitosas";
  return (
    <ScreenWrapper>
      <Container
        onPress={() => setSuccess(!success)}
        style={{ ...GlobalStyles.pageHeader, justifyContent: "space-between" }}
      >
        <Text title>{success ? successMessage : failedMessage}</Text>
        <Icon
          name={success ? "check" : "error"}
          xl
          success={success}
          danger={!success}
        />
      </Container>
      <Button
        leftIcon={<Icon name="home" />}
        fullWidth
        variant="outlined"
        onPress={() => {
          navigation.navigate("home-tab");
        }}
      >
        Take Me Home
      </Button>
    </ScreenWrapper>
  );
}
