import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AccountRoutes, AppRoute, useRootNavigationProp } from "@navigation";

export default function Booked() {
  const navigation =
    useNavigation<
      useRootNavigationProp<AppRoute, AccountRoutes, "Dashboard">
    >();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Booked</Text>
      <Button
        title="Account Set"
        onPress={() =>
          navigation.navigate("ProfileNavigator", { screen: "AccountSet" })
        }
      />
    </View>
  );
}
