import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AppRoute, BankRoutes, useRootNavigationProp } from "navigation/types";
export default function BankEntry() {
  const navigation =
    useNavigation<useRootNavigationProp<AppRoute, BankRoutes, "Dashboard">>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>hey hello how are u doing</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />

      <Text>Make money</Text>
      <Button
        title="Next"
        onPress={() =>
          navigation.navigate("BankNavigator", { screen: "Access" })
        }
      />
    </View>
  );
}
