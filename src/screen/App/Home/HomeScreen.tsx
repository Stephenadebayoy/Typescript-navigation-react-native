import { Button, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import {
  AppRoute,
  BankRoutes,
  TabRoutes,
  useRootNavigationProp,
} from "navigation/types";

export default function HomeScreen() {
  const navigation =
    useNavigation<useRootNavigationProp<AppRoute, BankRoutes, "Dashboard">>();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="Settings"
        onPress={() =>
          navigation.navigate("TabNavigator", { screen: "Settings" })
        }
      />
      <View style={{ marginVertical: 20 }}>
        <Button
          title="Bank"
          onPress={() =>
            navigation.navigate("BankNavigator", { screen: "Dashboard" })
          }
        />
      </View>
    </View>
  );
}
