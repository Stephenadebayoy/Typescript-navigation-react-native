import { View, TextInput } from "react-native";
import React from "react";
import { Text } from "../../components";
import { GColors } from "../../constants";
import { width } from "../../constants/Layout";

export default function Login() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Email</Text>
      <TextInput
        style={{
          backgroundColor: GColors.lightGrey,
          width: width / 1.1,
          height: 50,
          padding: 10,
        }}
        placeholder="Enter your email"
      />

      <Text>Password</Text>
      <TextInput
        style={{
          backgroundColor: GColors.lightGrey,
          width: width / 1.1,
          height: 50,
          padding: 10,
        }}
        placeholder="Enter your password"
      />
    </View>
  );
}
