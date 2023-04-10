import { View, Button, TouchableOpacity } from "react-native";
import React from "react";
import {
  AppRoute,
  BankRoutes,
  StackNavigationProps,
  useRootNavigationProp,
} from "navigation/types";
import { Text } from "../../../components";
import { useNavigation } from "@react-navigation/native";
export default function BankEntry({
  route,
}: StackNavigationProps<BankRoutes, "Dashboard">) {
  const navigation =
    useNavigation<useRootNavigationProp<AppRoute, BankRoutes, "Dashboard">>();
  const { title, location } = route.params.item;
  console.log(route.params.item);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>hey hello how are u doing</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />

      <Text>Make money</Text>
      <View style={{ marginVertical: 50 }}>
        <TouchableOpacity>
          <Text
            onPress={() =>
              navigation.navigate("BankNavigator", {
                screen: "Access",
                params: { title: title, location: location },
              })
            }
            variant="title"
          >
            {title}
          </Text>
        </TouchableOpacity>

        <Text textAlign="center">{location}</Text>
      </View>
      <Button
        title="Next"
        onPress={() =>
          navigation.navigate("BankNavigator", {
            screen: "Access",
            params: { title: title, location: location },
          })
        }
      />
    </View>
  );
}
