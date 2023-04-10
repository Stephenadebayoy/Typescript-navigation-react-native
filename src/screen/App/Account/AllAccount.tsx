import { View, Text, Button } from "react-native";
import React from "react";
import { AccountRoutes, AppRoute, useRootNavigationProp } from "@navigation";
import { useNavigation } from "@react-navigation/native";

export default function AllAccount() {
  const navigation =
    useNavigation<
      useRootNavigationProp<AppRoute, AccountRoutes, "Dashboard">
    >();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Back" onPress={() => navigation.goBack()} />
      <Text>AllAccount</Text>
      <Button
        title=" Booked"
        onPress={() =>
          navigation.navigate("ProfileNavigator", { screen: "Booked" })
        }
      />
      <Button
        title=" Account set"
        onPress={() =>
          navigation.navigate("ProfileNavigator", { screen: "AccountSet" })
        }
      />
    </View>
  );
}
