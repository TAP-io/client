import React from "react";
import { Container, ScreenWrapper, Text, Button } from "../components/core";
import { GlobalStyles } from "../styles/styles";

export default function SendContact() {
  // this screen isn't being used
  return (
    <ScreenWrapper goBack>
      <Container style={GlobalStyles.pageHeader}>
        <Text title>Send Your Contact</Text>
      </Container>
      <Button variant={"contained"}>Share Your Contact</Button>
    </ScreenWrapper>
  );
}
