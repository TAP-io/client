import React, { useEffect, useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { Colors } from "../../styles/styles";
import { Container, Icon, Text } from "../core";
export default function SetCurrency({ currency }) {
  const [value, setValue] = useState(0);
  const [error, setError] = useState();
  function handleChange(newValue) {
    if (newValue > currency.balance) {
      return;
    } else {
      setValue(newValue);
    }
  }

  return (
    <Container>
      <Container
        row
        justifyCenter
        alignEnd
        style={{
          borderBottomWidth: 1,
          borderStyle: "solid",
          borderColor: Colors.border,
        }}
      >
        <Text marginR={5} marginB={4}>
          {currency ? currency.ticker : "NAN"}
        </Text>

        <TextInput
          placeholder={"0.00"}
          value={value}
          onChangeText={(newValue) => handleChange(newValue)}
          style={{ fontSize: 35, fontFamily: "Ubuntu_500Medium" }}
        />
      </Container>
      <Text>
        {currency ? currency.ticker : "NAN"} {currency && currency.balance}
      </Text>
    </Container>
  );
}
