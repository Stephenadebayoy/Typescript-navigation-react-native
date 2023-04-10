import { View, Button } from "react-native";
import React from "react";
import { Text } from "../../../components";
import { useNavigation } from "@react-navigation/native";
import {
  AppRoute,
  BankRoutes,
  StackNavigationProps,
  useRootNavigationProp,
} from "navigation/types";

export default function Access({
  route,
}: StackNavigationProps<BankRoutes, "Access">) {
  const { title, location } = route.params;
  console.log(route.params);
  const navigation =
    useNavigation<useRootNavigationProp<AppRoute, BankRoutes, "Access">>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ marginVertical: 20 }}>
        <Text variant="title">{title}</Text>
        <Text variant="bold" textAlign="center">
          {location}
        </Text>
      </View>
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
