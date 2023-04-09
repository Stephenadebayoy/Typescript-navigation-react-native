import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  AppRoute,
  BankRoutes,
  TabRoutes,
  useRootNavigationProp,
} from "navigation/types";

export default function Access() {
  const navigation =
    useNavigation<useRootNavigationProp<AppRoute, BankRoutes, "Access">>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Access</Text>
      <Button title="Goback" onPress={() => navigation.goBack()} />
      <Button
        title="settings"
        onPress={() =>
          navigation.navigate("TabNavigator", { screen: "Settings" })
        }
      />
    </View>
  );
}
